import { RootState } from "app/model";

const selectPopup = (state: RootState) => ({ ...state.popup });

export { selectPopup };
