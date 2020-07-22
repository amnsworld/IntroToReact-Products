import React from 'react';
import test from 'img/products/iphone8.jpg';


const Product = ({name,price, imgpath}) => {
	
	
	const ip = "img/"+ imgpath;
	
	//console.log("ip : "+ ip);
	const sayHello = (event) => {
		alert(`${name} has been added to your cart`)
	}
	
	return (
		<>
				<article class="cat cat-index">
					<a href="#" class="product-box-anchor">
						<h3 class="center">{name}</h3>
						<img src={test} alt="Category image" />
						<button onClick={sayHello}>Add to cart</button>
					</a>
				</article>
		</>
	)
}
export default Product;
