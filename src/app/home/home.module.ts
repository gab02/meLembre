import { LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { CustomModalPageModule } from './../shared/custom-modal/custom-modal.module';
import { MatInputModule } from '@angular/material/input';
import { StorageService } from './../shared/services/storage.service';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage, DialogContentExampleDialog, InformationDialog } from './home.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTimepickerModule } from 'mat-timepicker';

import { HomePageRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { Storage } from '@ionic/storage';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTimepickerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatExpansionModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, DialogContentExampleDialog,InformationDialog],
  providers: [StorageService, Storage, DatePipe, LocalNotifications],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
