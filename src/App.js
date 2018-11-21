import React, {Component} from 'react';
import SliderComponent from "./ui_components/SliderComponent";
import NavBarComponent from "./class_components/NavBarComponent";
import TopProductFeatures from "./class_components/TopProductFeatures";
import ShopNowComponent from "./ui_components/ShopNowComponent"
import TopProductVideoComponent from "./ui_components/TopProductVideoComponent"
import AllProductsPresentationComponent from "./ui_components/AllProductsPresentationComponent"
import ProductsSectionComponent  from "./class_components/ProductsSectionComponent"
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav>
                    <NavBarComponent/>
                </nav>
                <header className="App-header">
                    <SliderComponent/>
                </header>
                <section>
                    <TopProductFeatures/>
                    <ShopNowComponent title={'Buy Now Phantom 3 Professinonal offer an immersive, fun flying experience.'}/>
                    <TopProductVideoComponent title={'THE VIEW OF THE WORLD WITH SMART WATCH'}/>
                </section>
                {/*<section>*/}
                    {/*<StorePresentationAdvantages/>*/}
                {/*</section>*/}
                <section>
                    <AllProductsPresentationComponent/>
                </section>
                <section>
                    <ProductsSectionComponent/>
                </section>
                {/*<section>*/}
                    {/*<FastOrderComponent/>*/}
                {/*</section>*/}
                {/*<footer>*/}
                    {/*<Footer/>*/}
                {/*</footer>*/}
            </div>
    );
    }
    }

    export default App;
