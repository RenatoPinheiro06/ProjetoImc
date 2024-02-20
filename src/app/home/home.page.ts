import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  peso: number = 0;
  altura: number = 0;
  imcTotal: number = 0;

  constructor() {}

  calcularImc() {
    console.log('altura:',this.altura)
    console.log('peso:',this.peso)
   this.imcTotal = this.peso/(this.altura*this.altura);
  }
}
