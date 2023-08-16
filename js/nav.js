const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="home.html"><img src="images/logo.jpeg" class="brand-logo" alt=""></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, categories">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="images/profile logo.png" alt=""></a>
                <a href="#"><img src="images/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container menu">
            <li class="link-item"><a href="home.html" class="link">home</a></li>
            <li class="link-item dropdown"><a href="womenmain.html" class="link">women</a><div class="dropdown-content">
            <a href="womensubcat1.html">Casuals</a>
            <a href="womensubcat6.html">Ethnic Wear</a>
            <a href="womensubcat5.html">Formal Shoes</a>
            <a href="womensubcat4.html">Flip-Flops</a>
            <a href="womensubcat2.html">Party Wear</a>
            <a href="404.html">Sneakers</a>
            <a href="womensubcat3.html">Sports shoes</a>
        </div></li>
            <li class="link-item dropdown"><a href="mensMain.html" class="link">men</a><div class="dropdown-content">
            <a href="">Boots</a>
            <a href="mensubcat1.html">Casuals</a>
            <a href="mensubcat2.html">Formal Shoes</a>
            <a href="mensubcat4.html">Sneakers</a>
            <a href="mensubcat.html">Sports shoes</a>
            <a href="mensubcat3.html">Boots</a>
          </div></li>
            <li class="link-item dropdown"><a href="#" class="link">kids</a><div class="dropdown-content">
            <a href="404.html">Casuals</a>
            <a href="404.html">Ethnic Wear</a>
            <a href="404.html">Formal Shoes</a>
            <a href="404.html">Flip-Flops</a>
            <a href="404.html">Party Wear</a>
            <a href="404.html">Sneakers</a>
            <a href="404.html">Sports shoes</a>
          </div></li>
            <li class="link-item"><a href="" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();