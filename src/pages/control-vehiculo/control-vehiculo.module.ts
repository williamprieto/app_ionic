import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ControlVehiculoPage } from './control-vehiculo';

@NgModule({
  declarations: [
    ControlVehiculoPage,
  ],
  imports: [
    IonicPageModule.forChild(ControlVehiculoPage),
  ],
})
export class ControlVehiculoPageModule {}
