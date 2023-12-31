

const RecommendCard = ({ item }) => {
    const { name, image, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline border-0 border-b-4 mt-5">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendCard;