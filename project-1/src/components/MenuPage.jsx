const MenuPage = () => {
    return(
        <main className="menu container">
            <div className="menu-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="menu-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="menu-shopping">
                    <p>Also Available On</p>
                </div>
                <div className="brand-icons">
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                    <img src="/images/amazon.png" alt="amazon-logo" />

                </div>

            </div>
            <div className="menu-image">
                <img src="/images/shoe_image.png" alt="menu-image" />
            </div>
        </main>
    )
}

export default MenuPage;