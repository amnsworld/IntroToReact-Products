import React from "react";
import ReactDOM from "react-dom";
import Greeting from "components/Greeting";
import Products from "components/Products";
import Header from "components/Header";
import PromotionalImage from "components/PromotionalImage";
import 'css/reset.css';
import 'css/index.css';



const Footer = () => {
	return <footer>Footer!</footer>
}

const App = () => {

    const productArr = [
		{id: 1, name: 'Iphone 8', price: 200, imgpath:"products/iphone8.jpg"},
		{id: 2, name: 'Iphone 8', price: 200, imgpath:"products/iphone8.jpg"},
		{id: 3, name: 'Iphone 8', price: 200, imgpath:"products/iphone8.jpg"},
		{id: 4, name: 'Iphone 8', price: 200, imgpath:"products/iphone8.jpg"},
		{id: 5, name: 'Iphone 8', price: 200, imgpath:"products/iphone8.jpg"}
	]

	return(
        <>
			{/* This is an example comment */}
			<Header />
            <PromotionalImage />
            <Products data={productArr} />
			<Footer />
		</>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
