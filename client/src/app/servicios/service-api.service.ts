import { UsuarioActualService } from './usuario-actual.service';
import { DataRx } from './../modelos/data-rx';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServerService } from './server.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DataTx } from './../modelos/data-tx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

    url: string;
    selectedFle: File;
    dataRx: any;

  constructor(
    private personaLogeada: UsuarioActualService,
    private http: HttpClient,
    private server: ServerService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.url = this.server.getUrl();
  }

  async sendApi(endPoint: string, datos: any = null): Promise<any> {
    console.log(datos)
    const dataTx: DataTx = {
      idPersona: this.personaLogeada.getPersonaLogeada().id,
      data: datos
    };
    console.log(dataTx)
    let data = null;
    await this.http.post<DataRx>(`${this.url}${endPoint}`, dataTx).toPromise<DataRx>()
    .then(res => {
      if (res.transaccion || res.data.length.toString() === res.msg.toString()) {
        data = res.data;
      } else {
        this.toastr.warning('No se pudo completar la transacción, verifique su conección a internet', 'Error en la conección');
      }
    }).catch(err => {
      if (typeof err.error !== 'undefined' || !err.error) {
        if (!err.error.transaccion) {
          this.toastr.warning('No se pudo completar la transacción, verifique su conección a internet', 'Error en la conección');
          this.router.navigate(['/menu']);
        }
      }
      else {
        this.toastr.warning('No se pudo completar la transacción, verifique su conección a internet', 'Error en la conección');
        this.router.navigate(['/menu']);
      }
    });
    return data;
  }

  async sendFile(endPoint: string, datos: File[] = null): Promise<string> {
    const idPersona = this.personaLogeada.getPersonaLogeada().id;
    const formData = new FormData();
    formData.append('idPersona', idPersona.toString());
    formData.append('upload[]', datos[0], datos[0].name);
    let nombreArchivo: string;
    await this.http.post<DataRx>(`${this.url}${endPoint}`, formData).toPromise<DataRx>()
            .then(res => {
              nombreArchivo = res.data[0];
            });
    return nombreArchivo;
  }

  async sendApiPut(endPoint: string, datos: any = null): Promise<boolean> {
    const dataTx: DataTx = {
      idPersona: this.personaLogeada.getPersonaLogeada().id,
      data: datos
    };
    console.log(dataTx)

    let data = null;
    await this.http.put<DataRx>(`${this.url}${endPoint}`, dataTx).toPromise<DataRx>()
    .then(res => {
      if (res.error.length > 0) {
        this.toastr.error('Si el problema persiste comuniquese con el administrador del sistema', 'Registros  fallidos');
      }
      if (res.data) {
        for (const d of res.data) {
          this.toastr.success(JSON.stringify(d), 'Registros  OK');
        }
        data = true;
      }
    }).catch(err => {
      if (!err.error.transaccion) {
          this.toastr.warning(err.msg, 'Error en la conección');
      } else {
        this.toastr.warning('No se pudo completar la transacción, verifique su conección a internet', 'Error en la conección');
        this.router.navigate(['/menu']);
      }
      data = false;
    });
    return data;
  }


  async verFileServer(endPoint: string, datos: any = null): Promise<any> {
    const dataTx: DataTx = {
      idPersona: this.personaLogeada.getPersonaLogeada().id,
      data: datos
    };
    let data = null;
    await this.http.post<any>(`${this.url}${endPoint}`, dataTx).toPromise<any>()
    .then(res => {
      data = res;
    }).catch(err => {
      this.toastr.warning('No existe el archivo o se encuntra dañado', 'Error de archivo');
    });
    return data;
  }
}
