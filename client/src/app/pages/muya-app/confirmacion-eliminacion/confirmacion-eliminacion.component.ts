import { Router } from '@angular/router';
import { ServiceApiService } from './../../../servicios/service-api.service';
import { Siembra } from './../../../modelos/siembra';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirmacion-eliminacion',
  templateUrl: './confirmacion-eliminacion.component.html',
  styleUrls: ['./confirmacion-eliminacion.component.scss']
})

export class ConfirmacionEliminacionComponent implements OnInit {

  siembra : Siembra
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 6;
  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ConfirmacionEliminacionComponent>,
    private api: ServiceApiService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: Siembra
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {

  }

  async cerrarEliminar(){
    const siembra ={
      id: this.data.id,
      idProducto: this.data.idProducto,
      idHuerto: this.data.idHuerto
    }
    this.siembra = await this.api.sendApi('eliminar-siembras',siembra)
    this._snackBar.open(`${this.data.Producto.nombreComun} ha sido`, "Eliminado", {
      horizontalPosition: this.horizontalPosition ,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
    this.dialogRef.close();
    this.volver();
  }
  async volver(){
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/menu/app']);
  });
  }
  cerrar(){
    this.dialogRef.close();
  }

}
