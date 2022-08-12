import { DocumentoStorage } from './model/document';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from '@awesome-cordova-plugins/native-page-transitions/ngx';
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  documentoArray: Array<DocumentoStorage> = [];

  constructor(
    private navCtrl: NavController,
    public route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe(async (val) => {
      this.searchDoc();
    });
  }
  ngOnInit(): void {}
  async searchDoc() {
    const store = await this.getStorage('father');
    const data = JSON.parse(store.value);
    this.documentoArray.push(data);
    console.log(this.documentoArray);
  }
  async getStorage(storageKey: string) {
    return await Storage.get({
      key: storageKey,
    });
  }
  async deleteDoc(value) {
    await Storage.remove({ key: value });
    this.searchDoc();
  }
  // ionViewWillLeave() {
  //   const options: NativeTransitionOptions = {
  //     direction: 'up',
  //     duration: 500,
  //     slowdownfactor: 3,
  //     slidePixels: 20,
  //     iosdelay: 100,
  //     androiddelay: 150,
  //     fixedPixelsTop: 0,
  //     fixedPixelsBottom: 60,
  //   };

  //   this.nativePageTransitions.slide(options).then(onSuccess).catch(onError);
  // }
  navigate(local) {
    this.router.navigate([local]);
  }
  // // example of adding a transition when pushing a new page
  // openPage(page: any) {
  //   this.nativePageTransitions.slide(options);
  //   this.navCtrl.push(page);
  // }
}
