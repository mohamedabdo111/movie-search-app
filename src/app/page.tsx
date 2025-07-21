import Card from "@/components/movieCard";
import SearchInput from "@/components/searchInput";
import { Movie } from "@/types/type";
import axios from "axios";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search?: string;
  };
}) {
  const query = searchParams.search || "avengers";
  const getMovies = await axios.get(`${process.env.NEXT_BASE_URL}&s=${query}`);
  const movies = getMovies?.data;

  return (
    <>
      <SearchInput />

      <section className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto p-4 my-12">
        {movies?.Response === "False" ? (
          <div className="container mx-auto p-4 my-12 col-span-4">
            <h1 className="text-4xl capitalize font-semibold text-center">
              No movies found
            </h1>
          </div>
        ) : (
          movies?.Search.map((movie: Movie) => (
            <Card
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              Year={movie.Year}
              Type={movie.Type}
            />
          ))
        )}
      </section>
    </>
  );
}
