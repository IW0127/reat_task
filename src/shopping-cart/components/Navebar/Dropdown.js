import React, { useContext } from 'react';
import cartContext from '../context/Context';
import { Link } from 'react-router-dom';
import { RiDeleteBin2Fill } from 'react-icons/ri';
function Dropdown() {
  const {
    state: { cart },
    dispatch,
  } = useContext(cartContext);
  return (
    <>
      {cart.length > 0 ? (
        <>
          {cart.map((prod) => (
            <li key={prod.id}>
              <div
                className='p-2 d-flex justify-content-between align-items-center'
                style={{ width: '20rem' }}
              >
                <div className='w-25 m-1'>
                  <img
                    src={prod.img}
                    className='img-thumbnail float-left '
                    alt=''
                  />
                </div>
                <div className='d-flex flex-column p-2 '>
                  <div className='cart-title fw-bold'> {prod.name} </div>
                  <div>₹ {prod.price}</div>
                </div>
                <button
                  className='p-2 text-center btn btn-light fs-5 '
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_TO_CART',
                      payload: prod,
                    })
                  }
                >
                  <RiDeleteBin2Fill />
                </button>
              </div>
            </li>
          ))}
        </>
      ) : (
        <li>
          <div className='dropdown-item '>Your Cart is Empty!</div>
        </li>
      )}
      {cart.length ? (
        <div id='Cart' className='text-center m-3 '>
          <Link className='btn btn-primary w-100 ' to='cart' role='button'>
            Go to Cart
          </Link>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Dropdown;
