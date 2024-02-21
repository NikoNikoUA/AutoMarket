import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../src/pages/HomePage"));
const Catalog = lazy(() => import("../src/pages/Catalog"));
const Favorites = lazy(() => import("../src/pages/Favorites"));
const NotFound = lazy(() => import("../src/pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="notFound" element={<NotFound />} />
    </Routes>
  );
}

export default App;
