import React, { memo } from 'react';

const ViewNum = ({ clickNumber, num, viewCount, numId, viewNumber }) => {
  return num.map(
    (value, id) =>
      id < viewCount[numId] &&
      viewNumber[numId] <= id && (
        <strong
          key={id}
          onClick={clickNumber}
          data-id={value}
          className='text-dark'
        >
          {value}
          <br />
        </strong>
      )
  );
};

export default memo(ViewNum);
