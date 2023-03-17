import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/signin" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
// https://github.com/mcosta21/netflix-clone-reactjs
