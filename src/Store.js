import { configureStore } from "../node_modules/@reduxjs/toolkit/dist/index";
import WeatherSlice from "./components/weather/WeatherSlice";



export default configureStore({
    reducer: {
      weatherslice:WeatherSlice,
    },
  });