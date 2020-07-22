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

    const usersArr = [
		{id: 123, name: 'Alan Turing', color: '#ff0000'},
		{id: 456, name: 'Grace Hopper', color: '#0000ff'},
		{id: 789, name: 'Ada Lovelace', color: '#00ff00'}
	]

	return(
        <>
			{/* This is an example comment */}
			<Header />
            <PromotionalImage />
            <Products data={usersArr} />
			<Footer />
		</>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
