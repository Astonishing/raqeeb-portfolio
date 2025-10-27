    const card = document.getElementById("card");
     
      const projectsBtn =
        document.querySelector('.card-icons a[href*="youtube"]') ||
        document.querySelector('.card-icons .icon-container');
      
      const intro = document.querySelector(".intro");
      const pfp = document.querySelector(".pfp");
      const icons = document.querySelector(".card-icons");
      
      let expanded = false;
      
      
      if (projectsBtn) {
        projectsBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (!expanded) {
            
            card.classList.add("expanded");
            intro.style.opacity = 0;
            pfp.style.opacity = 0;
            setTimeout(() => {
              intro.style.display = "none";
              pfp.style.display = "none";
              document.querySelector(".projects-section").style.display = "block";
              setTimeout(() => {
                document.querySelector(".projects-section").style.opacity = 1;
              }, 100);
            }, 300);
            expanded = true;
          } else {
            
            document.querySelector(".projects-section").style.opacity = 0;
            setTimeout(() => {
              document.querySelector(".projects-section").style.display = "none";
              intro.style.display = "block";
              pfp.style.display = "block";
              setTimeout(() => {
                intro.style.opacity = 1;
                pfp.style.opacity = 1;
              }, 100);
            }, 300);
            card.classList.remove("expanded");
            expanded = false;
          }
        });
      } else {
        console.warn("projectsBtn not found — check the selector or add an id/data attribute to the Projects link.");
      }
      
      document.addEventListener("mousemove", (e) => {
        if (expanded) return; 
        const x = e.clientX - window.innerWidth / 2;
        const y = e.clientY - window.innerHeight / 2;
        const rotateX = -(y / window.innerHeight) * 70;
        const rotateY = (x / window.innerWidth) * 70;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
      });

      document.addEventListener("mouseleave", () => {
        if (expanded) return;
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });



      // === PROJECT FILTER  ===
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});
