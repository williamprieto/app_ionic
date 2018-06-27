import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCrearPage } from './modal-crear';

@NgModule({
  declarations: [
    ModalCrearPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCrearPage),
  ],
})
export class ModalCrearPageModule {}
