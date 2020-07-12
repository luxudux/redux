import { createAction } from '@ngrx/store';
// Las acciones le dicen al reducer que es lo que tienen que hacer
// Acciones, se exportan porque se van a utilizar en otros archivos
export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
