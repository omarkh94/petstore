import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./Components/NavBar";

function App() {

  return (
    <NavBar>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
            path="*"
            element={
              <div>
                <p>Sorry there is no route matches</p>
              </div>
            }
          />
      </Routes>
      </NavBar>
  )
}

export default App
