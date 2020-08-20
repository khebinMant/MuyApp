import { ServerService } from './../../servicios/server.service';
import { PersonaLogin } from './../../modelos/persona-login';
import { UsuarioActualService } from './../../servicios/usuario-actual.service';
import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
  //encapsulation: ViewEncapsulation.None,
})
export class MenuPrincipalComponent implements OnInit {

  @ViewChild('snav') sidenav: MatSidenav;

  content: boolean;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  personaLog: PersonaLogin;
  url: string;
  verSiembra: boolean;

  private _mobileQueryListener: () => void;
  constructor(
      private personaLogeadaVerificacion:UsuarioActualService,
      private router: Router,
      private server: ServerService,
      changeDetectorRef: ChangeDetectorRef,
      media: MediaMatcher,
    )
    {
      this.url = this.server.getUrl();
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  ngOnInit(): void {
    this.verificacion();
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.content=true;
    this.informacionPersona();
    this.verSiembra = false;
  }
  cambio(){
    this.content=!this.content;
  }
  irComponente(ruta: string){
    console.log(this.router.url)
    if(this.router.url==="/menu"){

    }
    else{
      this.router.navigate([`${ruta}`]);
      this.cambio();
    }

  }

  informacionPersona(){
    this.personaLog = this.personaLogeadaVerificacion.getPersonaLogeada()
    console.log(this.personaLog)
  }
  verificacion(){
    if(this.personaLogeadaVerificacion.verificar()){
      console.log("si se logeo alguien go menu")
      this.router.navigate(['/menu']);
    }
    else{
      console.log("si nada primero logeate")
      this.router.navigate(['/login']);
    }
  }
}
