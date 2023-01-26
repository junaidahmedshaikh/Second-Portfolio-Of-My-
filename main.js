const toggleBtn = document.getElementById('nav-toggle')

toggleBtn.addEventListener('click', toggleNav)
function toggleNav() {
    console.log('Its Working',document.getElementById('navbar'))

    document.getElementById('navbar').classList.toggle('hidden')
}


// const narbarImageAbout = document.getElementById('#navbarImageAbout');
// const narbarImageSkills = document.getElementById('#navbarImageSkills');
// const narbarImageProject = document.getElementById('#navbarImageProject');
// const narbarImageContact = document.getElementById('#narbarImageContact');
// narbarImageContact = ` <a href="/contactPage/contactPage.html">
// <h2>Contact Me</h2>
// <img id="navbarImageContact" src="https://res.cloudinary.com/difvkvxuy/image/upload/v1673848123/portfolio%20Image/Screenshot_20230116_111300_gxwkcs.png"
//     alt="">
// </a>`;
const primaryHeadingOfHomepage = document.querySelector('.primary-heading-of-homepage');
const primaryHeadingOfHomepageText = document.createTextNode("Shaikh");
primaryHeadingOfHomepage.appendChild(primaryHeadingOfHomepageText);