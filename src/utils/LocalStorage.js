export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("USER_ROLE");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch (error) {
    console.error(error);
  }
};

export const removeState = () => {
  try {
    localStorage.removeItem("USER_ROLE");
  }
  catch (error) {
    console.error(error);
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("USER_ROLE", serializedState);
  }
  catch (error) {
    console.error(error);
  }
};