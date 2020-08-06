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
  constructor(
    private api: ServiceApiService,
    private personaActual:UsuarioActualService,
    private server : ServerService
  ) {
    this.url = server.getUrl();
  }

  ngOnInit(): void {
    this.traerSiembrasHuertoPersonaLogeada();
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();
    //const riego = new Date(this.riegos[0])
    if(date===this.riegos){
      return 'example-custom-date-class';

    }
    else{
      return '';
    }
    // Highlight the 1st and 20th day of each month.
    //return (date === this.riegos) ? 'example-custom-date-class' : '';
  }

   async traerSiembrasHuertoPersonaLogeada(){
    this.huerto = await this.api.sendApi('traer-huerto');
    this.siembras = await this.api.sendApi('obtener-siembras',this.huerto);
    console.log(this.siembras);
    this.displayedColumns = [
      'unico',
    ];
    this.dataSource = new MatTableDataSource(this.siembras);
  }
  async verquefechasalen(index:number){

    await console.log(`Lo sembre en esta  fecha: ${this.siembras[index-1].fechaSiembra}`)
    await console.log(`Cada ${this.siembras[index-1].Producto.Cuidado.frecuenciaRiego} dias debo regarla`)


    let fechaSiembra = new Date(this.siembras[index-1].fechaSiembra);
    let fechaSiembraUTC = new Date(fechaSiembra.getTime()+fechaSiembra.getTimezoneOffset()*60000).getTime();

    let frecuenciaDeRiegoMilisegundos = await 1000 * 60 * 60 * 24 * (this.siembras[index-1].Producto.Cuidado.frecuenciaRiego)


    let fechaDeRiego = await new Date(fechaSiembraUTC+frecuenciaDeRiegoMilisegundos)

    let fechaDeRiegoUTC = await new Date(fechaDeRiego.getTime()+fechaDeRiego.getTimezoneOffset()*60000)


    await console.log("Por tanto debo regarlo este dia: " + fechaDeRiegoUTC);

    this.riegos =  fechaDeRiegoUTC.getUTCDate()
    console.log(fechaDeRiegoUTC.getUTCDate());

  }

}
