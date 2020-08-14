import { StartSetupComponent } from './pages/start-setup/start-setup.component';
import { GotoComponent } from './pages/goto/goto.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MuyaMapComponent } from './pages/muya-map/muya-map.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MuyaDataComponent } from './pages/muya-data/muya-data.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MuyaAppComponent } from './pages/muya-app/muya-app.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'


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
    {path: 'setup', component:StartSetupComponent}
  ]
  },
  { path: 'signup', component:SignUpComponent},
  { path: 'confirmation', component:ConfirmationComponent},
  { path: 'goto', component:GotoComponent},
  { path: 'setup', component:StartSetupComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
