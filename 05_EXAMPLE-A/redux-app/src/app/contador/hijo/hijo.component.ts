import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>(); // Emite un numero

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir(){
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  // Saber que el nieto está cambiando el valor
  resetNieto(nuevoContador){
    this.contador = nuevoContador; // nuevo valor
    this.cambioContador.emit(this.contador); // informamos al padre
  }
}
