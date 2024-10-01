import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres, year }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>{title}</h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>
        {summary.length > 250
          ? `${summary.slice(0, 250)}...`
          : summary.length > 0
          ? summary
          : "no summary provided"}
      </p>
      <ul className={styles.movie__genres}>
        {genres && genres.map((g, index) => <li key={index}>{g}</li>)}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.number.isRequired,
};

export default Movie;
