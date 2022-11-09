import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {
    this.getAndValidate();
  }

  async getAndValidate() {

  }

  async getStor() {
    return await Preferences.get({
      key: 'FatherStorage',
    });
  }
}
