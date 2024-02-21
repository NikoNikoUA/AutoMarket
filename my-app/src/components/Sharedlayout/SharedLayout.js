import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../../../src/components/Loader/Loader";

export const SharedLayout = () => {
  return (
    <section>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              <NavLink to="catalog">Catalog</NavLink>
              <NavLink to="favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};
