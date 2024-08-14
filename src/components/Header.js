import './header.css' 

import bag from "./shopping-bag-line-icon-on-black-background-vector-26849303.jpg"
export default function header(){
    return(
    <header>
            <div className='head'>
                <img src={bag} alt='' />
                Fashno
            </div>
<nav className='navbar'>
    <u1 className='list'>
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact us</li>
    </u1>
</nav>
</header>
    );
}