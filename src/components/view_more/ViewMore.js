import React, { useEffect, useState } from 'react';

const ViewMore = () => {
  // const viewMoreNumber = [1, 2, 6, 8, 7, 9];
  const [viewMore, setViewMore] = useState([1, 2, 6, 8, 7, 9]);
  const [viewCount, setViewCount] = useState(0);
  const [search, setSearch] = useState(0);

  const increment = () => {
    setSearch((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setSearch((prev) => prev - 1);
    }
  };

  const changeOnSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };

  const onClickViewMore = () => {
    setViewCount((prev) => prev + 2);
  };

  useEffect(() => {
    const viewMoreArray = viewMoreNumber.slice(0, viewCount);
    setViewMore(() => viewMoreArray);
  }, [viewCount]);

  const resetState = () => {
    setViewCount(() => 0);
    setCount(() => 0);
    setViewMore(() => []);
    setSearch(() => 0);
  };
  return (
    <div className='container text-center align-items-center d-flex justify-content-center my-3 flex-column'>
      <button className='btn btn-primary m-4' onClick={resetState}>
        Rest
      </button>
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
          value={search}
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
      <div className='my-3 p-3 rounded-8 w-25 bg-primary bg-opacity-25'>
        {viewMore.map((num, id) => (
          <strong key={id} className='text-dark'>
            {num}
            <br />
          </strong>
        ))}
        <button className='btn btn-primary my-1' onClick={onClickViewMore}>
          View More
        </button>
      </div>
    </div>
  );
};

export default ViewMore;
