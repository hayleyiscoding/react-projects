import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  function increase() {
    return setCount((prevCount) => prevCount + 1);
  }
  function decrease() {
    return setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    return setCount((prevCount) => prevCount - prevCount);
  }

  return (
    <div className='container text-center padding'>
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <h3>{count}</h3>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrease</button>
      </main>
    </div>
  );
}
