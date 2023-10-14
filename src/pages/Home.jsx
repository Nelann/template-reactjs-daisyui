import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <>
      <Carousel />
      <section className="bg-base-200 -mt-2">
        <MovieList />
      </section>
    </>
  );
};

export default Home;
