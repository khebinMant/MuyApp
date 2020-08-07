import { Huerto } from './../../modelos/huerto';
import { Siembra } from './../../modelos/siembra';
import { ServerService } from './../../servicios/server.service';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { ServiceApiService } from './../../servicios/service-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-muya-app',
  templateUrl: './muya-app.component.html',
  styleUrls: ['./muya-app.component.scss']
})
export class MuyaAppComponent implements OnInit {

  displayedColumns: string[];
  siembras: Siembra[];
  dataSource: any;
  url: string;
  huerto: Huerto;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
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
  async traerSiembrasHuertoPersonaLogeada(){
    this.huerto = await this.api.sendApi('traer-huerto');
    this.siembras = await this.api.sendApi('obtener-siembras',this.huerto);
    console.log(this.siembras);
    this.displayedColumns = [
      'foto',
      'nombre',
      'nombreCientifico',
      'dificultad',
      'fechaSiembra',
      'fechaCosecha',
      'tipoSuelo',
      'tipo',
      'evento'
    ];
    this.dataSource = new MatTableDataSource(this.siembras);
    this.dataSource.paginator = this.paginator;
  }
  eliminarProducto(){

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
