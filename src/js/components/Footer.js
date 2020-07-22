import React from 'react';
import logo from 'img/common/amazon_logo.png';

const Footer = () => {
	return (
	<>
		<footer class="footer row">

            <ul class="navigation-list-footer">
                    <li class="nav-items"><a href="/" class="nav-item-links">Home</a></li>
                    <li class="nav-items"><a href="/" class="nav-item-links">Categories</a></li>
                    <li class="nav-items"><a href="/" class="nav-item-links">Products</a></li>
                    <li class="nav-items"><a href="/" class="nav-item-links">Registration</a></li>
                    <li class="nav-items"><a href="/" class="nav-item-links">Login</a></li>
            </ul>

            <ul class="navigation-list-footer">
                    <li class="nav-items"><a href="/" class="nav-item-links">Careers</a></li>
                    <li class="nav-items"><a href="/" class="nav-item-links">Sell on Amazon</a></li>
                    <li class="nav-items"><a href="/" class="nav-item-links">Gift Cards</a></li>
                    <li class="nav-items"><a href="/" class="nav-item-links">Customer Service</a></li>
                    <li class="nav-items"><a href="/" class="nav-item-links">Terms and Conditions</a></li>
            </ul>

            <section class="column">
                <article class="row social-media-logo-row">
                    <p><a href=""><img src="/img/common/instagram-logo.svg" alt="" class="social-media-logo-img" /></a></p>
                    <p><a href=""><img src="/img/common/facebook-logo.svg" alt="" class="social-media-logo-img" /></a></p>
                    <p><a href=""><img src="/img/common/twitter-logo.svg" alt="" class="social-media-logo-img" /></a></p>
                </article>
                <p class="center">Call: 1800-101-1010</p>
            </section>
        </footer>
	</>)
}

export default Footer;

