import { createSlice } from "../../../node_modules/@reduxjs/toolkit/dist/index";

const initialState={
    WeatherData:{}
}

const WeatherSlice = createSlice({
    name: 'weatherslice',
    initialState,
    reducers: {

        WeatherInfo: (state, action) => {
            state.WeatherData = action.payload
          },
    }
});

export const {WeatherInfo}= WeatherSlice.actions

export default WeatherSlice.reducer