import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController, ViewController} from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { IHabitacion } from '../../interfaces/IHabitacion';
/**
 * Generated class for the ModalCrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-crear',
  templateUrl: 'modal-crear.html',
})
export class ModalCrearPage {

  public bombillo = {

    name: '',
    pine: 0,
    description: '',
    state: false,
    brightness: 0

  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCrearPage');
  }

  closemodal(){
    this.viewCtrl.dismiss();
  }

  CrearBombillo(){

    console.log(this.bombillo);
    this.bombillo.state = false;//estado encendido o apagado
    this.bombillo.brightness = 0;//brillo del bombillo

    this.apiProvider.guardar(this.bombillo);

    this.viewCtrl.dismiss();
    let toast = this.toastCtrl.create({
      message: 'Iluminación creada satisfactoriamente',
      duration: 3000
    });
    toast.present();
  }

}
