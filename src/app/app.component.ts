import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {

    this.getAndValidate();
  }
ngOnInit(): void {

}
  async getAndValidate() {
    // const store = await this.getStor();
    // const data = JSON.parse(store.value);
    // if (data[0].nomeDocumento === '') {
    //   await Storage.set({
    //     key: 'FatherStorage',
    //     value: JSON.stringify(this.docs),
    //   });
    // } else {
    //   return;
    // }
  }
    async present() {
    Swal.fire({
        heightAuto: false,
        title: 'Você tem certeza?',
        text: 'Você deseja mesmo sair da aplicação?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00c1af',
        cancelButtonText: 'Não',
        cancelButtonColor: '#f1b080',
        confirmButtonText: 'Sim, Tenho certeza!',
    }).then((result) => {
        if (result.isConfirmed) {
            App.exitApp();
        }
    });
    }
  async getStor() {
    return await Storage.get({
      key: 'FatherStorage',
    });
  }
}
