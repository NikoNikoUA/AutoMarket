import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "../../../src/components/Loader/Loader";
import { NavHeader, LogoText, Li, Ul, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <section>
      <header>
        <NavHeader>
          <LogoText>DCR</LogoText>
          <Ul>
            <Li>
              <Link to="/">Home</Link>
            </Li>
            <Li>
              <Link to="catalog">Catalog</Link>
            </Li>
            <Li>
              <Link to="favorites">Favorites</Link>
            </Li>
          </Ul>
        </NavHeader>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};
