import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <div>
      <div>Current Count: {count}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <div>Previous Count: {previousCount}</div>
    </div>
  );
};

export default PreviousComponent;
