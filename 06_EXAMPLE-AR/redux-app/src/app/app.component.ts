import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// importar todas los métodos con el alias 'actions'
import * as actions from './contador/contador.actions';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';

  contador: number;
  // Can will be: private store: Store<{contador: number}>,
  // app-module.ts => StoreModule.forRoot({ contador: contadorReducer })from
  constructor( private store: Store<AppState>){
    // Se crea todo, antes de crear todo el HTML
    this.store.subscribe( state => {
      console.log(state); // es un objeto
      this.contador = state.contador;
    });
  }

  incrementar(){
    // Disparamos accion
    this.store.dispatch( actions.incrementar() );

  }

  decrementar(){
    // Disparamos accion
    this.store.dispatch( actions.decrementar() );
  }
}
