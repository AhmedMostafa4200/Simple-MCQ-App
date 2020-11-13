const initialState = {
  item: {},
  items: [],
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case "GET_ALL_QUESTIONS":
      return {
        ...prevState,
        items: action.payload,
      };

    default:
      return prevState;
  }
}
