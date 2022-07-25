import { useSelector } from 'react-redux';
import { selectMovieTicketById } from './settingSlice';

const secondCoveter = async (movieTicketId) => {
  const ticket = await useSelector((state) =>
    selectMovieTicketById(state, movieTicketId)
  );
  const daySeconds = 86400;
  const hourSeconds = 3600;
  const minuteSeconds = 60;

  let day = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;
  try {
    day = ticket.time;
  } catch (err) {
    console.log('kdkj');
  }
  // try {
  //   day = Math.floor(time / daySeconds);
  //   hour = Math.floor((time - day * daySeconds) / hourSeconds);
  //   minute = Math.floor(
  //     (time - day * daySeconds - hour * hourSeconds) / minuteSeconds
  //   );
  //   second =
  //     time - day * daySeconds - hour * hourSeconds - minute * minuteSeconds;
  // } catch (err) {
  //   console.log(err);
  // }
  return { day };
};

export default secondCoveter;
