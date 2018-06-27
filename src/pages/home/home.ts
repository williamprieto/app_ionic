import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imgcasa = "./assets/imgs/home.png";
  public imgcontrol = "./assets/imgs/control.png";

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private apiProvider: ApiProvider) {

  }

  verHabitaciones(){
    this.navCtrl.push("HabitacionesPage");
  }
  verControl(){
    this.navCtrl.push("ControlVehiculoPage");
  }
  abrirAlert(){
    const prompt = this.alertCtrl.create({
      title: 'DIRECCIÓN IP CASA',
      inputs: [
        {
          name: 'ip',
          placeholder: 'Dirección IP',
          type: "text",
          value: this.apiProvider.ipAddress
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            this.apiProvider.guardarIP(data.ip);
          }
        }
      ]
    });
    prompt.present();
  }


}

