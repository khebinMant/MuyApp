import { Rol } from './../../modelos/rol';
import { ServiceApiService } from './../../servicios/service-api.service';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { matchOtherValidator } from './match-other-validator';

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
      nombre:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 áéíóúñüÁÉÍÓÚÑÜ]*$')]],
      apellido:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9 áéíóúñüÁÉÍÓÚÑÜ]*$')]],
      correoElectronico: ['', [Validators.required,  Validators.email]],
      psw: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ñÑ]*$')]],
      pswcon: ['', [Validators.required,matchOtherValidator('psw')]]
    }
    );
  }

  async verificarMail(){
    return true;
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
      let final =  await this.api.sendApiRegister('enviar-correo',this.personaRegistrada)
      console.log(final);
      //Aqui debo hacer la llamada a la base de datos para enviar el email
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
