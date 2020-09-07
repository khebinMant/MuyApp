import { ToastrService } from 'ngx-toastr';
import { Huerto } from './../../modelos/huerto';
import { ServiceApiService } from './../../servicios/service-api.service';
import { Router } from '@angular/router';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { PersonaLogin } from './../../modelos/persona-login';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-huerto-confirmation',
  templateUrl: './huerto-confirmation.component.html',
  styleUrls: ['./huerto-confirmation.component.scss']
})
export class HuertoConfirmationComponent implements OnInit {


  setupForm: FormGroup;
  regionSeleccionada:string;
  nombreReal: string;
  productosSeleccionados:string;
  firstFormGroup: FormGroup
  selectedFile: File[];
  nombreArchivo: string;
  floatLabelControl = new FormControl('auto');
  fruta:boolean;
  hierba:boolean;
  huerto: Huerto[];
  nombre;
  cerrar : boolean;
  legumbre:boolean;
  otro = new FormControl('auto');
  secondFormGroup: FormGroup
  personaLog: PersonaLogin;
  otroNombre: string;
  constructor(
    private fb: FormBuilder,
    private personaLogeadaVerificacion:UsuarioActualService,
    private router: Router,
    private api: ServiceApiService,
    private toastr: ToastrService

  ) {
   }
  ngOnInit(): void {
    this.verificacion()
  }
  async verificarValores(){
    const huerto ={
      fruta: this.fruta,
      legumbre: this.legumbre,
      hierba: this.hierba
    }
    console.log(huerto)
    //Crearle el huerto a la persona
    const resp = await this.api.sendApi('actualizar-huerto',huerto);
    this.toastr.success('La información de tu huerto ha sido actualizada', 'Informacion actulizada');
    await this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/menu']);
  });
  }


  poner(tipo:string){
    if(tipo=='legumbre'){
      this.legumbre=!this.legumbre
      console.log(this.legumbre)
    }
    if(tipo=='fruta'){
      this.fruta=!this.fruta
      console.log(this.fruta)
    }
    if(tipo=='hierba'){
      this.hierba=!this.hierba
      console.log(this.hierba)
    }
  }
  async verificacion(){
      this.huerto = await this.api.sendApi('traer-huerto');
      this.nombre= this.huerto[0].detalle
      this.fruta= false
      this.legumbre= false
      this.hierba = false
  }
  verquepasa(){
    console.log(this.legumbre)
    console.log(this.fruta)
    console.log(this.hierba)
  }
}
