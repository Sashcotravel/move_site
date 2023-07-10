import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DescFilm from "./pages/DescFilm";
import Footer from "./components/Footer";
import WatchLater from "./pages/WatchLeater";
import Films from "./pages/Films";
import Search from "./pages/Search";


function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/my-ivi' element={<DescFilm />}/>
                <Route path='/why-new' element={<WatchLater />}/>
                <Route path='/films' element={<Films />}/>
                {/*<Route path='/serial' element={<DescFilm/>}/>*/}
                {/*<Route path='/cartoon' element={<DescFilm/>}/>*/}
                <Route path='/search' element={<Search />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
