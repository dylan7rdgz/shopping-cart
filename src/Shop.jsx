import { Outlet } from "react-router";
import Banner from "./components/Banner";
import Header from "./components/Header";

const Shop = () => {
    return (
        <div>
            <Banner 
             text="The Most Colour We've Ever Dropped.
             Shop The Wool Cruiser Collection" 
             color="green"
            />
            <Header/>
            <img src="https://cdn.shopify.com/s/files/1/0877/9359/8739/files/Group_2055245872.png?v=1757454181&width=3840"/>
            <img src="https://cdn.shopify.com/s/files/1/0877/9359/8739/files/Group_2055245872.png?v=1757454181&width=3840"/>
            <header>Shop</header>
            <Outlet/>
        </div>
    )
}

export default Shop;