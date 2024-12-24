import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const containerStarStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
  fontSize: "18px",
};

function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    display: "block",
    cursor: "pointer",
    width: `${size}px`,
    height: `${size}px`,
  };
  return (
    <span
      style={starStyle}
      role="button"
      onClick={onRate}
      onMouseOver={onHoverIn}
      onMouseOut={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFD700" /* Warna isi (Gold) */
          stroke={color} /* Warna garis luar (Hitam) */
          strokeWidth="1"
        >
          <path d="M12 2.5l2.763 7.685h8.072l-6.54 4.76 2.764 7.686L12 17.871l-6.06 4.761 2.764-7.686-6.54-4.76h8.072L12 2.5z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color} /* Warna garis (Hitam) */
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}

StarRating.propTypes = {
  max: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default function StarRating({ max = 5, color, size = 24 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={containerStarStyle}>
        {Array.from({ length: max }, (_, index) => (
          <Star
            key={index}
            onRate={() => handleRating(index + 1)}
            full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            onHoverIn={() => setTempRating(index + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""} </p>
    </div>
  );
}
