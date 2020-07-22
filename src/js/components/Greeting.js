import React from 'react';
import test from 'img/userDemoImg.jpg';

const Greeting = ({name}) => {
	return (
	<>
		<img src={test} alt="Just a test image" class="user-img"/>
		<h1>Hello, {name}!</h1>
	</>)
}

export default Greeting;