import React, { useEffect, useState } from 'react';

function EffectHook() {
  const [count, setCount] = useState(0);

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  /**
   * ? Every time render
   */

  useEffect(() => {
    console.log("I'm running every time");
  });

  /**
   * ? componentDidMount
   */

  useEffect(() => {
    console.log("I'm running (componentDidMount)");
  }, []);

  /**
   * ? componentDidUpdate
   **/

  useEffect(() => {
    console.log(count);
  }, [count]);

  /**
   * ? componentWillUnmount
   **/
  const updateWindowWidth = () => {
    setWindowSize(window.innerWidth);
  };

  /* using this function getEventListeners(window) =>(this function using only for console and get differences) */
  /**
   * ? more resize window resize event array more values and more then processing time
   */

  /* useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
  }); */

  /**
   * ? with this function using not no more processing time
   */

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    /* return () => {
      window.removeEventListener("resize", updateWindowWidth);
    }; */
  });

  return (
    <>
      <p>Add Count (Using Effect Hook) {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>useEffect show output on console.</p>
      <p>window width is : {windowSize} </p>
    </>
  );
}

export default EffectHook;
