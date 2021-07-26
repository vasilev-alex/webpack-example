import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Counter: {counter}{' '}
      <button onClick={() => setCounter(counter + 1)}>update</button>
    </div>
  );
}
