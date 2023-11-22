const initialState = [];

const itemReducer = (state = initialState, { type, payload }) => {
  let index = state.findIndex((item) => item.id === payload.id);
  switch (type) {
    case 'ADD':
      if (index !== -1) {
        return state;
      } else {
        return [...state, { ...payload, counter: 1 }];
      }
    case 'INCREMENT':
      state[index].counter += 1;
      return [...state];
    case 'DECREMENT':
      if (state[index].counter > 1) {
        state[index].counter -= 1;
        return [...state];
      } else {
        state.splice(index, 1);
        return [...state];
      }
    case 'REMOVE':
      state.splice(index, 1);
      return [...state];
    case 'REMOVE_ALL':
      return initialState;
    default:
      return state;
  }
};

export default itemReducer;
