import Card from "@/components/movieCard";
import { Movie } from "@/types/type";
import axios from "axios";

export default async function Home() {
  const getMovies = await axios.get(`${process.env.NEXT_BASE_URL}&s=batman`);
  const movies = getMovies.data;
  return (
    <>
      <section className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto p-4 my-12">
        {movies?.Search.map((movie: Movie) => (
          <Card
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            Year={movie.Year}
            Type={movie.Type}
          />
        ))}
      </section>
    </>
  );
}
