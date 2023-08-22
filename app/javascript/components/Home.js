import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/messageReducer';

function Home() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => dispatch(fetchMessage()) }>Get Message</button>
    </div>
  )
}

export default Home