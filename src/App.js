import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from "../src/components/Sharedlayout/SharedLayout";

const HomePage = lazy(() => import("../src/pages/HomePage"));
const Catalog = lazy(() => import("../src/pages/Catalog"));
const Favorites = lazy(() => import("../src/pages/Favorites"));
const NotFound = lazy(() => import("../src/pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
