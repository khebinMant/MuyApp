import { HuertoConfirmationComponent } from './../huerto-confirmation/huerto-confirmation.component';
import { ToastrService } from 'ngx-toastr';
import { PersonaLogin } from './../../modelos/persona-login';
import { Router } from '@angular/router';
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
import { ConfirmacionEliminacionComponent } from './confirmacion-eliminacion/confirmacion-eliminacion.component';
import { Persona } from 'src/app/modelos/persona';
import { CalendarOptions, EventInput, FullCalendarModule } from '@fullcalendar/angular'; // useful for typechecking
import { DatePipe } from '@angular/common';
import esLocale from '@fullcalendar/core/locales/es';

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
  seeCalendar:boolean;
  addSiembra: boolean;
  productos: Producto[];
  proFruta: Producto[];
  proLegumbre: Producto[];
  proHierba: Producto[];
  perActual: Persona;
  huerto: Huerto[];
  seeFruta:boolean;
  seeHierba:boolean;
  seeMensaje:boolean;
  seeLegumbre:boolean;
  eventoCalendar;
  cosechasCalendar;
  siembraCalendar;
  prueba;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
    private api: ServiceApiService,
    private router: Router,
    private personaActual:UsuarioActualService,
    private server : ServerService,
    private datePipe: DatePipe,
    private toastr: ToastrService

  ) {
    this.url = server.getUrl();
  }

  ngOnInit(): void {

    this.addSiembra=false
    this.seeSiembras=true;
    this.seeCalendar=false;
    this.traerSiembrasHuertoPersonaLogeada();
    this.perActual= this.personaActual.getPersonaLogeada();
    this.seeFruta = true;
    this.seeLegumbre = true;
    this.seeHierba = true;
  }
  async traerSiembrasHuertoPersonaLogeada(){
    this.huerto = await this.api.sendApi('traer-huerto');
    this.seeFruta=this.huerto[0].fruta
    this.seeHierba=this.huerto[0].hierba
    this.seeLegumbre=this.huerto[0].legumbre
    if(!this.seeFruta && !this.seeHierba && !this.seeLegumbre){
      this.seeMensaje=true
    }
    else{
      this.seeMensaje=false
    }
    this.siembras = await this.api.sendApi('obtener-siembras',this.huerto[0]);
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
    this.eventosRiego();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  cambio(guia:string){
    if(guia=='añadir'){
      this.addSiembra=!this.addSiembra
      this.seeSiembras=!this.seeSiembras
      if(this.seeCalendar==true){
        this.seeCalendar=!this.seeCalendar
      }
    }
    if(guia=='calendario'){
      this.seeCalendar=!this.seeCalendar
      this.seeSiembras=!this.seeSiembras
      if(this.addSiembra==true){
        this.addSiembra=!this.addSiembra
      }
    }
    if(guia=='volver'){
      if(this.seeCalendar==true){
        this.seeCalendar=!this.seeCalendar
      }
      if(this.addSiembra==true){
        this.addSiembra=!this.addSiembra
      }
      this.seeSiembras=!this.seeSiembras
    }
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
    for(let j=0; j<this.productos.length;j++){
      if(this.productos[j].id==i){

        console.log(this.productos[j])
        const dialogRef = this.dialog.open(AgregarSiembraComponent, {
          width: '750px',
          disableClose: false,
          maxHeight: '90vh',
          autoFocus: false,
          data: this.productos[j]
        });

        dialogRef.afterClosed().subscribe(res => {
          // this.leerSolcicitudes();
          });
      }
    }


  }
  openDialogDelete(siembra:Siembra): void {
    console.log(siembra);
    const dialogRef = this.dialog.open(ConfirmacionEliminacionComponent, {
      width: '250px',
      data: siembra
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogConfig(): void {
    const dialogRef = this.dialog.open(HuertoConfirmationComponent, {
      width: '750px',
      disableClose: false,
      maxHeight: '90vh',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(res => {
     // this.leerSolcicitudes();
    });
  }
  volver(){
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/menu']);
  });
  }
  calendarOptions: CalendarOptions = {
    locales: [ esLocale],
    locale: 'es',
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventSources: [
      {
        events: this.eventoCalendar,
      },
      {
        events: this.siembraCalendar
      },

      {
        events: this.cosechasCalendar
      },
    ],
  };

  handleDateClick(arg) {
    this.toastr.success(arg.dateStr,'La fecha seleccionada es');
  }

  async eventosRiego(){
    let arrayEventos=[]
    let arrayCosechas=[]
    let arraySiembras=[]
    for(let i=0; i<this.siembras.length;i++){
      //Fecha de siembra
      let fechaSiembra = new Date(this.siembras[i].fechaSiembra);
      let fechaSiembraUTC = new Date(fechaSiembra.getTime()+fechaSiembra.getTimezoneOffset()*60000);
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
      arraySiembras.push({title:`Siembra de ${this.siembras[i].Producto.nombreComun}`,date:this.datePipe.transform(fechaSiembraUTC,"yyyy-MM-dd"),color:'#00e64d'})
      arrayCosechas.push({title:`Cosecha de ${this.siembras[i].Producto.nombreComun}`,date:this.datePipe.transform(fechaCosechaUTC,"yyyy-MM-dd"),color:'#ff751a'})
      do{
        fechaDeRiego = await new Date(fechaSiembraUTCMili+frecuenciaDeRiegoMilisegundos)
        fechaDeRiegoUTC = await new Date(fechaDeRiego.getTime()+fechaDeRiego.getTimezoneOffset()*60000)
        fechaSiembraUTCMili = fechaDeRiegoUTC.getTime();
        fechaSiembraUTC = fechaDeRiegoUTC
        arrayEventos.push({title:`Regar ${this.siembras[i].Producto.nombreComun}`,date:this.datePipe.transform(fechaSiembraUTC,"yyyy-MM-dd"), color:'#3377ff'})
      }
      while(fechaDeRiegoUTC<fechaCosechaTopeUTC)
    }
    this.eventoCalendar= arrayEventos;
    this.siembraCalendar= arraySiembras;
    this.cosechasCalendar= arrayCosechas;
    console.log(this.siembraCalendar)
    console.log(this.cosechasCalendar)
    //this.calendarOptions.eventAdd = this.eventosRiego;
    this.calendarOptions.eventSources[0]=this.eventoCalendar
    this.calendarOptions.eventSources[1]=this.siembraCalendar
    this.calendarOptions.eventSources[2]=this.cosechasCalendar

  }

}
