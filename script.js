let menuList = document.getElementById("menuList");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
}

function toggleClose(){
    menuList.style.maxHeight = "0px";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
}


// ===== SEE MORE PROJECTS =====
const seeMoreBtn = document.getElementById("seeMoreBtn");
const hiddenProjects = document.querySelectorAll(".hidden-project");

let isExpanded = false;

// make sure hidden projects are hidden on load
hiddenProjects.forEach(project => {
  project.style.display = "none";
});

seeMoreBtn.addEventListener("click", () => {
  hiddenProjects.forEach(project => {
    project.style.display = isExpanded ? "none" : "flex";
  });

  seeMoreBtn.innerHTML = isExpanded
    ? `See all projects <img src="assets/arrow_forward_21dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg">`
    : `<img src="assets/arrow_back_21dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg"> Show Less`;

  isExpanded = !isExpanded;
});
