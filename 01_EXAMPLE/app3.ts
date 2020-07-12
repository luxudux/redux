// Acciones
interface Action {
    type: string;
    payload?: any;
}


// Reducer with switch
//Siempre regresa un estado
function reducer3(state=10, action: Action ) {

    switch ( action.type){

        case 'INCREMENTAR':
            return state += 1;
        
        case 'DECREMENTAR':
            return state -= 1;
        
        case 'MULTIPLICAR':
            return state * action.payload;
        
        case 'DIVIDIR':
            return state / action.payload;
        
        default:     
            return state;
        
    }
   
}

// Objeto
const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}
//Implementar el reducer
console.log(    reducer3 (10, dividirAction)   );//5


// Ejecutar en consola
// ts-node app2.ts o ts-node app2