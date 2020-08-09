import { AgregarSiembraComponent } from './agregar-siembra/agregar-siembra.component';
import { MatDialog } from '@angular/material/dialog';
import { element } from 'protractor';
import { Producto } from './../../modelos/producto';
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
  displayedColumnsFrutas: string[];
  displayedColumnsLegumbres: string[];
  displayedColumnsHierbas: string[];
  siembras: Siembra[];
  dataSource: any;
  dataSourceFruta: any;
  dataSourceLegumbre: any;
  dataSourceHierbas: any;
  url: string;
  seeSiembras:boolean;
  addSiembra: boolean;
  productos: Producto[];
  proFruta: Producto[];
  proLegumbre: Producto[];
  proHierba: Producto[];
  huerto: Huerto;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private api: ServiceApiService,
    private personaActual:UsuarioActualService,
    private server : ServerService
  ) {
    this.url = server.getUrl();
  }

  ngOnInit(): void {
    this.addSiembra=false
    this.seeSiembras=true;
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
  cambio(){
    this.addSiembra=!this.addSiembra
    this.seeSiembras=!this.seeSiembras
  }
  async traerProductos(){
    this.productos = await this.api.sendApi('traer-productos')
    console.log(this.productos)

    let fruta=[];
    let legumbre=[];
    let hierbas=[];
      for(let i=0; i<this.productos.length;i++){
        if(this.productos[i].categoria=='Fruta'){
          fruta.push(this.productos[i])
        }
        if(this.productos[i].categoria=='Legumbre'){
          legumbre.push(this.productos[i])
        }
        if(this.productos[i].categoria=='Hierbas'){
          hierbas.push(this.productos[i])
        }
      }
    this.proFruta = fruta;
    this.proLegumbre = legumbre;
    this.proHierba = hierbas;

    //Tabla para frutas
    this.displayedColumnsFrutas = [
      'fotos',
      'nombres',
      'dificultad',
      'eventos'
    ];
    this.dataSourceFruta = new MatTableDataSource(this.proFruta);
   //Tabla  para Legumbres
    this.displayedColumnsLegumbres = [
      'fotos',
      'nombres',
      'dificultad',
      'eventos'
    ];
    this.dataSourceLegumbre = new MatTableDataSource(this.proLegumbre);
   //Tabla para Hierbas
    this.displayedColumnsHierbas = [
      'fotos',
      'nombres',
      'dificultad',
      'eventos'
    ];
    this.dataSourceHierbas = new MatTableDataSource(this.proHierba);
  }
  openDialog(i: number): void {
    console.log(i)
    const dialogRef = this.dialog.open(AgregarSiembraComponent, {
      width: '750px',
      disableClose: false,
      maxHeight: '90vh',
      autoFocus: false,
      data: this.productos[i-1]
    });

    dialogRef.afterClosed().subscribe(res => {
     // this.leerSolcicitudes();
    });
  }

}
