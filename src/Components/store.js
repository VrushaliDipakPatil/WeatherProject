import { ThunkAction, configureStore } from "../../node_modules/@reduxjs/toolkit/dist/index";
import WeatherSlice from "./WeatherSlice";


export default configureStore({
  reducer: {
    weatherslice:WeatherSlice,
  },
});


