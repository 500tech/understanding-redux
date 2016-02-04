// Pure function with no side-effects
// that will return a new state of the application
function reducer(state, action) {
  const lastStatusIndex = state.statusCodes.length - 1;
  const isFirstIndex    = state.currentIndex === 0;
  const isLastIndex     = state.currentIndex === lastStatusIndex;

  // Actions look like this:
  // { type: 'ACTION_TYPE', ... }
  switch (action.type) {

    case 'PREV_STATUS':
      const prevIndex = isFirstIndex ? lastStatusIndex : state.currentIndex - 1;

      // RIGHT: Using Object.assign to not mutate the current state
      return Object.assign({}, state, { currentIndex: prevIndex });

    case 'NEXT_STATUS':
      const nextIndex = isLastIndex ? 0 : state.currentIndex + 1;

      // WRONG: state.currentIndex = nextIndex
      return Object.assign({}, state, { currentIndex: nextIndex });

    // Sometimes we don't need to create a new state
    // This way callbacks will not fire and app will not get re-rendered
    default:
      return state;
  }
}

const initialState = {
  statusCodes: [
    100, 101, 200, 201, 202, 204, 206, 207, 300, 301, 302, 303, 304,
    305, 307, 400, 401, 402, 403, 404, 405, 406, 408, 409, 410, 411,
    412, 413, 414, 415, 416, 417, 418, 422, 423, 424, 425, 426, 429,
    431, 444, 450, 451, 500, 502, 503, 506, 507, 508, 509, 599
  ],
  currentIndex: 2
};

window.store = Redux.createStore(reducer, initialState);
