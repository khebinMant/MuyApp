import { Router } from '@angular/router';
import { Siembra } from './../../../modelos/siembra';
import { Huerto } from './../../../modelos/huerto';
import { Producto } from './../../../modelos/producto';
import { ServerService } from './../../../servicios/server.service';
import { ServiceApiService } from './../../../servicios/service-api.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-siembra',
  templateUrl: './agregar-siembra.component.html',
  styleUrls: ['./agregar-siembra.component.scss']
})
export class AgregarSiembraComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 6;
  firstFormGroup: FormGroup;
  cerrar : boolean;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  producto: Producto;
  siembra: any;
  suelo: string;
  espacio: any;
  huerto: Huerto;
  mostrar: boolean;
  isEditable = true;
  url: string;
  proFundidadAgujero:number;
  fechaExtra1: any;
  fechaExtra2: any;
  constructor(
    public dialogRef: MatDialogRef<AgregarSiembraComponent>,
    private api: ServiceApiService,
    private dialog: MatDialog,
    private router: Router,
    private server: ServerService,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Producto){
      this.url = server.getUrl();
    }

  ngOnInit(): void {
    this.mostrar=true
    let sue;
    let espa;
    console.log(this.data)
    this.firstFormGroup = this._formBuilder.group({
      slide1Ctrl: ['',Validators.required],
      slide2Ctrl: ['',Validators.required],
      slide3Ctrl: ['',Validators.required],
      slide4Ctrl: ['',Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      slide1Ctrl: ['',Validators.required],
      slide2Ctrl: ['',Validators.required],
      slide3Ctrl: ['',Validators.required],
      slide4Ctrl: ['',Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      slide1Ctrl: ['',Validators.required],
      slide2Ctrl: ['',Validators.required],
      slide3Ctrl: ['',Validators.required],
    });
    this.suelo='';
    this.espacio=0;
    sue=this.data.Condicione.tipoSuelo
    espa=this.data.Condicione.espacioRecomendado
    this.suelo=sue
    this.espacio=espa
    console.log(this.suelo)
    console.log(this.espacio)
    this.calcularEspacio(this.data.Condicione.profundidadSemilla);
  }
  calcularEspacio(semillaPro:number){
    this.proFundidadAgujero = semillaPro+7
  }
  async sembrarSemilla(){
    this.mostrar=false;
    let fechaCosecha = await this.calcularFechaCosecha();
    this.fechaExtra1=fechaCosecha
    this.fechaExtra2= new Date(Date.now());
    this.huerto = await this.api.sendApi('traer-huerto');
    this.siembra={
      idProducto: this.data.id,
      idHuerto: this.huerto.id,
      fechaCosecha: fechaCosecha
    }
    console.log(fechaCosecha)
  }
  calcularFechaCosecha(){

    let hoy = new Date(Date.now());
    let fechaCosechaSiembra;

    if(this.data.fechaCosecha<=10){
      let fechaCosechaProductoMili = 1000 * 60 * 60 * 24 * (this.data.fechaCosecha*365);
       fechaCosechaSiembra =  new Date(hoy.getTime() + fechaCosechaProductoMili);
    }
    else{
      let fechaCosechaProductoMili = 1000 * 60 * 60 * 24 * this.data.fechaCosecha;
       fechaCosechaSiembra =  new Date(hoy.getTime() + fechaCosechaProductoMili);
    }
    return fechaCosechaSiembra;
  }

  cambio(){
    this.mostrar=!this.mostrar
    this.dialogRef.disableClose = true;
  }
  async volver(){
    this.siembra = await this.api.sendApi('sembrar-producto',this.siembra);
    await this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/menu/app']);
  });
  }
  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      horizontalPosition: this.horizontalPosition ,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: green;
    }
  `],
})
export class PizzaPartyComponent {}
