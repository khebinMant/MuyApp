import { Rol } from './../../modelos/rol';
import { ServiceApiService } from './../../servicios/service-api.service';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { matchOtherValidator } from './match-other-validator';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
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
      let result = await this.api.sendApiRegister('buscar-personas',registro)
      if(result.length==0){
      let per =  await this.api.sendApiRegister('crear-personas',registro);//Creo nueva persona
      this.personaRegistrada = await per[0];
      let rol = await this.api.sendApiRegister('crear-persona-rol',this.personaRegistrada)//A la nueva persona se le agrega su rol de usuario
      let final =  await this.api.sendApiRegister('enviar-correo',this.personaRegistrada)//Se envia un correo de confirmacion a la persona creada
      this.router.navigate(['/confirmation']);//Se redirigue a la pagina de confirmation
      }
      else{
        this.toastr.warning('El correo electronico ingresado ya pertenece a una cuenta registrada', 'Ingrese un nuevo correo electrónico');
      }
    }
  }
  //Cosas que hacer
  /*
    Validar todas las entradas del formulario
    Si el correo electronico ya esta en la base de datos volver a ingresar(decir que esa persona ya esta logeada)
    Asignar el rol a la persona que se ha registrado
  */
}
