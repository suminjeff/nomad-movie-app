import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";
import { useState } from "react";

function Movie({ id, coverImg, title, summary, genres, year, rating }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link to={`/movie/${id}`} className={styles.link}>
        <div
          className={styles.card}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ backgroundImage: `url(${coverImg})` }}
        >
          {isHovered && (
            <div className={styles.contents__container}>
              <p>
                {title} ({year})
              </p>
              <p>★ {rating}</p>
            </div>
          )}
        </div>
      </Link>
    </>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
