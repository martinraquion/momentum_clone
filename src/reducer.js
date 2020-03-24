import uuid4 from "uuid4";
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME": 
      localStorage.setItem("name", action.name)
      return {...state, user: {...state.user, name: action.name}}
    
    case "ADD_TODO":
      const newTodo = {
        id: uuid4(),
        text: action.payload,
        complete: false
      };
      const addedTodo = [...state.todos, newTodo];
      return { ...state, todos: addedTodo };

    case "CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      };

    case "TOGGLE_TODO":
      const toggleTodos = state.todos.map(t =>
        t.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : t
      );
      return { ...state, todos: toggleTodos };

    case "REMOVE_TODO":
      const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
      return { ...state, todos: filteredTodos };

    case "UPDATE_TODO":
      const updateTodos = state.todos.map(t =>
        t.id === action.payload.id
          ? { ...action.payload, text: action.text }
          : t
      );
      return { ...state, todos: updateTodos, currentTodo: {} };

    default:
      return state;
  }
};
export default reducer;
