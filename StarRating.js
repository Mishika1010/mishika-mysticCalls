import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={value <= rating ? 'star active' : 'star'}
          onClick={() => handleClick(value)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
