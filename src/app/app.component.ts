import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="font-family: Arial, Helvetica, sans-serif; padding: 20px;">
    <h2>EFACT - Prueba Técnica</h2>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {}
