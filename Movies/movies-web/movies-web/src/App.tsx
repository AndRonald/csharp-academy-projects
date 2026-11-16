import Navbar from './components/Navbar';
import MovieList from './pages/MovieList';

function App() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <MovieList />
      </main>
    </>
  );
}

export default App;