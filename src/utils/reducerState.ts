import { DefaultValues } from "components/DateInputFilter/types";

const reducer = (prevState: DefaultValues, newState: DefaultValues) => ({
  ...prevState,
  ...newState
});

export default reducer;
