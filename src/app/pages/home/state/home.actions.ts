import { createAction, props } from "@ngrx/store";

export const alterarTexto = createAction(
  '[Home] Alterando Texto',
  props<{ text: string}>(),
);
