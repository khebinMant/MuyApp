import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private url: string;

  constructor() {
    this.url = 'http://localhost:3000/server/';
  }

  getUrl() {
    return this.url;
  }
}
