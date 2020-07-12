// console.log('Hola Mundo')

// Acciones
interface Action {
    type: string;
    payload?: any;
}


// Reducer with if
//Siempre regresa un estado
function reducer(state=10, action: Action ) {

    if ( action.type == 'INCREMENTAR'){
        return state += 1;
    }
    return state;

}

// Objeto
const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}
//Implementar el reducer
console.log(    reducer (10, incrementadorAction)   );//11


// Ejecutar en consola
// ts-node app.ts o ts-node app