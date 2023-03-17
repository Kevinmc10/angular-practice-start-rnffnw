import { Component } from '@angular/core';
import { product } from './carro.model';
import { Carrito } from './carro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  Name = '';
  color = '';
  placa = '';
  newName = '';
  newColor = '';
  newPlaca = '';
  Carro: string[] = [];
  Color: string[] = [];
  Placa: string[] = [];

  addName() {
    this.Carro.push(this.newName);
    this.newName = '';
  }
  addColor() {
    this.Color.push(this.newColor);
    this.newColor = '';
  }
  addPlaca() {
    this.Placa.push(this.newPlaca);
    this.newPlaca = '';
  }
  deletecarro(index: number) {
    this.Carro.splice(index, 1);
  }
  deleteColor(index: number) {
    this.Color.splice(index, 1);
  }
  deletePlaca(index: number) {
    this.Placa.splice(index, 1);
  }
}
