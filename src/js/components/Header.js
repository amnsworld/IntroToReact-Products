import React from 'react';
import logo from 'img/common/amazon_logo.png';

const Heading = () => {
	return (
	<>
		<header class="head">
            <nav class="navigation-menu row" id="navigation-menu">
		
                <h1><a href="/"><img src={logo} alt="amazon webiste logo" class="amazon-logo" /></a></h1>
                <ul class="navigation-list row" id="nav-menu">
                    <li class="nav-items" id="nav-items"><a href="/" class="nav-item-links">Home</a></li>
                    <li class="nav-items" id="nav-items"><a href="/#category" class="nav-item-links">Categories</a></li>
                    <li class="nav-items" id="nav-items"><a href="/product/listAll" class="nav-item-links">Products</a></li>
                    <li class="nav-items" id="nav-items"><a href="/useraccount/registration" class="nav-item-links">Registration</a></li>
                    <li class="nav-items" id="nav-items"><a href="/useraccount/login" class="nav-item-links">Login</a></li>
                </ul>
                <h1><img src="/img/responsive-menu.png" alt="hamburger" class="hamburger-mobile-view" id="hamburger-mobile-view" /></h1>
            </nav>
        </header>
	</>)
}

export default Heading;