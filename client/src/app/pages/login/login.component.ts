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

  constructor(
    private fb: FormBuilder,
    private logService: LogService,
    private personaActual:UsuarioActualService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.crearLoginForm();
   }

  ngOnInit(): void {

  }
  crearLoginForm() {
    this.loginForm = this.fb.group({
      correoElectronico: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      psw: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]]
    });
  }
  logIn(){
    if (!this.loginForm.invalid) {
      let data =null;
      const login = this.loginForm.value;
      //console.log(login)
      this.loginForm.reset();
      this.logService.logIn(login)
      .subscribe(res => {
        if (res.transaccion || res.data.length.toString() === res.msg.toString()) {
            this.router.navigate(['/menu']);
            data = res.data;
            this.personaActual.guardarInformacion(data)
        } else {
          this.toastr.warning('Ingrese datos validos', 'Acceso denegado');
        }
      }, err => {
        this.toastr.error(err.error.msg, 'Acceso denegado');
      });
    } else {
      this.toastr.warning('Ingrese datos validos', 'Acceso denegado');
    }
  }

}
