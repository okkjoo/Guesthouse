import React, { useState } from 'react';

const ComponentOld = () => {
  const [text, setText] = useState('demo');
  const handleClick = e => {
    alert(e);
  };
  return <div onClick={handleClick}>ComponentOld:{text}</div>;
};

export default ComponentOld;
