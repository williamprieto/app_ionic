import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHabitacion } from './../../interfaces/IHabitacion';

@Injectable()
export class ApiProvider {

  public bdBombillos;
  public ipAddress;

  constructor(public http: HttpClient) {



    
    this.bdBombillos = JSON.parse(localStorage.getItem('bdBombillos'));
    if (!this.bdBombillos) {
      this.bdBombillos = [];
    }

    this.ipAddress = localStorage.getItem('ipAddress');
    if (this.ipAddress == '') {
      this.ipAddress = 'Sin asignar';
    }

  }

  
  
  guardarIP(ipAddress){
    this.ipAddress = ipAddress;
    localStorage.setItem('ipAddress', ipAddress);
  }

  guardar(habitacion: IHabitacion) {
    this.bdBombillos.push(habitacion);
    var bdBombillosString = JSON.stringify(this.bdBombillos);
    localStorage.setItem('bdBombillos', bdBombillosString);
  }

  cambiarEstado(indice: number, habitacion: IHabitacion) {
    this.bdBombillos[indice] = habitacion;
    var bdBombillosString = JSON.stringify(this.bdBombillos);
    localStorage.setItem('bdBombillos', bdBombillosString);

    let status = habitacion.state ? '100' : '0';
    let pine = habitacion.pine;

    let headers: HttpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json;charset=UTF-8');

    return new Promise(resolve => {
      this.http.get(`http://${this.ipAddress}:3000/brillo/${pine}/${status}`, {
        headers: headers
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  establecerBrillo(indice: number, habitacion: IHabitacion) {
    this.bdBombillos[indice] = habitacion;
    var bdBombillosString = JSON.stringify(this.bdBombillos);
    localStorage.setItem('bdBombillos', bdBombillosString);

    let status = habitacion.brightness;
    let pine = habitacion.pine;

    let headers: HttpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json;charset=UTF-8');

    return new Promise(resolve => {
      this.http.get(`http://${this.ipAddress}:3000/brillo/${pine}/${status}`, {
        headers: headers
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  eliminarBombillo(indice: number, habitacion: IHabitacion) {
    this.bdBombillos.splice(indice, 1)
    var bdBombillosString = JSON.stringify(this.bdBombillos);
    localStorage.setItem('bdBombillos', bdBombillosString);
  }

}
