import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <Contact></Contact>
            <Recommends></Recommends>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;