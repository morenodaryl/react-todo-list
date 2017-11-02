export const notesReducer = (state = {notes: [{
  id: 1,
  title: 'Este es mi título',
  content: 'Este es el contenido de mis notas'}
]}, action) =>{
  switch (action.type){
    case "ADD_NOTE":
      const get_new_id = () => {
        var last_id = 1;
        if (state.notes.length !== 0) {
          last_id = state.notes[state.notes.length - 1].id;
        }
        action.payload.id = last_id + 1;
        return [...state.notes, action.payload]
      };
      state = {
        ...state,
        notes: get_new_id()
      }
      break;
    case "SET_SELECTED_NOTE":
      state = {
        ...state,
        selected: action.payload
      }
      break;
    case "DELETE_NOTE":
      state = {
        ...state,
        notes: [...state.notes.splice(action.payload, 1)]
      }
      break;
    default: 
      break;
  }
  return state;
}