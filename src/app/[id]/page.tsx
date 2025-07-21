import axios from "axios";
import { Star, Clock, Award, Calendar, Globe, Film } from "lucide-react";
import Image from "next/image";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: {};
}

export default async function MovieDetails({ params }: PageProps) {
  const { id } = params;

  const getDetails = await axios.get(`${process.env.NEXT_BASE_URL}&t=${id}`);
  const movieDetails = getDetails?.data;
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 z-10" />
        <Image
          src={movieDetails?.Poster}
          alt={movieDetails?.Title}
          fill
          className="object-cover opacity-50"
          priority
        />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            {movieDetails?.Title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-gray-300">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> {movieDetails?.Year}
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {movieDetails?.Runtime}
            </span>
            <span>•</span>
            <span>{movieDetails?.Rated}</span>
            <span>•</span>
            <div className="flex flex-wrap gap-2">
              {["Action", "Crime", "Drama"].map((genre) => (
                <span
                  key={genre}
                  className="px-2 py-1 text-xs border border-gray-500 rounded-md bg-transparent text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-8">
              <div className="relative aspect-[2/3] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg shadow-2xl mb-6">
                <Image
                  src={movieDetails?.Poster}
                  alt={movieDetails?.Title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg mb-6">
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star
                        className="h-5 w-5 text-yellow-500 mr-2"
                        fill="currentColor"
                      />
                      <span className="font-bold text-xl">8.2/10</span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      1,652,636 votes
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-green-800 text-white font-bold px-2 py-1 rounded mr-2 text-sm">
                        70
                      </div>
                      <span>Metascore</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg">
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="text-gray-400 text-sm font-medium mb-1">
                      Released
                    </h3>
                    <p className="text-white">{movieDetails?.Released}</p>
                  </div>

                  <div>
                    <h3 className="text-gray-400 text-sm font-medium mb-1">
                      Country
                    </h3>
                    <p className="text-white">{movieDetails?.Country}</p>
                  </div>

                  <div>
                    <h3 className="text-gray-400 text-sm font-medium mb-1">
                      Language
                    </h3>
                    <p className="text-white">{movieDetails.Language}</p>
                  </div>

                  <div>
                    <h3 className="text-gray-400 text-sm font-medium mb-1">
                      Box Office
                    </h3>
                    <p className="text-white font-semibold">
                      {movieDetails?.BoxOffice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {movieDetails?.Plot || ""}
              </p>
            </section>

            <div className="border-t border-gray-800 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Cast & Crew
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-gray-400 text-sm font-medium mb-2">
                    Director
                  </h3>
                  <p className="text-white font-semibold">
                    {movieDetails?.Director}
                  </p>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <h3 className="text-gray-400 text-sm font-medium mb-2">
                    Writers
                  </h3>
                  <p className="text-white">{movieDetails?.Writer}</p>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 sm:col-span-2 lg:col-span-1">
                  <h3 className="text-gray-400 text-sm font-medium mb-2">
                    Stars
                  </h3>
                  <p className="text-white">{movieDetails?.Actors}</p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-800 my-8"></div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
                <Award className="h-6 w-6 mr-2 text-yellow-500" />
                Awards & Recognition
              </h2>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <p className="text-gray-300">
                  {movieDetails?.Awards || "No awards information available."}
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Additional Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex items-center">
                  <Film className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400 text-sm block">Type</span>
                    <p className="text-white font-medium">
                      {movieDetails?.Type || "No type information available."}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400 text-sm block">IMDB ID</span>
                    <p className="text-white font-medium">
                      {movieDetails?.imdbID || ""}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Technical Details
              </h2>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-400 text-sm block mb-1">
                      Runtime
                    </span>
                    <p className="text-white">140 minutes</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block mb-1">
                      Rating
                    </span>
                    <p className="text-white">PG-13</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block mb-1">
                      IMDb Rating
                    </span>
                    <p className="text-white font-semibold">8.2/10</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block mb-1">
                      Metascore
                    </span>
                    <p className="text-white font-semibold">70/100</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
