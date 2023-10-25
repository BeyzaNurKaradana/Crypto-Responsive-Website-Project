var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
          });
        }


        document.addEventListener("DOMContentLoaded", function () {
          const select = document.querySelector("select");
          const options = select.querySelectorAll("option");
        
          options.forEach((option) => {
            const imageSrc = option.getAttribute("data-image");
            if (imageSrc) {
              const image = document.createElement("img");
              image.setAttribute("src", imageSrc);
              option.insertBefore(image, option.firstChild);
            }
          });
        });