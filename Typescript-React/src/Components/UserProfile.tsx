import React, { useRef } from 'react';

function MultipleInputs() {
  const inputRefs = useRef([]);

  const focusInput = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <div>
      {[...Array(3)].map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputRefs.current[i] = el)}
          placeholder={`Input ${i + 1}`}
          type="text"
        />
      ))}
      <button onClick={() => focusInput(1)}>Focus Input 2</button>
    </div>
  );
}

export default MultipleInputs;
