export function addNote(title, content){
  return {
    type: "ADD_NOTE",
    payload: {
      title,
      content
    }
  }
}

export function setSelectedNote(id){
  return {
    type: "SET_SELECTED_NOTE",
    payload: id
  }
}

export function deleteNote(index){
  return {
    type: "DELETE_NOTE",
    payload: index
  }
}

