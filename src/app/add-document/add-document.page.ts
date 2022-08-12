import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { DocumentoStorage } from '../home/model/document';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.page.html',
  styleUrls: ['./add-document.page.scss'],
})
export class AddDocumentPage implements OnInit {
  documento;
  validade;
  documeto: DocumentoStorage[];
  arrayValue: Array<DocumentoStorage> = [];
  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {}
  async navigate(local, documento, validade) {
    this.setStorage(documento, validade);
    this.router.navigate([local]);
  }

  async setStorage(documento, validade) {
    const entity: DocumentoStorage = new DocumentoStorage();
    entity.nomeDocumento = documento;
    entity.validade = validade;
    await Storage.set({
      key: documento,
      value: JSON.stringify(entity),
    });
    this.setFatherStorage(documento);
  }

  async setFatherStorage(documento) {
    const res = Storage.get({ key: documento });
    const resFather = Storage.get({ key: 'father' });
    const data = JSON.parse((await res).value);
    const data1 = JSON.parse((await resFather).value);

    if (!data1) {
      this.arrayValue.push(data);
      console.log(this.arrayValue);
      await Storage.set({
        key: 'father',
        value: JSON.stringify(this.arrayValue),
      });
    } else {
      this.arrayValue.push(data);
      this.arrayValue.push(data1[0]);
      debugger;
      console.log(this.arrayValue);
      await Storage.set({
        key: 'father',
        value: JSON.stringify(this.arrayValue),
      });
    }
  }
}
