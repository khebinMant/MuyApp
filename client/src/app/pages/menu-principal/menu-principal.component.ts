import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {


  content: boolean;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private router: Router
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.content=true;
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
}
