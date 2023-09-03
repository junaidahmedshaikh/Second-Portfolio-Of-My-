const toggleBtn = document.getElementById('nav-toggle')

toggleBtn.addEventListener('click', toggleNav)
function toggleNav() {
    document.getElementById('navbar').classList.toggle('hidden')
}

// // Dark Mode javascript

// const darkNlightbtn = document.getElementsByClassName('darkmode');

// darkNlightbtn.addEventListener('change', darkMode);

// function darkMode(){
// document.body.classList.toggle('dark');
// }
// const primaryHeadingOfHomepage = document.querySelector('.primary-heading-of-homepage');
// const primaryHeadingOfHomepageText = document.createTextNode("Shaikh");
// primaryHeadingOfHomepage.appendChild(primaryHeadingOfHomepageText);

// const navbarNode = ` <div class="navbar-links">
// <a class="navbar-card" href="/index.html">
//     <h2>Home</h2>
//     <img id="navbarImageAbout" src=""
//         alt="">
// </a>
// <a class="navbar-card" href="/skillsPage/skillsPage.html">
//     <h2>Skills</h2>
//     <img id="navbarImageSkills" src="https://res.cloudinary.com/difvkvxuy/image/upload/v1673848120/portfolio%20Image/Screenshot_20230116_111227_law3nd.png"
//         alt="">
// </a>
// <a class="navbar-card" href="/projectPage/projectPage.html">
//     <h2>Project</h2>
//     <img id="navbarImageProject" src="https://res.cloudinary.com/difvkvxuy/image/upload/v1673848127/portfolio%20Image/Screenshot_20230116_110632_tqdsmb.png"
//         alt="">
// </a>
// <a class="navbar-card" href="/contactPage/contactPage.html">
//     <h2>Contact Me</h2>
//     <img id="navbarImageContact" src="https://res.cloudinary.com/difvkvxuy/image/upload/v1673848123/portfolio%20Image/Screenshot_20230116_111300_gxwkcs.png"
//         alt="">
// </a>
// </div>`;

// const navbar = document.getElementById('navbar');
// navbar.insertAdjacentHTML('afterbegin',navbarNode);


// Navigation Image Sourch
let navbarHomeImgScr = document.querySelector('.navbarHomeImgScr');
let navbarAboutImgScr = document.querySelector('.navbarAboutImgScr');
let navbarSkillImgScr = document.querySelector('.navbarSkillImgScr');
let navbarProjectImgSrc = document.querySelector('.navbarProjectImgSrc');
let navbarContImgSrc = document.querySelector('.navbarContactImgSrc');

console.log(navbarAboutImgScr)
// Adding Image Source in the variable
navbarHomeImgScr.src = `https://res.cloudinary.com/difvkvxuy/image/upload/v1691938485/portfolio%20Image/Navbar%20Image/Screenshot_2023-08-13_171510_ktbg9d.png`;
navbarAboutImgScr.src = `https://res.cloudinary.com/difvkvxuy/image/upload/v1691938486/portfolio%20Image/Navbar%20Image/Screenshot_2023-08-13_171851_bvwylk.png`;
navbarSkillImgScr.src = `https://res.cloudinary.com/difvkvxuy/image/upload/v1691938485/portfolio%20Image/Navbar%20Image/Screenshot_2023-08-13_171933_wwzmgv.png`;
navbarProjectImgSrc.src = `https://res.cloudinary.com/difvkvxuy/image/upload/v1691938486/portfolio%20Image/Navbar%20Image/Screenshot_2023-08-13_171917_aqakwt.png`;
navbarContImgSrc.src = `https://res.cloudinary.com/difvkvxuy/image/upload/v1691938485/portfolio%20Image/Navbar%20Image/Screenshot_2023-08-13_171948_iu50qs.png`;

// Putting Alternet Text
navbarHomeImgScr.alt = `Home Image Loading`;
navbarAboutImgScr.alt = `About Image Loading`;
navbarSkillImgScr.alt = `Skills Image Loading`;
navbarProjectImgSrc.alt = `Project Image Loading`;
navbarContactImgSrc.alt = `Contact Image Loading`;



/*
!!!!!
This code is created to display element's behavior. I'm not a JS expert so don't use it
!!!!!
*/

