import React, { useMemo } from 'react';

const ViewNum = ({ clickNumber, num, viewCount, numId, viewNumber }) => {
  const clickNum = useMemo(
    () =>
      num.map(
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
      ),
    [viewCount]
  );
  return clickNum;
};

export default ViewNum;
