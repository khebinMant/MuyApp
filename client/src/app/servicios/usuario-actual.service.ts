import { Router } from '@angular/router';
import { ServiceApiService } from './service-api.service';
import { PersonaLogin } from './../modelos/persona-login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioActualService {
  private personaLogeada: PersonaLogin;
  private api: ServiceApiService;
  private flag:boolean
  constructor(
    private router: Router,

  ) {
    this.flag= false;
  }

  async guardarInformacion(data){
    this.personaLogeada=data
    this.flag=true
    console.log("Estos son los datos de la persona logeada")
    console.log(this.personaLogeada)

  }
  verificar(){
    if(this.flag==true){
      return true
    }
    else{
      return false
    }
  }
  getPersonaLogeada():PersonaLogin{
    return this.personaLogeada;
  }

}
