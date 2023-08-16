const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="index.html"><img src="images/logo.png" class="brand-logo" alt=""></a>
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
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item dropdown"><a href="womensMain.html" class="link">women</a><div class="dropdown-content">
            <a href="#">Casuals</a>
            <a href="#">Ethnic Wear</a>
            <a href="#">Formal Shoes</a>
            <a href="#">Flip-Flops</a>
            <a href="#">Party Wear</a>
            <a href="#">Sneakers</a>
            <a href="#">Sports shoes</a>
        </div></li>
            <li class="link-item dropdown"><a href="mensMain.html" class="link">men</a><div class="dropdown-content">
            <a href="menBoots.html">Boots</a>
            <a href="menCasuals.html">Casuals</a>
            <a href="menFormal.html">Formal Shoes</a>
            <a href="menSneakers.html">Sneakers</a>
            <a href="menRunning.html">Sports shoes</a>
          </div></li>
            <li class="link-item dropdown"><a href="#" class="link">kids</a><div class="dropdown-content">
            <a href="#">Casuals</a>
            <a href="#">Ethnic Wear</a>
            <a href="#">Formal Shoes</a>
            <a href="#">Flip-Flops</a>
            <a href="#">Party Wear</a>
            <a href="#">Sneakers</a>
            <a href="#">Sports shoes</a>
          </div></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();