import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // docs = [
  //   {
  //     id: '1',
  //     nomeDocumento: '',
  //     validade: '',
  //   },
  //   {
  //     id: '2',
  //     nomeDocumento: '',
  //     validade: '',
  //   },
  //   {
  //     id: '3',
  //     nomeDocumento: '',
  //     validade: '',
  //   },
  //   {
  //     id: '4',
  //     nomeDocumento: '',
  //     validade: '',
  //   },
  //   {
  //     id: '5',
  //     nomeDocumento: '',
  //     validade: '',
  //   },
  // ];
  constructor() {
    this.getAndValidate();
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

  async getStor() {
    return await Storage.get({
      key: 'FatherStorage',
    });
  }
}