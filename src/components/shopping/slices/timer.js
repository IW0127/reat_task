import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const TIMER_URL = `${process.env.DB_DATA}/Timer`;

export const fetchTimer = createAsyncThunk('timer/fetchTimer', async () => {
  try {
    const response = await axios.get(TIMER_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const updateTimer = createAsyncThunk(
  'timer/updateTimer',
  async (initialTime) => {
    try {
      const { id } = initialTime;
      const response = await axios.put(`${TIMER_URL}/${id}`, initialTime);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const secondsToTime = (action) => {
  const daySeconds = 86400;
  const hourSeconds = 3600;
  const minuteSeconds = 60;
  const timerSeconds = action;
  let Days = Math.floor(timerSeconds / daySeconds);
  let Hours = Math.floor((timerSeconds - Days * daySeconds) / hourSeconds);
  let Minutes = Math.floor(
    (timerSeconds - Days * daySeconds - Hours * hourSeconds) / minuteSeconds
  );
  let Seconds =
    timerSeconds -
    Days * daySeconds -
    Hours * hourSeconds -
    Minutes * minuteSeconds;

  return { Days, Hours, Minutes, Seconds };
};

const initialState = {
  timeSecond: {
    Days: '00',
    Hours: '00',
    Minutes: '00',
    Seconds: '00',
  },
  second: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      let Days = Number(state.timeSecond.Days);
      let Hours = Number(state.timeSecond.Hours);
      let Minutes = Number(state.timeSecond.Minutes);
      let Seconds = Number(state.timeSecond.Seconds);
      if (Days > 0 && Hours === 0) {
        Days--;
        Hours = 24;
      }

      if (Hours > 0 && Minutes === 0) {
        Hours--;
        Minutes = 59;
      }

      if (Seconds === 0 && Minutes > 0) {
        Minutes--;
        Seconds = 60;
      }
      if (Seconds > 0) {
        Seconds--;
      }
      if (Days >= 0 && Days < 10) Days = '0' + Days;
      if (Hours >= 0 && Hours < 10) Hours = '0' + Hours;
      if (Minutes >= 0 && Minutes < 10) Minutes = '0' + Minutes;
      if (Seconds >= 0 && Seconds < 10) Seconds = '0' + Seconds;
      state.timeSecond = { Days, Hours, Minutes, Seconds };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTimer.fulfilled, (state, action) => {
        const timerSeconds = action.payload[0].seconds;
        state.second = timerSeconds;
        state.timeSecond = secondsToTime(timerSeconds);
      })
      .addCase(updateTimer.fulfilled, (state, action) => {
        const timerSeconds = action.payload.seconds;
        state.second = timerSeconds;
        state.timeSecond = secondsToTime(timerSeconds);
      });
  },
});

export const selectTimer = (state) => state.timer.timeSecond;
export const Timer = (state) => state.timer.second;

export const { startTimer } = timerSlice.actions;

export default timerSlice.reducer;
