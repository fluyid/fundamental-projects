import { useState } from "react";

const SingleTour = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadmore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadmore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          onClick={() => removeTour(id)}
          className="btn btn-block delete-btn"
        >
          not interested
        </button>
      </div>
    </article>
  );
};
export default SingleTour;
