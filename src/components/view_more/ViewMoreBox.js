import React, { useCallback, useMemo } from 'react';
import ViewNum from './ViewNum';

const ViewMoreBox = ({
  num,
  viewCount,
  search,
  numId,
  onClickViewMore,
  clickNumber,
  viewNumber,
}) => {
  const viewNumbers = useCallback(() => (
    <ViewNum
      clickNumber={clickNumber}
      num={num}
      numId={numId}
      viewCount={viewCount}
      viewNumber={viewNumber}
    />
  ));

  const box = useMemo(
    () => (
      <div className='my-3 p-3 rounded-8 w-25 bg-primary bg-opacity-25'>
        {viewNumbers()}
        {!(
          num.length <= viewCount[numId] - 1 || search >= num[num.length - 1]
        ) ? (
          <button
            className='btn btn-primary my-1'
            onClick={onClickViewMore}
            data-id={numId}
          >
            View More
          </button>
        ) : (
          ''
        )}
        {search > num[num.length - 1] && <div>not found</div>}
      </div>
    ),
    [viewCount]
  );
  return box;
};

export default ViewMoreBox;
