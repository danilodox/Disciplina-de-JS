import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./home.css";

const Home = () => {
    return(
        <div className="homePage">
            <Navbar />
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Home;