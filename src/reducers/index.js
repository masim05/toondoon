const defaultState = {
  "new": {
    "items": []
  },
  "inprogress": {
    "items": []
  },
  "done": {
    "items": []
  },
  "closed": {
    "items": []
  }
};

export const app = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_NEW_TODO':
      return defaultState;
    case 'MOVE_TODO':
      return defaultState;
    default:
      return state
  }
};