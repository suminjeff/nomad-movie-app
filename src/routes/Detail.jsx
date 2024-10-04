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
  console.log(movie);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <h1 className={styles.title}>
            {movie.title} ({movie.year})
          </h1>
          <div className={styles.button__container}>
            <button
              className={styles.button}
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
          <div className={styles.contents__container}>
            <img src={`${movie.large_cover_image}`} alt="" />
            <h2>
              More Information:{" "}
              <a className={styles.link} href={movie.url}>
                Link
              </a>
            </h2>
            <p>Runtime: {movie.runtime}</p>
            <p>Rating: ★ {movie.rating}</p>
            <p>Genre</p>
            {movie.genres.map((genre, index) => {
              return <p>{genre}</p>;
            })}
            <p>Description</p>
            <p>{movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
