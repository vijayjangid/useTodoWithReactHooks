export const TodosActionTypes = {
  ADD: "add",
  DELETE_ALL: "delete-all",
  TOGGLE_COMPLETED: "toggle-completed"
};
export default function TodosReducer(state = [], action) {
  switch (action.type) {
    case TodosActionTypes.ADD:
      return [...state, action.payload];
    case TodosActionTypes.DELETE_ALL:
      return [];
    case TodosActionTypes.TOGGLE_COMPLETED:
      const newState = [...state];
      const { index, completed } = action.payload;
      newState[index] = { ...state[index], completed };
      return newState;

    default:
      return state;
  }
}
