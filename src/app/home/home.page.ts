import { App } from '@capacitor/app';
import { NotifyName } from './../shared/services/storage.service';
import { DocumentoStorage } from './model/document';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {
  LocalNotifications,
  ELocalNotificationTriggerUnit,
  ILocalNotificationActionType,
  ILocalNotification,
} from '@ionic-native/local-notifications/ngx';

// eslint-disable-next-line max-len
import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
  BannerAdPluginEvents,
  AdMobBannerSize,
  AdOptions,
  AdLoadInfo,
  InterstitialAdPluginEvents,
} from '@capacitor-community/admob';

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
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';
/*import {
  ActionPerformed,
  LocalNotificationSchema,
} from '@capacitor/local-notifications';*/
import { DatePipe } from '@angular/common';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: Item[] = [];
  documentsList: any[] = [];
  notifyList: NotifyName[] = [];
  visible = false;
  nameRemember;
  animal: string;
  name: string;

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  newItem: Item = <Item>{};
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  newNotify: NotifyName = <NotifyName>{};
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
    private toastController: ToastController,

    private platform: Platform
  ) {
    App.addListener('backButton', ({ canGoBack }) => {
      console.log(canGoBack);
      if (canGoBack) {
        this.present();
      } else {
        this.present();
      }
    });
    this.plt.ready().then(() => {
      this.loadItems();
    });
    AdMob.initialize({
      requestTrackingAuthorization: true,

      initializeForTesting: false,
    });
  }
  async ngOnInit(): Promise<void> {
    this.dateAdapter.setLocale('pt');
    await this.storage.create();

    this.banner();
  }
  populateType(data) {
    console.log(data);
    if (data !== undefined) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
  // CREATE
  async addItem(data, afazer, tipoAtividade, semanalmente, hora) {
    const hor1 = this.datePipe.transform(hora, 'HH');

    const hor2 = this.datePipe.transform(hora, 'mm');

    const hor3 = this.datePipe.transform(hora, 'ss');

    const n1: number = +hor1;
    const n2: number = +hor2;
    const n3: number = +hor3;

    const date = new Date(data);
    date.setHours(n1, n2, n3); // Set hours, minutes and seconds
    console.log(date);
    console.log(afazer);
    console.log(tipoAtividade);
    console.log(hora);

    console.log(data);
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    if (this.items === null) {
      this.storageService.addItem(this.newItem).then((item) => {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.newItem = <Item>{};
        this.showToast('NOTIFICA????O ADICIONADA COM SUCESSO!');
        this.loadItems(); // Or add it to the array directly
      });
    } else {
      if ((this.items.length % 5) === 0) {
        AdMob.addListener(
          InterstitialAdPluginEvents.Loaded,
          (info: AdLoadInfo) => {
            // Subscribe prepared interstitial
          }
        );

        const options: AdOptions = {
          adId: 'ca-app-pub-6905686321259168/5330423192'//,
          //isTesting: false,
          // npa: true
        };
        await AdMob.prepareInterstitial(options);
        await AdMob.showInterstitial();
      }
      if (
        data === undefined ||
        afazer === undefined ||
        tipoAtividade === undefined ||
        hora === undefined
      ) {
        this.openMsgModal('error', 'Insira corretamente os dados', '...');
      } else {
        this.visible = false;
        this.storageService.addItem(this.newItem).then((item) => {
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          this.newItem = <Item>{};
          this.showToast('NOTIFICA????O ADICIONADA COM SUCESSO!');

          this.scheduleNotification(
            date,
            afazer,
            tipoAtividade,
            semanalmente,
            hora
          );

          this.loadItems(); // Or add it to the array directly
        });
      }
      this.banner();
    }
  }
  async present() {
    Swal.fire({
      heightAuto: false,
      title: 'Voc?? tem certeza?',
      text: 'Voc?? deseja mesmo sair da aplica????o?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00c1af',
      cancelButtonText: 'N??o',
      cancelButtonColor: '#f1b080',
      confirmButtonText: 'Sim, Tenho certeza!',
    }).then((result) => {
      if (result.isConfirmed) {
        App.exitApp();
      }
    });
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
    this.storageService.getNotify().then((data) => {
      console.log(data);
      this.notifyList = data;
    });
  }
  alert(): void {
    this.openMsgModal('error', 'Infelizmente voc?? n??o tem permiss??es', '...');
  }
  openInformationDialog() {
    const dialogRef = this.dialog.open(InformationDialog, {
      width: '500px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === null || result === undefined || result === ' ') {
        return;
      } else {
        this.newNotify.nameNotify = result;
        this.storageService
          .addNotify('nameNotify', this.newNotify)
          .then((item) => {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            this.newItem = <Item>{};
            this.showToast('TIPO DE LEMBRETE ADICIONADO COM SUCESSO!');
            this.loadItems(); // Or add it to the array directly
          });
      }
    });
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
      this.showToast('LEMBRETE REMOVIDO COM SUCESSO!');
      this.doRefresh(event);
      this.loadItems(); // Or splice it from the array directly
    });
  }

  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 2000,
    });
    toast.present();
  }

  async scheduleBasic() {
    let data = this.items[0].value;
    data = this.datePipe.transform(Date.now(), 'dd');
    /*await LocalNotifications.schedule({
      notifications: [
        {
          title:
            this.items[0].nome + ', Seu documento ir?? vencer no dia ' + data,
          body: 'Venha conferir',
          id: 1,
          extra: {
            data: 'Pass data to your handler',
          },
          iconColor: '#00ff00',
        },
      ],
    });*/
  }

  scheduleNotification(data, afazer, tipoAtividade, semanalmente, hora) {
    if (semanalmente) {
      this.onlyWeeklyHourNotify(data, afazer, tipoAtividade);
    } else {
      this.instantNotify(data, afazer, tipoAtividade);
      // this.diaryHourNotify(data, afazer, tipoAtividade);
      this.sevenHourNotify(data, afazer, tipoAtividade);
      // this.midDayNotify(data, afazer, tipoAtividade);
      this.atHourNotify(data, afazer, tipoAtividade, hora);
    }
  }
  onlyWeeklyHourNotify(data, afazer, tipoAtividade) {}

  // diaryHourNotify(data, afazer, tipoAtividade) {}

  sevenHourNotify(data, afazer, tipoAtividade) {
    const date = new Date(data);
    date.setHours(7, 0, 0);
    console.log(new Date(date));
    this.localNotifications.schedule({
      id: 2,
      title: 'AVISO! SOBRE: ' + tipoAtividade,
      text: 'FALTA POUCO TEMPO PARA: ' + afazer,
      data: { mydata: 'Confira logo!' },
      trigger: { at: new Date(date) },
    });
  }
  // midDayNotify(data, afazer, tipoAtividade) {
  //   const date = new Date(data);
  //   date.setHours(12, 0, 0); // Set hours, minutes and seconds

  //   console.log(new Date(date));
  //   this.localNotifications.schedule({
  //     id: 2,
  //     title: 'VOC?? PEDIU, TE LEMBRAMOS!',
  //     text: 'CHEGOU O MOMENTO PARA: ' + afazer,
  //     data: { mydata: 'Confira logo!' },
  //     trigger: { at: new Date(date) },
  //   });
  // }
  atHourNotify(data, afazer, tipoAtividade, hora) {
    this.localNotifications.schedule({
      id: 2,
      title: 'VOC?? PEDIU, TE LEMBRAMOS!',
      text: 'CHEGOU O MOMENTO PARA: ' + afazer,
      data: { mydata: 'Confira logo!' },
      trigger: { at: data },
    });
  }
  instantNotify(data, afazer, tipoAtividade) {
    this.localNotifications.schedule({
      id: 1,
      title: 'IREMOS TE INFORMAR SOBRE: ' + tipoAtividade + ' N??O SE PREOCUPE!',
      text: 'N??S CUIDAREMOS DE TE LEMBRAR ISTO!',
      trigger: { at: new Date(new Date().getTime() + 5 * 1000) },
    });
  }
  openMsgModal(type, title, text): void {
    Swal.fire({
      heightAuto: false,
      title: title,
      text: text,
      icon: type,
    });
  }

  banner() {
    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      // Subscribe Banner Event Listener
    });

    AdMob.addListener(
      BannerAdPluginEvents.SizeChanged,
      (size: AdMobBannerSize) => {
        // Subscribe Change Banner Size
      }
    );

    const options: BannerAdOptions = {
      adId: 'ca-app-pub-6905686321259168/3602267962',
      //adId: 'ca-app-pub-3940256099942544/6300978111',
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false,
      // npa: true
    };
    AdMob.showBanner(options);
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './modal/dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
@Component({
  selector: 'information-dialog',
  templateUrl: './modal/information-dialog.html',
})
export class InformationDialog {
  constructor(
    public dialogRef: MatDialogRef<InformationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
