import { PersonaLogin } from './../../modelos/persona-login';
import { Router } from '@angular/router';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { ServiceApiService } from './../../servicios/service-api.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-setup',
  templateUrl: './start-setup.component.html',
  styleUrls: ['./start-setup.component.scss']
})
export class StartSetupComponent implements OnInit {

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

  ) {
    this.crearSetupForm();
    this.regionSeleccionada="costa"
    this.hierba=false;
    this.legumbre=false;
    this.fruta=false;
  }
  crearSetupForm(){
    this.setupForm = this.fb.group({
      detalle: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 áéíóúñüÁÉÍÓÚÑÜ]*$')]],
      basicfile: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    this.verificacion()
  }
  async verificarValores(){
    console.log(this.setupForm)
    console.log(this.regionSeleccionada)
    this.personaLog = this.personaLogeadaVerificacion.getPersonaLogeada()
    console.log(this.personaLog)
    const huerto ={
      idPersona: this.personaLog.id,
      region: this.regionSeleccionada,
      fruta: this.fruta,
      legumbre: this.legumbre,
      hierba: this.hierba
    }
    console.log(huerto)
    //Crearle el huerto a la persona
    const resp = await this.api.sendApi('crear-huerto',huerto);
    const pers={
      foto: this.nombreReal
    }
    const respFoto = await this.api.sendApi('poner-foto',pers)
    console.log(respFoto)
    //aqui va la parte de actulizar la foto de perfil (en realidad es ponerla)
    //porque es un usuario nuevo
    if(resp.length!=0){
      this.router.navigate(['/menu']);
    }

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
  verificacion(){
    if(this.personaLogeadaVerificacion.verificar()){
      console.log("si se logeo alguien go menu")
      this.router.navigate(['/setup']);
    }
    else{
      console.log("si nada primero logeate")
      this.router.navigate(['/login']);
    }
  }


}
