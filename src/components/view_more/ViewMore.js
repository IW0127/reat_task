import React, { memo, useMemo, useState } from 'react';
import ViewMoreBox from './ViewMoreBox';

const ViewMore = () => {
  // view more values
  const viewMoreData = [1, 3, 5, 6, 8, 10, 12, 15, 16, 18, 20, 22, 24, 26];

  /* count view button */
  const [viewCount, setViewCount] = useState({});

  /* Search input box  */
  const [search, setSearch] = useState(0);

  /* number onclick */
  const [viewNumber, setViewNumber] = useState({});

  /* split array */
  const partViewMore = () => {
    const chunkSize = Math.floor(viewMoreData.length / 2);
    const arr = [];
    const groups = viewMoreData
      .map((e, i) => {
        return (
          i % chunkSize === 0 &&
          arr.push(0) &&
          viewMoreData.slice(i, i + chunkSize)
        );
      })
      .filter((e) => e);
    // setViewCount({ ...arr });
    return groups;
  };

  /* View More Button */
  const onClickViewMore = (e) => {
    const viewBtnId = Number(e.target.dataset.id);
    setViewCount({ ...viewCount, [viewBtnId]: viewCount[viewBtnId] + 2 });
  };

  /* Onclick number in view more box */
  const clickNumber = (e) => {
    const numId = Number(e.target.dataset.id);
    setSearch(numId);
  };

  /* Input box search */
  useMemo(() => {
    let count = {};
    let viewNum = {};
    partViewMore().map((value, key) => {
      const index = value.findIndex((find) => find >= search);
      if (index >= 0) {
        count = { ...count, [key]: index + 2 };
        viewNum = { ...viewNum, [key]: index };
      } else {
        count = { ...count, [key]: 0 };
        viewNum = { ...viewNum, [key]: -1 };
      }
    });
    setViewCount({ ...viewCount, ...count });
    setViewNumber({ ...viewNumber, ...viewNum });
  }, [search]);

  const increment = () => {
    setSearch((prev) => prev + 1);
  };

  const decrement = () => {
    search > 0 && setSearch((prev) => prev - 1);
  };

  const changeOnSearch = (e) => {
    const searchValue = Number(e.target.value);
    searchValue ? setSearch(searchValue) : setSearch(0);
  };

  return (
    <div className='container text-center align-items-center d-flex justify-content-center my-3 flex-column'>
      <div className='input-group' style={{ width: '15%' }}>
        <button
          className='btn btn-primary'
          type='button'
          aria-expanded='false'
          onClick={decrement}
          disabled={search === 0}
        >
          <i className='fa-solid fa-minus'></i>
        </button>

        <input
          type='text'
          value={search ?? 0}
          onChange={changeOnSearch}
          className='form-control text-center'
        />
        <button
          className='btn btn-primary'
          type='button'
          aria-expanded='false'
          onClick={increment}
        >
          <i className='fa-solid fa-plus'></i>
        </button>
      </div>
      {partViewMore().map((num, key) => (
        <ViewMoreBox
          key={key}
          num={num}
          numId={key}
          viewCount={viewCount}
          search={search}
          onClickViewMore={onClickViewMore}
          clickNumber={clickNumber}
          viewNumber={viewNumber}
        />
      ))}
    </div>
  );
};

export default ViewMore;
