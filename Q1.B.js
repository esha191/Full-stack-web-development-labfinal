import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>Your Counter Value by Clicking the Button is {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Counter;
