import { Action } from '@ngrx/store';
import { incrementar, decrementar } from './contador.actions';

// Reducer del contador
// Quien recibe las acciones
export function contadorReducer(state: number = 10, action: Action){

    switch ( action.type ){

        case incrementar.type:
            return state + 1;

        case decrementar.type:
            return state - 1;

        default:
            return state;
    }
}
