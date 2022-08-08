import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const TIMER_URL = 'http://localhost:3500/Timer';

export const fetchTimer = createAsyncThunk('timer/fetchTimer', async () => {
  try {
    const response = await axios.get(TIMER_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  timeSecond: {
    day: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  },
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      let day = Number(state.day);
      let hours = Number(state.hours);
      let minutes = Number(state.minutes);
      let seconds = Number(state.seconds);
      if (day > 0 && hours === 0) {
        day--;
        hours = 24;
      }

      if (hours > 0 && minutes === 0) {
        hours--;
        minutes = 59;
      }

      if (seconds === 0 && minutes > 0) {
        minutes--;
        seconds = 60;
      }
      if (seconds > 0) {
        seconds--;
      }
      if (day >= 0 && day < 10) day = '0' + day;
      if (hours >= 0 && hours < 10) hours = '0' + hours;
      if (minutes >= 0 && minutes < 10) minutes = '0' + minutes;
      if (seconds >= 0 && seconds < 10) seconds = '0' + seconds;

      state.timeSecond = { day, hours, minutes, seconds };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTimer.fulfilled, (state, action) => {
      const daySeconds = 86400;
      const hourSeconds = 3600;
      const minuteSeconds = 60;

      const timerSeconds = action.payload[0];
      let day = Math.floor(timerSeconds / daySeconds);
      let hours = Math.floor((timerSeconds - day * daySeconds) / hourSeconds);
      let minutes = Math.floor(
        (timerSeconds - day * daySeconds - hours * hourSeconds) / minuteSeconds
      );
      let seconds =
        timerSeconds -
        day * daySeconds -
        hours * hourSeconds -
        minutes * minuteSeconds;

      /* state.day = day;
      state.hours = hours;
      state.minutes = minutes;
      state.seconds = seconds; */
      state.timeSecond = { day, hours, minutes, seconds };
    });
  },
});

export const selectTimer = (state) => state.timer.timeSecond;

export const { startTimer } = timerSlice.actions;

export default timerSlice.reducer;
