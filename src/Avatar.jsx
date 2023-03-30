import React, { useState } from "react";

function Avatar({ image, firstName, lastName }) {
  const [count, setCount] = useState(0);

  return (
    <figure>
      <img src={image} alt={firstName} />
      <figcaption>
        {firstName}
        {lastName}
        <button onClick={() => setCount(count + 1)}> 🍩{count} </button>
      </figcaption>
    </figure>
  );
}

export default Avatar;
