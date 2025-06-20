import { Routes, Route } from 'react-router';

import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div class="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/create"
          element={<CreatePage />}
        />
        <Route
          path="/note/:id"
          element={<UpdatePage />}
        />
      </Routes>
    </div>
  );
};

export default App;
