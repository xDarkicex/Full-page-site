       var header, logo, yPos;
    function yScroll() {
        header = document.getElementById('header');
        logo = document.getElementById('logo');
        nav = document.getElementById('nav');

        yPos = window.pageYOffset;

       if(yPos > 150) {
            header.style.height = "40px";
            header.style.paddingTop = "0px";
            header.style.background = "rgba(0,0,0,.9)";
 
 			logo.style.paddingTop = "5px";
 			nav.style.paddingTop = "15px";
        }

        else{
            header.style.height="95px";
            header.style.background = "rgba(0,0,0,.2)";
            logo.style.paddingTop = "35px"
 
            nav.style.paddingTop = "43px";

        }
    }
    window.addEventListener("scroll", yScroll);
