import { ServerService } from './../../servicios/server.service';
import { Huerto } from './../../modelos/huerto';
import { ServiceApiService } from './../../servicios/service-api.service';
import { Siembra } from './../../modelos/siembra';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-side-huerto',
  templateUrl: './side-huerto.component.html',
  styleUrls: ['./side-huerto.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SideHuertoComponent implements OnInit {
  displayedColumns: string[];
  siembras: Siembra[];
  dataSource: any;
  url: string;
  huerto: Huerto;
  riegos: any;
  SiembraDate: any;
  emoji: any;
  CosechaDate: any;
  constructor(
    private api: ServiceApiService,
    private personaActual:UsuarioActualService,
    private server : ServerService
  ) {
    this.url = server.getUrl();
  }

  ngOnInit(): void {
    this.emoji=true;
    this.traerSiembrasHuertoPersonaLogeada();
  }

  dateClass(index:number) {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.riegos
        .map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      return highlightDate ? 'example-custom-date-class' : '';
    };
  }

   async traerSiembrasHuertoPersonaLogeada(){
    this.huerto = await this.api.sendApi('traer-huerto');
    this.siembras = await this.api.sendApi('obtener-siembras',this.huerto);
    //this.SiembraDate  = new Date(this.)
    console.log(this.siembras);
    this.displayedColumns = [
      'unico',
    ];
    this.dataSource = new MatTableDataSource(this.siembras);
  }
  async verquefechasalen(index:number){
    let riego = [];
    console.log(index)
    for(let i=0;i<this.siembras.length;i++){
      if(this.siembras[i].id==index)
      {
        await console.log(`Lo sembre en esta  fecha: ${this.siembras[i].fechaSiembra}`)
        await console.log(`Cada ${this.siembras[i].Producto.Cuidado.frecuenciaRiego} dias debo regarla`)

        //Fecha de siembra
        let fechaSiembra = new Date(this.siembras[i].fechaSiembra);
        let fechaSiembraUTC = new Date(fechaSiembra.getTime()+fechaSiembra.getTimezoneOffset()*60000);
        //this.SiembraDate = fechaSiembraUTC
        let fechaSiembraUTCMili =  fechaSiembraUTC.getTime();
        //Fecha de cosecha
        let fechaCosecha =  new Date(this.siembras[i].fechaCosecha);
        let fechaCosechaUTC = new Date(fechaCosecha.getTime()+fechaCosecha.getTimezoneOffset()*60000);
        let fechaCosechaUTCMili = fechaCosechaUTC.getTime();

        //Fecha de Riego
        let fechaDeRiego;
        let frecuenciaDeRiegoMilisegundos = await 1000 * 60 * 60 * 24 * (this.siembras[i].Producto.Cuidado.frecuenciaRiego);
        let fechaDeRiegoUTC;
        //Establecer un tope al while
        let fechaCosechaTope =  new Date(fechaCosechaUTCMili-frecuenciaDeRiegoMilisegundos)
        let fechaCosechaTopeUTC = new Date(fechaCosechaTope.getTime()+fechaCosechaTope.getTimezoneOffset()*60000)

        do{
          fechaDeRiego = await new Date(fechaSiembraUTCMili+frecuenciaDeRiegoMilisegundos)
          fechaDeRiegoUTC = await new Date(fechaDeRiego.getTime()+fechaDeRiego.getTimezoneOffset()*60000)
          fechaSiembraUTCMili = fechaDeRiegoUTC.getTime();
          fechaSiembraUTC = fechaDeRiegoUTC
          riego.push(fechaSiembraUTC)
        }
        while(fechaDeRiegoUTC<fechaCosechaTopeUTC)
      }
    }
    this.riegos = riego;
  }
  setEmoji(){
    this.emoji=!this.emoji;
  }
}
