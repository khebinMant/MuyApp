import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { ServerService } from './../../servicios/server.service';
import { ServiceApiService } from './../../servicios/service-api.service';
import { Producto } from './../../modelos/producto';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { Component, OnInit, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { async } from '@angular/core/testing';
import { DataRx } from './../../modelos/data-rx';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
  selector: 'app-admin-pro',
  templateUrl: './admin-pro.component.html',
  styleUrls: ['./admin-pro.component.scss']
})
export class AdminProComponent implements OnInit {
  displayedColumns: string[];
  productos: Producto[];
  producto: Producto;
  dataSource:any;
  isEditable:boolean
  selection: any;
  url: string;
  nuevo: boolean;
  selectedFile: File[];
  firstFormGroup: FormGroup;
  cerrar: boolean;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  modificar: boolean;
  agregar: boolean;
  rucArchivo: string;
  imagenProduc: string;
  pro:any;
  miniaturaimagen: boolean;
  otroNombre: string;
  nombreReal: string;
  nombreArchivo: string;

  categorias = [
    {id: 1, value: 'Fruta'},
    {id: 2, value: 'Legumbre'},
    {id: 3, value: 'Hierba'}
  ];
  dificultades = [
    {id: 1, value: 'Facil'},
    {id: 2, value: 'Medio'},
    {id: 2, value: 'Dificil'}
  ];
  resistenciaFrios = [
    {id: 1, value: 'Debil'},
    {id: 2, value: 'Medio'},
    {id: 2, value: 'Elevada'}
  ];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private api: ServiceApiService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private server: ServerService,
    private _formBuilder: FormBuilder,
  ) {
      this.url = api.url;
      this.crearProductoForm();
      this.selection = new SelectionModel<Producto>(true, []);
   }


  ngOnInit(): void {
    this.isEditable=true;
    this.nuevo = false;
    this.modificar = false;
    this.agregar = false;
    this.miniaturaimagen = false;
  }
  crearProductoForm() {
    this.firstFormGroup = this._formBuilder.group({
      categoria: ['', Validators.required],
      nombreComun: ['', Validators.required],
      nombreCientifico: ['', Validators.required],
      imagen: ['', [Validators.required]],
      dificultad: ['', Validators.required],
      fechaCosecha: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      tipoSuelo: ['', Validators.required],
      espacioRecomendado: ['' , Validators.required],
      profundidadSemilla: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      frecuenciaRiego: ['', Validators.required],
      cantidadRiego: ['', Validators.required],
      resistenciaFrio: ['', Validators.required],
    });
};
  // Trae los datos, establece columnas de la tabla, asigna datasource, paginator y selection (checkbox)
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  async sendFile(e, endPoint) {
    let nombreReal=''
    let j=0;
    this.selectedFile = e.target.files;
    this.otroNombre = e.target.files[0].name
    this.nombreArchivo =  await this.api.sendFile(endPoint, this.selectedFile);
    console.log(this.nombreArchivo)
    for(let i=this.nombreArchivo.length-1;i>0;i--){
      if(this.nombreArchivo[i]=='\\'){
        break;
      }
      else{
        nombreReal+=this.nombreArchivo[i];
        j++;
      }
    }
    this.nombreReal=nombreReal.split('').reverse().join('')
    console.log(this.nombreReal)
  }

  async guardarProducto(){
    //Primero guardamos la informacion del producto del formulario 1
    let primerForm = await this.firstFormGroup.value
    primerForm.imagen = this.nombreReal
    //Respuesta de agregar el nuevo producto
    let resp = await this.api.sendApi('crear-producto',primerForm);

    //Segundo guardamos la informacion del condicion del formulario 2
    let segundoForm = this.secondFormGroup.value

    let informacionCondicion={
      idProducto: resp[0].id,
      tipoSuelo: segundoForm.tipoSuelo,
      espacioRecomendado: segundoForm.espacioRecomendado,
      profundidadSemilla: segundoForm.profundidadSemilla
    }
    //Respuesta de guardar la condicion del producto
    let resp2 = await this.api.sendApi('crear-condicion',informacionCondicion)
    console.log(resp2)

    //Tercero guardamos la informacion del cuidado del formulario 3
    let tercerForm = this.thirdFormGroup.value
    let informacionCuidado={
      idProducto: resp[0].id,
      frecuenciaRiego: tercerForm.frecuenciaRiego,
      cantidadRiego: tercerForm.cantidadRiego,
      resistenciaFrio: tercerForm.resistenciaFrio
    }
    let resp3 = await this.api.sendApi('crear-cuidado',informacionCuidado)
    console.log(resp3)
    //Respuesta de guardar el cuidado del producto
  }

  // Creación y validación de formulario para ingreso de datos

}
