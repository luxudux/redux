import { Store, createStore } from 'redux' //libreria redux
import { contadorReducer } from '../03_EXAMPLE/contador/contador.reducer';
import { incrementadorAction } from '../03_EXAMPLE/contador/contador.actions';

// Creación del store, ya devuelve un store inicializado y listo para ser usado
const store: Store = createStore (contadorReducer); // No se está ejecutando la funcion.

// Suscribirnos para que imprima cada que tenga cambios
store.subscribe(() => {

    // Ejecuta esta liena cada que sufre un cambio
    console.log('Sub:', store.getState() );

})


store.dispatch( incrementadorAction);
store.dispatch( incrementadorAction);
store.dispatch( incrementadorAction);
store.dispatch( incrementadorAction);



// Ejemplo 4 utilizando la libreria redux de javascript, sin frameworks.
// Se ocupará la libreria redux oficial : https://www.npmjs.com/package/redux
// correr la app
// ts-node app