import { DocumentoStorage } from './model/document';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {
  LocalNotifications,
  ELocalNotificationTriggerUnit,
  ILocalNotificationActionType,
  ILocalNotification,
} from '@ionic-native/local-notifications/ngx';

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
  notifyList: any[] = [];
  visible = false;
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
    private localNotifications: LocalNotifications,
    private datePipe: DatePipe,
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  async ngOnInit(): Promise<void> {
    this.notifyList = [
      {
        model: 'DOCUMENTOS',
        id: '1',
        list: [
          { model: 'RG' },
          { model: 'PASSAPORTE' },
          { model: 'CNH' },
          { model: 'CARTEIRA DE ESTUDANTE' },
          { model: 'CONTRATO DE ALUGUEL' },
          { model: 'CONTAS A VENCER' },
          { model: 'IPTU' },
          { model: 'IPVA' },
        ],
      },
      {
        model: 'LEMBRETES',
        id: '2',
        list: [
          { model: 'RG' },
          { model: 'PASSAPORTE' },
          { model: 'CNH' },
          { model: 'CARTEIRA DE ESTUDANTE' },
          { model: 'CONTRATO DE ALUGUEL' },
          { model: 'CONTAS A VENCER' },
          { model: 'IPTU' },
          { model: 'IPVA' },
        ],
      },
      {
        model: 'BEBER AGUA',
        id: '3',
        list: [
          { model: 'RG' },
          { model: 'PASSAPORTE' },
          { model: 'CNH' },
          { model: 'CARTEIRA DE ESTUDANTE' },
          { model: 'CONTRATO DE ALUGUEL' },
          { model: 'CONTAS A VENCER' },
          { model: 'IPTU' },
          { model: 'IPVA' },
        ],
      },
      {
        model: 'CONSULTAS MÉDICAS',
        id: '4',
        list: [
          { model: 'RG' },
          { model: 'PASSAPORTE' },
          { model: 'CNH' },
          { model: 'CARTEIRA DE ESTUDANTE' },
          { model: 'CONTRATO DE ALUGUEL' },
          { model: 'CONTAS A VENCER' },
          { model: 'IPTU' },
          { model: 'IPVA' },
        ],
      },
      {
        model: 'AFAZERES DOMÉSTICOS',
        id: '5',
        list: [
          { model: 'RG' },
          { model: 'PASSAPORTE' },
          { model: 'CNH' },
          { model: 'CARTEIRA DE ESTUDANTE' },
          { model: 'CONTRATO DE ALUGUEL' },
          { model: 'CONTAS A VENCER' },
          { model: 'IPTU' },
          { model: 'IPVA' },
        ],
      },
      {
        model: 'ATIVIDADES DO TRABALHO',
        id: '6',
        list: [
          { model: 'RG' },
          { model: 'PASSAPORTE' },
          { model: 'CNH' },
          { model: 'CARTEIRA DE ESTUDANTE' },
          { model: 'CONTRATO DE ALUGUEL' },
          { model: 'CONTAS A VENCER' },
          { model: 'IPTU' },
          { model: 'IPVA' },
        ],
      },
    ];
    this.dateAdapter.setLocale('pt');
    await this.storage.create();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // Make sure we are allowed to send notifications!
    // await LocalNotifications.checkPermissions();

    // Register your custom action types
    // LocalNotifications.registerActionTypes({
    //   types: [
    //     {
    //       id: 'CHAT_MSG',
    //       actions: [
    //         {
    //           id: 'view',
    //           title: 'Open Chat',
    //         },
    //         {
    //           id: 'remove',
    //           title: 'Dismiss',
    //           destructive: true,
    //         },
    //         {
    //           id: 'respond',
    //           title: 'Respond',
    //           input: true,
    //         },
    //       ],
    //     },
    //   ],
    // });

    // // Received when notification is executed at the scheduled time
    // LocalNotifications.addListener(
    //   'localNotificationReceived',
    //   (notification: LocalNotificationSchema) => {
    //     this.presentAlert(
    //       `Received: ${notification.title}`,
    //       `Custom Data: ${JSON.stringify(notification.extra)}`
    //     );
    //   }
    // );

    // // Received when a special action button is clicked or notification is tapped
    // LocalNotifications.addListener(
    //   'localNotificationActionPerformed',
    //   (notification: ActionPerformed) => {
    //     this.presentAlert(
    //       `Performed: ${notification.actionId}`,
    //       `Input value: ${notification.inputValue}`
    //     );
    //   }
    // );
  }
  populateType(data) {
    console.log(data);

  }
  // CREATE
  addItem(data) {
    console.log(data);
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
            this.scheduleNotification(data);
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

  scheduleNotification(data) {
    this.instantNotify();
    console.log('||||||||||||||||||||||' + new Date(data + 5 * 1000));
    // this.localNotifications.schedule({
    //   id: 1,
    //   title: 'Attention',
    //   text: 'Simons Notification',
    //   data: { mydata: 'My hidden message this is' },
    //   trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
    //   foreground: true, // Show the notification while app is open
    // });
    // Works as well!
    this.localNotifications.schedule({
      id: 2,
      title: 'Seu Documento está prestes a vencer',
      text: 'VOCÊ PEDIU, TE LEMBRAMOS!',
      data: { mydata: 'Confira logo!' },
      trigger: { at: new Date(data + 5 * 1000) },
    });
  }
  instantNotify() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Iremos informar o vencimento do seu documento!',
      text: 'Nós cuidaremos disto para você',
      data: { mydata: 'Nós cuidaremos disto para você!' },
      trigger: { at: new Date(new Date().getTime() + 5 * 1000) },
    });
  }
  // async scheduleAdvanced() {
  //   await LocalNotifications.schedule({
  //     notifications: [
  //       {
  //         title:
  //           this.items.length[0].nome +
  //           ' Seu documento irá vencer no dia ' +
  //           this.items.length[0].value,
  //         body: 'Venha conferir',
  //         id: 2,
  //         schedule: { at: new Date(Date.now() + 1000 * 3) },
  //         sound: 'fanfare.wav',
  //         smallIcon: 'ic_stat_ionic_logo', // Android only, overrides capacitor.config setting!
  //         attachments: [
  //           { id: 'face', url: 'res://public/assets/notif_image.jpg' },
  //         ],
  //       },
  //     ],
  //   });
  // }
  openMsgModal(type, title, text): void {
    Swal.fire({
      heightAuto: false,
      title: title,
      text: text,
      icon: type,
    });
  }
}
