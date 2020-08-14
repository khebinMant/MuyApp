import { Huerto } from './../../modelos/huerto';
import { ServiceApiService } from './../../servicios/service-api.service';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { Router } from '@angular/router';
import { LogService } from './../../servicios/log.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    LogService
]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  huerto: Huerto[];
  constructor(
    private fb: FormBuilder,
    private logService: LogService,
    private personaActual:UsuarioActualService,
    private router: Router,
    private api: ServiceApiService,
    private toastr: ToastrService
  ) {
    this.crearLoginForm();
   }

  ngOnInit(): void {

  }
  crearLoginForm() {
    this.loginForm = this.fb.group({
      correoElectronico: ['', [Validators.required,  Validators.email]],
      psw: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9 ñÑ]*$')]]
    });
  }
  logIn(){
    if (!this.loginForm.invalid) {
      let data =null;
      const login = this.loginForm.value;
      //console.log(login)
      //this.loginForm.reset();
      this.logService.logIn(login)
      .subscribe(res => {
        if (res.transaccion || res.data.length.toString() === res.msg.toString()) {
            data = res.data;
            this.personaActual.guardarInformacion(data)
            this.verificacionHuerto()
        } else {
          this.toastr.warning('Ingrese datos validos', 'Acceso denegado');
        }
      }, err => {
        this.toastr.warning(err.error.msg, 'Acceso denegado');
      });
    } else {
      this.toastr.warning('Ingrese datos validos', 'Acceso denegado');
    }
  }

  async verificacionHuerto(){
    this.huerto = await this.api.sendApi('traer-huerto');
    if(this.huerto.length==0){
      this.router.navigate(['/setup']);
    }
    else
    {
      this.router.navigate(['/menu']);
    }
  }

}
