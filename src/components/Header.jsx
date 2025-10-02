import Menu from "./Menu";

function Header({ }) {
    const menuItems = [
        {
            name: "Men Stores",
            list: [
                {
                    itemName: "EveryDay Sneakers",
                    url: "/profile/spinach",
                },
                { itemName: "Active Shoes", url: null },
                { itemName: "High Tops", url: null },
                { itemName: "Slip-Ons", url: null },
                { itemName: "Hiking Shoes", url: null },
                { itemName: "Sale", url: null },
                { itemName: "Shop All", url: null },
            ],
            type: "dropdown",
            index: 0,
        },
        {
            name: "Women",
            list: [
                { itemName: "Everyday Sneakers", url: null },
                { itemName: "Active Shoes", url: null },
                { itemName: "Flats", url: null },
                { itemName: "Slip-Ons", url: null },
                { itemName: "Hiking Shoes", url: null },
                { itemName: "Sale", url: null },
                { itemName: "Shop All", url: null },
            ],
            type: "dropdown",
            index: 1,
        },
        {
            name: "New Arrivals",
            list: [],
            type: "button",
            index: 2,
        },
        {
            name: "Sustainability",
            list: [
                { itemName: "Our Sustainability Strategy", url: null },
                { itemName: "How We Operate", url: null },
                { itemName: "What’s In A Footprint?", url: null },
                { itemName: "Regenerative Agriculture", url: null },
                { itemName: "Renewable Materials", url: null },
                { itemName: "Carbon Offsets", url: null },
                { itemName: "Responsible Energy", url: null },
            ],
            type: "dropdown",
            index: 3,
        },
    ];
    return (
        <div className="app-header">
            <Menu menuItems={menuItems} />
            <h3> All Birds </h3>
        </div>
    )
}

export default Header;