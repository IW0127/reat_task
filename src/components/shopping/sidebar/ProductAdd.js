import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/product';
const ProductAdd = ({ id }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  const [product, setProduct] = useState({
    productImg: null,
    productName: '',
    comperePrice: '',
    productPrice: '',
  });
  const handelChange = (e) => {
    e.target.name === 'productImg'
      ? e.target.files[0] &&
        setProduct({
          ...product,
          [e.target.name]: URL.createObjectURL(e.target.files[0]),
        })
      : setProduct({
          ...product,
          [e.target.name]: e.target.value,
        });
  };
  const canSave =
    product.productImg === null ||
    product.productName === '' ||
    product.comperePrice === '' ||
    product.productPrice === '';

  const handelClick = () => {
    setDisabled(true);
    dispatch(addProduct({ id, ...product }));
  };
  return (
    <div className='mt-3'>
      <div className='mb-3 border-0 rounded-4' style={{ height: '200px' }}>
        <input
          type='file'
          hidden
          className='border-0'
          id={`inputGroupFile_${id}`}
          accept='image/*'
          name='productImg'
          onChange={handelChange}
        />
        {product.productImg === null ? (
          <label
            className='w-100 h-100 rounded-7 border border-4 d-flex justify-content-center align-items-center'
            htmlFor={`inputGroupFile_${id}`}
          >
            <i className='fa-solid fa-cloud-arrow-up h1'></i>
          </label>
        ) : (
          <div className='rounded-7 border border-4 h-100'>
            <img
              src={product.productImg}
              alt=''
              className='h-100 w-100 rounded-7 bg-black border'
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
      </div>
      <div className=''>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control rounded'
            placeholder='Product Name'
            name='productName'
            onChange={handelChange}
            value={product.productName}
            readOnly={disabled}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='number'
            min={0}
            className='form-control rounded'
            placeholder='Compere Price'
            name='comperePrice'
            onChange={handelChange}
            value={product.comperePrice}
            readOnly={disabled}
          />
        </div>
        <div className='input-group mb-3'>
          <input
            type='number'
            min={0}
            className='form-control rounded'
            placeholder='Product Price'
            name='productPrice'
            onChange={handelChange}
            value={product.productPrice}
            readOnly={disabled}
          />
        </div>
        <button
          className='btn btn-primary w-100'
          disabled={canSave || disabled}
          onClick={handelClick}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default ProductAdd;
