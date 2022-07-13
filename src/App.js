import { BrowserRouter, Route, Routes, useParams }  from "react-router-dom";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Home from "./Article/Home"
import Hollywood from "./Article/Hollywood"
import Bollywood from "./Article/Bollywood"
import Technology from "./Article/Technology"
import Fitness from "./Article/Fitness"
import Food from "./Article/Food"
import SingleBlogPage from "./Article/SingleBlogPage";
import './Style.css'
import Details from "./Article/Details";

function App() {
  return (
    <div className="App">
      <Details>
      <Header />
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/bollywood" element = {<Bollywood />} />
        <Route path="/hollywood" element = {<Hollywood />} />
        <Route path="/technology" element = {<Technology />} />
        <Route path="/fitness" element = {<Fitness />} />
        <Route path="/food" element = {<Food />} />
        <Route path=":category/:articleid" element = {<SingleBlogPage/>}/>
      </Routes>
      </BrowserRouter>
      </Details>


    </div>
  );
}

export default App;
