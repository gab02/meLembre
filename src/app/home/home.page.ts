import { DocumentoStorage } from './model/document';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

import {
  AlertController,
  IonList,
  LoadingController,
  NavController,
  Platform,
  ToastController,
} from '@ionic/angular';
import { Item, StorageService } from '../shared/services/storage.service';
import { Storage } from '@ionic/storage';
import { CustomModalPage } from '../shared/custom-modal/custom-modal.page';
import { MatDialog } from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';
import {
  ActionPerformed,
  LocalNotifications,
  LocalNotificationSchema,
} from '@capacitor/local-notifications';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: Item[] = [];
  documentsList: any[] = [];
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  newItem: Item = <Item>{};
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('mylist', { static: false }) mylist: IonList;

  constructor(
    private alertCtrl: AlertController,
    private storageService: StorageService,
    private plt: Platform,
    public dialog: MatDialog,
    public loadingController: LoadingController,
    private dateAdapter: DateAdapter<any>,
    private router: Router,
    private datePipe: DatePipe,
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  async ngOnInit(): Promise<void> {
    this.documentsList = [
      { model: 'RG' },
      { model: 'PASSAPORTE' },
      { model: 'CNH' },
      { model: 'CARTEIRA DE ESTUDANTE' },
      { model: 'CONTRATO DE ALUGUEL' },
      { model: 'CONTAS A VENCER' },
      { model: 'IPTU' },
      { model: 'IPVA' },
    ];
    this.dateAdapter.setLocale('pt');
    await this.storage.create();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // Make sure we are allowed to send notifications!
    await LocalNotifications.checkPermissions();

    // Register your custom action types
    LocalNotifications.registerActionTypes({
      types: [
        {
          id: 'CHAT_MSG',
          actions: [
            {
              id: 'view',
              title: 'Open Chat',
            },
            {
              id: 'remove',
              title: 'Dismiss',
              destructive: true,
            },
            {
              id: 'respond',
              title: 'Respond',
              input: true,
            },
          ],
        },
      ],
    });

    // Received when notification is executed at the scheduled time
    LocalNotifications.addListener(
      'localNotificationReceived',
      (notification: LocalNotificationSchema) => {
        this.presentAlert(
          `Received: ${notification.title}`,
          `Custom Data: ${JSON.stringify(notification.extra)}`
        );
      }
    );

    // Received when a special action button is clicked or notification is tapped
    LocalNotifications.addListener(
      'localNotificationActionPerformed',
      (notification: ActionPerformed) => {
        this.presentAlert(
          `Performed: ${notification.actionId}`,
          `Input value: ${notification.inputValue}`
        );
      }
    );
  }
  // CREATE
  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    if (this.items === null) {
      this.storageService.addItem(this.newItem).then((item) => {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.newItem = <Item>{};
        this.showToast('DOCUMENTO ADICIONADO COM SUCESSO!');
        this.loadItems(); // Or add it to the array directly
      });
    } else {
      if (this.items.length === 5) {
        this.openMsgModal(
          'error',
          'Não é possível inserir mais que 10 itens',
          '...'
        );
      } else {
        if (
          this.newItem.nomeDocumento === undefined ||
          this.newItem.value === undefined ||
          this.newItem.nome === undefined
        ) {
          this.openMsgModal('error', 'Insira corretamente os dados', '...');
        } else {
          this.storageService.addItem(this.newItem).then((item) => {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            this.newItem = <Item>{};
            this.showToast('DOCUMENTO ADICIONADO COM SUCESSO!');
            this.loadItems(); // Or add it to the array directly
          });
        }
      }
    }
  }
  console() {
    console.log(this.items[0].nome);
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
  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async doRefresh(event) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Validando...',
    });
    await loading.present();
    this.router.navigate(['home']);

    setTimeout(() => {
      event.target.complete();
    }, 5000);
    await loading.dismiss();
  }
  // DELETE
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(() => {
      this.showToast('DOCUMENTO REMOVIDO COM SUCESSO!');
      this.doRefresh(event);
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

  async scheduleBasic() {
    let data = this.items[0].value;
    data = this.datePipe.transform(Date.now(), 'dd');
    await LocalNotifications.schedule({
      notifications: [
        {
          title:
            this.items[0].nome + ', Seu documento irá vencer no dia ' + data,
          body: 'Venha conferir',
          id: 1,
          extra: {
            data: 'Pass data to your handler',
          },
          iconColor: '#00ff00',
        },
      ],
    });
  }
  async scheduleAdvanced() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title:
            this.items.length[0].nome +
            ' Seu documento irá vencer no dia ' +
            this.items.length[0].value,
          body: 'Venha conferir',
          id: 2,
          schedule: { at: new Date(Date.now() + 1000 * 3) },
          sound: 'fanfare.wav',
          smallIcon: 'ic_stat_ionic_logo', // Android only, overrides capacitor.config setting!
          attachments: [
            { id: 'face', url: 'res://public/assets/notif_image.jpg' },
          ],
        },
      ],
    });
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
