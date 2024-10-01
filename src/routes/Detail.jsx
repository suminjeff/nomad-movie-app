import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <h1>Loading...</h1>
      ) : (
        <div>
          <button onClick={() => window.history.back()}>Back</button>
          <h1>
            {movie.title} ({movie.year})
          </h1>
          <img src={`${movie.large_cover_image}`} alt="" />
          <h2>
            More Information: <a href={movie.url}>Link</a>
          </h2>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
