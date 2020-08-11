import { Rol } from './../../modelos/rol';
import { ServiceApiService } from './../../servicios/service-api.service';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  personaRegistrada: Persona;
  rolPersona: Rol;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private personaActual:UsuarioActualService,
    private api: ServiceApiService,

  ) {
    this.api
    this.crearLRegisterForm();
   }

  ngOnInit(): void {
  }
  irComponente(){
    this.router.navigate(["confirmation"]);
  }
  crearLRegisterForm() {
    this.registerForm = this.fb.group({
      correoElectronico: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      psw: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      nombre:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      apellido:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]]
    });
  }
  async crearUsuario(){
    if (!this.registerForm.invalid) {
      const registro = this.registerForm.value;
      //Ante de esto debo enviar solo el email a consultar si ya existe
      //si ya existe vuelve a pedir que se llene el email
      let per =  await this.api.sendApiRegister('crear-personas',registro);
      this.personaRegistrada = await per[0];
      let rol = await this.api.sendApiRegister('crear-persona-rol',this.personaRegistrada)
      //this.registerForm.reset();
      console.log(this.personaRegistrada)
      console.log(rol)
      this.router.navigate(['/confirmation']);
    }
  }
  //Cosas que hacer
  /*
    Validar todas las entradas del formulario
    Si el correo electronico ya esta en la base de datos volver a ingresar(decir que esa persona ya esta logeada)
    Asignar el rol a la persona que se ha registrado
  */
}
