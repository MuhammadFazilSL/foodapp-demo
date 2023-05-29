
//const navToggler = document.querySelector   (".navbar-nav");

//navToggler.addEventListener("click",() =>{
 //   const listMenu = document.querySelector(".navbarhidden")
  //  alert("fazil");
    //    listMenu.classList.toggle("hidden");
//});









function menuActive() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item>a")

    window.addEventListener("scroll",() =>{
        let current =""
        sections.forEach((section) =>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop-sectionHeight/3) {
                current = section.getAttribute("id");
               
            }
        });
        navLinks.forEach((li) => {
            li.classList.remove("active")
           
            if (current == li.getAttribute("href").split("#")[1]) {
                li.classList.add("active");
            }
        });

    });
}


menuActive();

