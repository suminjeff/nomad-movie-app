import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css";
import { useState } from "react";

function Movie({ id, coverImg, title, summary, genres, year, rating }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__inner}>
          <div className={styles.card__front}>
            <img src={coverImg} alt={title} />
          </div>
          <div className={styles.card__back}>
            <img
              src={coverImg}
              alt={title}
              className={styles.card__back__img}
            />
            <div className={styles.card__back__contents}>
              <p className={styles.title}>
                {title} ({year})
              </p>
              <p className={styles.rating}>★ {rating}</p>
              <div className={styles.link__button}>
                <Link to={`/movie/${id}`} className={styles.link}>
                  details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
