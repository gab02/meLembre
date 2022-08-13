import { DocumentoStorage } from './model/document';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

import {
  IonList,
  NavController,
  Platform,
  ToastController,
} from '@ionic/angular';
import { Item, StorageService } from '../shared/services/storage.service';
import { Storage } from '@ionic/storage';
import { CustomModalPage } from '../shared/custom-modal/custom-modal.page';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: Item[] = [];

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  newItem: Item = <Item>{};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('mylist', { static: false }) mylist: IonList;

  constructor(
    private storageService: StorageService,
    private plt: Platform,
    public dialog: MatDialog,

    private router: Router,
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  async ngOnInit(): Promise<void> {
    await this.storage.create();
  }
  // CREATE
  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
    if (this.items.length === 10) {
      this.openMsgModal(
        'error',
        'Não é possível inserir mais que 10 itens',
        '...'
      );
    } else {
      if (
        this.newItem.nomeDocumento === undefined ||
        this.newItem.value === undefined
      ) {
        this.openMsgModal('error', 'Insira corretamente os dados', '...');
      } else {
        this.storageService.addItem(this.newItem).then((item) => {
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          this.newItem = <Item>{};
          this.showToast('Item added!');
          this.loadItems(); // Or add it to the array directly
        });
      }
    }
  }
  navigate(local) {
    this.router.navigate([local]);
  }
  // READ
  loadItems() {
    this.storageService.getItems().then((items) => {
      this.items = items;
    });
  }
  alert(): void {
    this.openMsgModal('error', 'Infelizmente você não tem permissões', '...');
  }
  // UPDATE
  updateItem(item: Item) {
    item.nomeDocumento = `UPDATED: ${item.nomeDocumento}`;
    item.modified = Date.now();

    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.storageService.updateItem(item).then((item: any) => {
      this.showToast('Item updated!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or update it inside the array directly
    });
  }

  // DELETE
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(() => {
      this.showToast('Item removed!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or splice it from the array directly
    });
  }

  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
  openMsgModal(type, title, text): void {
    const dialogRef = this.dialog.open(CustomModalPage, {
      width: '80%',
      panelClass: 'custom-modalbox',
      // eslint-disable-next-line object-shorthand
      data: { type: type, title: title, text: text },
    });
  }
}
