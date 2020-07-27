import { RegistroComponent } from './pages/registro/registro.component';
import { MuyaMapComponent } from './pages/muya-map/muya-map.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MuyaDataComponent } from './pages/muya-data/muya-data.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MuyaAppComponent } from './pages/muya-app/muya-app.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component:InicioComponent},
  { path: 'inicio', component:InicioComponent},
  {path: 'menu', component:MenuPrincipalComponent, children:
    [
      {path: 'data', component:MuyaDataComponent},
      {path: 'app', component:MuyaAppComponent},
      { path: 'map', component: MuyaMapComponent}
    ]
  },
  {path: 'login', component:LoginComponent, children:
  [
    {path: 'menu', component:MenuPrincipalComponent}
  ]
  },
  { path: 'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
