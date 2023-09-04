import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import RecommendCard from "./RecommendCard";


const Recommends = () => {
    const [recommends, setRecommend] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const recommended = data.filter(item => item.recommend === "recommend")
                setRecommend(recommended)
            })
    }, [])
    return (
        <section className="mb-20">
            <SectionTitle subHeading="Should Try" heading="CHEF RECOMMENDS">

            </SectionTitle>

            <div className="m-10 flex gap-7">
                {
                    recommends.map(item => <RecommendCard key={item._id} item={item}></RecommendCard>)
                }
            </div>

        </section>
    );
};

export default Recommends;