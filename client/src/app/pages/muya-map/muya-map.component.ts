import { Component,  AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { FormControl } from '@angular/forms';
import {ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-muya-map',
  templateUrl: './muya-map.component.html',
  styleUrls: ['./muya-map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MuyaMapComponent implements AfterViewInit {
  panelOpenState = false;
  reciclajePoint: boolean;
  entidadPoint: boolean;
  ongPoint: boolean;
  reservaPoint: boolean;
  parquePoint: boolean;
  map;
  marker: any;
  nomReciclaje: string[]=['Recicla planet','Graham Recicladora','Reciclar','Reciclar Paga'];
  nomOngs: string[]=['Cedenma','Fundación Ecociencia','WWF','Acción ecológica'];
  nomEntidadesG : string[]=['Ministerio del ambiente','Minestio de agricultura y ganaderia','Unidad de Policía del Medio Ambiente.','Secretaria de Ambiente DMQ'];
  nomParque: string[]=['Parque nacional Cayambe-Coca','Parque nacional Cotopaxi','Parque nacional Machalilla','Parque nacional Yacurí','Parque nacional Yasuní'];
  nomReservas: string[]=['Reserva ecológica Antisana-Napo y Pichincha','Reserva ecológica El Ángel-Carchi','Reserva ecológica Los Illinizas-Cotopaxi','Reserva ecológica Manglares Churute- Guayas','Reserva ecológica Arenillas-El Oro','Reserva ecológica Cotacachi-Cayapas-Esmeraldas e Imbabura','Reserva ecológica Mache-Chindul-Esmeraldas-Manabi'];

  puntosReciclaje : [number,number][]=[ [-0.252691, -78.503747], [-0.117521, -78.475487], [-0.097113 , -78.472471], [-0.109852 , -78.473945]];
  puntosOngs: [number,number][]=[[-0.207997,-78.482172],[-0.200157,-78.480951],[-0.199866, -78.482416 ],[0.195425, -78.503121]];
  puntosEntidadesG:[number,number][]=[[-0.208285, -78.486306],[-0.192671, -78.487924],[-0.267955, -78.470005],[-0.162238, -78.480661]];
  puntosParques:[number,number][]=[[-0.0184211,-77.9909926],[-0.6866692,-78.4546998],[-1.4599677,-81.1256872],[-4.6040346,-79.574206],[-1.1006555,-75.8090969]];
  puntosReservas:[number,number][]=[[-0.4849445,-78.1504264],[0.7465333,-77.9744375],[-0.6633332,-78.7237548],[-2.4242424,-79.6631222],[-3.5414939,-80.2708112],[0.5525127,-78.6136886],[0.4802566,-79.7870309]];

  constructor() {

    this.reciclajePoint=false;
    this.entidadPoint=false;
    this.ongPoint=false;
    this.reservaPoint=false;
    this.parquePoint=false;
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([-0.067116, -78.403128], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);
    L.marker([-0.225069,-78.5168959]).addTo(this.map)
  }

  menuPuntos(tipoPuntos:string){

    if(tipoPuntos=="reciclaje"){
      if(this.reciclajePoint==true){
        this.quitarPuntos(this.puntosReciclaje);
        this.reciclajePoint=!this.reciclajePoint
        console.log(this.reciclajePoint)
      }
      else{
        this.dibujarPuntos(this.puntosReciclaje,this.nomReciclaje)
        this.reciclajePoint=!this.reciclajePoint
        console.log(this.reciclajePoint)
      }
    }
    if(tipoPuntos=='entidades'){
      if(this.entidadPoint==true){
        this.quitarPuntos(this.puntosEntidadesG)
      }
      else{
        this.dibujarPuntos(this.puntosEntidadesG,this.nomEntidadesG)
        this.entidadPoint=!this.entidadPoint
      }
    }
    if(tipoPuntos=='ong'){
      if(this.ongPoint==true){
        this.quitarPuntos(this.puntosOngs)
      }
      else{
        this.dibujarPuntos(this.puntosOngs,this.nomOngs)
        this.ongPoint=!this.ongPoint
      }
    }
    if(tipoPuntos=='reservas'){
      if(this.reservaPoint==true){
        this.quitarPuntos(this.puntosReservas)
      }
      else{
        this.dibujarPuntos(this.puntosReservas,this.nomReservas)
        this.reservaPoint=!this.reservaPoint
      }
    }
    if(tipoPuntos=='parques'){
      if(this.parquePoint==true){
        this.quitarPuntos(this.puntosParques)
      }
      else{
        this.dibujarPuntos(this.puntosParques,this.nomParque)
        this.parquePoint=!this.parquePoint
      }
    }
  }
  dibujarPuntos(puntos:[number,number][],nombres:string[]){

    for(let i=0; i<puntos.length;i++){
      this.marker=L.marker(puntos[i]).addTo(this.map)
      .bindPopup(nombres[i])
      .openPopup();
    }
  }
    quitarPuntos(puntos:[number,number][]){
      for(let i=0; i<puntos.length;i++){
        this.map.removeLayer(puntos[i]);
      }

  }

}
