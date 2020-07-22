import React from 'react';
import test from 'img/products/iphone8.jpg';


const ProductDescription = ({name,price, imgpath}) => {
	
	
	const ip = "img/"+ imgpath;
	
	//console.log("ip : "+ ip);
	const sayHello = (event) => {
		alert(`${name} has been added to your cart`)
	}
	
	return (
		<>
				<article class="cat cat-index">
					<a href="product/listAll" class="product-box-anchor">
						<h3 class="center">{name}</h3>
						<img src={test} alt="Category image" />
						<button onClick={sayHello}>Add to cart</button>
					</a>
				</article>
		</>
	)
}

const Products = ({data}) => {
    // Mapped elements MUST have a unique "key" attribute
    const productsArr = data.map(prod => <ProductDescription key={prod.id} name={prod.name} price={prod.price} imgpath={prod.imgpath} />)
    
	return (
        <main>
			<section class="cat_section" id="category">
				<h2 class="">Categories</h2>
				<div class="row">
					{productsArr}
				</div>
			</section>

        </main>
    )
}



export default Products;