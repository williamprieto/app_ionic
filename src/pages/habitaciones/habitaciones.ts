import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController,  NavParams } from 'ionic-angular';
import { ToastController, ModalController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the HabitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-habitaciones',
  templateUrl: 'habitaciones.html',
})
export class HabitacionesPage {

  public bombillos = [];
  public opciones = "iluminacion";
  public imgcontador = "./assets/imgs/contador.png";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HabitacionesPage');
    this.bombillos = this.apiProvider.bdBombillos;
  }

  CrearB() {

    let abrirModal = this.modalCtrl.create('ModalCrearPage');
    abrirModal.onDidDismiss(() => {
      this.bombillos = this.apiProvider.bdBombillos;
    });
    abrirModal.present();

  }


  cambiarEstado(i, bombillo){
    this.apiProvider.cambiarEstado(i, bombillo).then((data : any) => {
      console.log(data.mensaje);
    });
    this.bombillos = this.apiProvider.bdBombillos;
  }

  establecerBrillo(i, bombillo){
    console.log("cambiando el brillo");
    this.apiProvider.establecerBrillo(i, bombillo).then((data : any) => {
      console.log(data.mensaje);
    });
    this.bombillos = this.apiProvider.bdBombillos;
  }

  EliminarB(i, bombillo) :void{
    console.log("Eliminando bombillo");
    this.apiProvider.eliminarBombillo(i, bombillo);
    this.bombillos = this.apiProvider.bdBombillos;

    
  }


}
