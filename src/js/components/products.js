import React from 'react';
import test from 'img/userDemoImg.jpg';


const ProductDescription = ({name, color}) => {
	
	const style = {
		color: '#ffffff',
		textAlign: 'center',
		backgroundColor: color
	}
	
	const sayHello = (event) => {
		alert(`Hello, ${name}`)
	}
	
	return (
		<article className="hello" style={style}>
			<h1 onClick={sayHello}>Hello, {name}</h1>
			<img src={test} alt="Just a test image" class="user-img"/>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odit assumenda dolore similique enim. Soluta dolore dicta temporibus illo. Nisi nam soluta cupiditate non laborum facilis sed necessitatibus blanditiis impedit.</p>
		</article>
	)
}

const Products = ({data}) => {
    // Mapped elements MUST have a unique "key" attribute
    const productsArr = data.map(prod => <ProductDescription key={prod.id} name={prod.name} color={prod.color} />)
    
	return (
        <main>
            {productsArr}
        </main>
    )
}



export default Products;