export const increment = () => ({ type: 'increment' });

export const decrement = () => ({ type: 'decrement' });

export const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: 'increment_async' });
    }, 1000);
  };
};
