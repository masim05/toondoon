export const createNewTodo = ({title, description}) => ({
  type: 'CREATE_NEW_TODO',
  title,
  description
});

export const moveTodo = ({id, to}) => ({
  type: 'MOVE_TODO',
  id,
  to
});
