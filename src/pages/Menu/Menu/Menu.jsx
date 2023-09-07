import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu.';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import Cover from '../../Shared/Cover/Cover';


const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>


            <SectionTitle heading="Today's Offer" subHeading="Don't Miss"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert */}
            <MenuCategory
                items={dessert}
                title="Desert"
                img={dessertImg}
            ></MenuCategory>

            {/* Salad    */}
            <MenuCategory
                items={salad}
                title="Salad"
                img={saladImg}
            ></MenuCategory>
            {/* pizzaa */}
            <MenuCategory
                items={pizza}
                title="Pizza"
                img={pizzaImg}
            ></MenuCategory>
            {/* Soup */}
            <MenuCategory
                items={soup}
                title="Soup"
                img={soupImg}
            ></MenuCategory>



        </div>

    );
};

export default Menu;