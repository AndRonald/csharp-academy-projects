import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router'
import MovieList from './pages/MovieList';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MovieList/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;