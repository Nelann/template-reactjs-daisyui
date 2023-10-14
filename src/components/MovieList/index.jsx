import MovieItem from "../MovieItem";

const MovieList = () => {
  return (
    <section className="max-w-7xl mx-3 md:mx-auto py-8 md:py-12">
      <div className="flex justify-between mb-6">
        <h2 className="font-semibold text-xl">MovieList</h2>
        <h2 className="font-semibold text-xl">MovieList</h2>
      </div>
      <div className="flex flex-wrap justify-between gap-8">
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </div>
    </section>
  );
};

export default MovieList;
