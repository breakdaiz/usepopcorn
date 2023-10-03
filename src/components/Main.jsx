import ListBox from "./ListBox";
import WatchBox from "./WatchBox";

const Main = ({ watched, movies, average }) => {
  return (
    <main className='main'>
      <ListBox movies={movies} />
      <WatchBox average={average} watched={watched} />
    </main>
  );
};

export default Main;
