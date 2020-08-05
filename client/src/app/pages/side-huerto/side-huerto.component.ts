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

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
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
  verquefechasalen(){
    console.log("funciona")
  }

}
