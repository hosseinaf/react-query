import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { RQSuperHeroes } from "./components/RQSuperHeroes";
import { SuperHeroes } from "./components/SuperHeroes";
import { RQSuperHero } from "./components/RQSuperHero";
import ParallelQueries from "./components/ParallelQueries";
import { DynamicParallel } from "./components/DynamicParallel";
import { DependentQueries } from "./components/DependentQueries";
import { PaginatedQueries } from "./components/PaginatedQueries";
import { InfiniteQueries } from "./components/InfiniteQueries";
 

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/superheros">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rqsuper">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/rqparallel" element={<ParallelQueries />}></Route>
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallel heroIds={[1, 3]} />}
            ></Route>

            <Route
              path="/rq-dependent"
              element={<DependentQueries email="vishwas@example.com" />}
            ></Route>

            <Route path="/home" element={<Home />}></Route>
            <Route path="/superheros" element={<SuperHeroes />}></Route>
            <Route path="/rqsuper" element={<RQSuperHeroes />}></Route>
            <Route path="/rqsuper/:heroId" element={<RQSuperHero />}></Route>
            <Route path="/paginate" element={<PaginatedQueries/>}></Route>

            <Route path="/infinite" element={<InfiniteQueries/>}></Route>
            
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
