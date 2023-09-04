import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './Featured.css'
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste sit impedit quasi, doloremque natus recusandae quas assumenda quod doloribus accusamus quo culpa id porro atque ducimus saepe excepturi veritatis. Consequuntur!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;