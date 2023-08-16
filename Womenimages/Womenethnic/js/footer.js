const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <a href="index.html"><img src="images/logo.png" class="logo" alt=""></a>
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title"><a href="mensMain.html">men</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                    <li><a href="#" class="footer-link">Boots</a></li>
                    <li><a href="#" class="footer-link">Casual</a></li>
                    <li><a href="#" class="footer-link">Sports</a></li>
                    <li><a href="#" class="footer-link">Sneakers</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title"><a href="womensMain.html">women</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                    <li><a href="#" class="footer-link">Boots</a></li>
                    <li><a href="#" class="footer-link">Casual</a></li>
                    <li><a href="#" class="footer-link">Sports</a></li>
                    <li><a href="#" class="footer-link">Sneakers</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title"><a href="kidsMain.html">kids</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                    <li><a href="#" class="footer-link">Boots</a></li>
                    <li><a href="#" class="footer-link">Casual</a></li>
                    <li><a href="#" class="footer-link">Sports</a></li>
                    <li><a href="#" class="footer-link">Sneakers</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">ABOUT US</p>
        <p class="info">Welcome to Shoetopia, where every step is a stylish adventure!🚀
            </p>

        <p class="info">At Shoetopia, we believe that shoes aren't just accessories; they're personality enhancers, mood lifters,
            and conversation starters! Whether you're a trendsetter, a comfort seeker, or a little bit of both, we've
            curated a magical collection that'll make your shoe dreams come true.</p>

            <p class="info"> Our mission? To put the pep in your step and the dazzle in your dance! From sleek stilettos that demand
            attention to cozy kicks that hug your feet like a warm hug, we've got it all. Explore our virtual shoe haven
            and embark on a journey to discover your sole-mate. Shoetopia - because life is too short for boring shoes!👠✨ 
        </p>
        <p class="info"><strong>Support Emails</strong> - help@shoetopia.com, customersupport@shoetopia.com</p>
        <p class="info"><strong>Telephone</strong> - 180 00 00 001, 180 00 00 002</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">© Copyright | Privacy notice | Terms of use</p>
    `;
}

createFooter();