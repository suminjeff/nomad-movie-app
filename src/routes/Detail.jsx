import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import styles from "../styles/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const response = await fetch(url);
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(!loading);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${movie.large_cover_image})` }}
          ></div>
          <h1 className={styles.title}>
            {movie.title} ({movie.year})
          </h1>
          <div className={styles.contents__container}>
            <img src={`${movie.large_cover_image}`} alt="" />
            <h2>
              More Information:{" "}
              <a className={styles.link} href={movie.url}>
                Link
              </a>
            </h2>
            <div className={styles.rating}>
              <p className={styles.rating__text}>Rating</p>
              <p className={styles.rating__star}>★ {movie.rating}</p>
            </div>
            <div className={styles.genre__contents}>
              <h2 className={styles.genre__text}>Genre</h2>
              <div className={styles.genre__container}>
                {movie.genres.map((genre, index) => {
                  return (
                    <p key={index} className={styles.genre}>
                      {genre}
                    </p>
                  );
                })}
              </div>
            </div>
            {movie.description_full && (
              <>
                <h2>Description</h2>
                <p>{movie.description_full}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
