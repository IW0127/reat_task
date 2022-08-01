import React, { useEffect, useState } from 'react';

const ViewMore = () => {
  // view more values
  const viewMoreData = [1, 3, 5, 6, 8, 10, 12, 15, 16];

  //count view button
  const [viewCount, setViewCount] = useState(0);

  const [search, setSearch] = useState(null);
  let [viewNumber, setViewNumber] = useState(0);
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
  const clickNumber = (e) => {
    const numId = Number(e.target.dataset.id);
    setSearch(numId);
  };

  useEffect(() => {
    const index = viewMoreData.findIndex((find) => find >= search);

    if (index >= 0) {
      setViewCount(index + 2);
      setViewNumber(index);
    } else {
      setViewCount(null);
      setViewNumber(0);
    }
  }, [search]);

  const onClickViewMore = () => {
    setViewCount((prev) => prev + 2);
  };

  return (
    <div className='container text-center align-items-center d-flex justify-content-center my-3 flex-column'>
      <div className='input-group' style={{ width: '15%' }}>
        <button
          className='btn btn-primary'
          type='button'
          aria-expanded='false'
          onClick={decrement}
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
      {viewMoreData.map(
        (box, key) =>
          viewMoreData[(viewMoreData.length - 1) % 2] === box && (
            <div className='my-3 p-3 rounded-8 w-25 bg-primary bg-opacity-25'>
              {viewMoreData.map(
                (num, id) =>
                  id < viewCount &&
                  viewNumber <= id && (
                    <strong
                      key={id}
                      onClick={clickNumber}
                      data-id={num}
                      className='text-dark'
                    >
                      {num}
                      <br />
                    </strong>
                  )
              )}
              <button
                className='btn btn-primary my-1'
                onClick={onClickViewMore}
                disabled={
                  viewCount === viewMoreData.length ||
                  search >= viewMoreData[viewMoreData.length - 1]
                }
              >
                View More
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default ViewMore;
