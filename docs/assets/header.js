    document.addEventListener("DOMContentLoaded", function() {
        var navbar = document.querySelector(".navbar-background-container");
        window.addEventListener("scroll", function() {
            // window.scrollY > 13vh (13% of the viewport height)
            let viewport_height = window.innerHeight;
            let scrollY = 13 * viewport_height / 100;
            if (window.scrollY > scrollY) {
                navbar.classList.add("scrolled");
                document.querySelectorAll('.hover-underline-animation').forEach(item => {
                    item.classList.remove('white-underline');
                    item.classList.add('black-underline');
                });
                
            } else {
                navbar.classList.remove("scrolled");
                document.querySelectorAll('.hover-underline-animation').forEach(item => {
                    item.classList.remove('black-underline');
                    item.classList.add('white-underline');
                });
            }
        });
    });
