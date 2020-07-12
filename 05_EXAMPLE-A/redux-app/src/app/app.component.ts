import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor(){
    this.contador = 10;
  }

  incrementar(){
    return this.contador++;
  }

  decrementar(){
    return this.contador--;
  }


}
