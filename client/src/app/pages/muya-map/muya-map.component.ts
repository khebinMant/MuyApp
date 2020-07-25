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

  map;

  constructor() { }
  toppings = new FormControl();

  toppingList: string[] = ['Organizaciones', 'Puntos de Reciclaje', 'Entidades', 'Parques', 'Espacios verdes', 'AgroParques'];

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([-0.067116, -78.403128], 13);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    L.marker([-0.225069,-78.5168959]).addTo(this.map)
    tiles.addTo(this.map);
  }
}
