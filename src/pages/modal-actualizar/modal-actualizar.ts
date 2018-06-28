import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ToastController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { IHabitacion } from '../../interfaces/IHabitacion';
/**
 * Generated class for the ModalActualizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-actualizar',
  templateUrl: 'modal-actualizar.html',
})
export class ModalActualizarPage {

  public bombillo = {

    name: '',
    pine: 0,
    description: '',
    state: false,
    brightness: 0

  };
  index;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
    private toastCtrl: ToastController,private apiProvider:ApiProvider) {

      
      this.index = this.navParams.get('index');
      this.bombillo = this.navParams.get('bombillo');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalActualizarPage');
  }

  
  closemodal(){
    this.viewCtrl.dismiss();
  }

 ActualizarBombillo(){

    console.log("hola");
   
   this.apiProvider.actualizarBombillo(this.index,this.bombillo);
  console.log(this.bombillo);
    this.viewCtrl.dismiss();
    let toast = this.toastCtrl.create({
      message: 'Iluminación Actualizada satisfactoriamente',
      duration: 3000
    });
    toast.present();
  }

}
