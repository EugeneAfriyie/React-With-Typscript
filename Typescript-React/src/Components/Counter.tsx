import React, { useReducer } from 'react';

// Define the type for the state
type StateType = {
  count: number; // Fixing the property name to match usage
};

// Define the type for the action
type Action = {
  type: 'INCREMENT' | 'DECREMENT'; // Fixing the typo in 'DECREMENT'
};

// Reducer function
const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }; // Correct property name
    case 'DECREMENT':
      return { count: state.count - 1 }; // Decrement logic
    default:
      return state; // Return the current state if action type doesn't match
  }
};

// Counter component
const Counter = () => {
  const initialState: StateType = { count: 0 }; // Define the initial state

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p> {/* Display the count */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
