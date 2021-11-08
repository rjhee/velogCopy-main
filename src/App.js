import './styles/App.css';
import PostsDetail from './components/postsDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Listpage from './pages/Listpage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Listpage />} />
        <Route path="detail" element={<PostsDetail />}  />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
