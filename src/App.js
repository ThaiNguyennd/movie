import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./component/banner/Banner";
import Main1 from "./component/layout/Main1"; 
import DetailsMoviePage from "./pages/DetailsMoviePage";
import Home from "./pages/Home";

import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div>
      <Fragment>
        <Routes>
          <Route element={<Main1></Main1>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <Home></Home>
                </>
              }
            ></Route>
            <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
            <Route path="/movie/:movieId" element={<DetailsMoviePage></DetailsMoviePage>}></Route>
          
          </Route>
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
