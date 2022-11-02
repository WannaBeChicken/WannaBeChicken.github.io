document.addEventListener("DOMContentLoaded", function(){
    
    let home = document.querySelector(".nav-btn-home");
    let about = document.querySelector(".nav-btn-about");
    let skills = document.querySelector(".nav-btn-skills");
    let projects = document.querySelector(".nav-btn-projects");

    console.log(localStorage.getItem("current"));
    if(localStorage.getItem("current")=="")
    {
        load_home();
    }
    if(localStorage.getItem("current")=="about")
    {
        load_about();
    }
    if(localStorage.getItem("current")=="skills")
    {
        load_skills();
    }
    if(localStorage.getItem("current")=="projects")
    {
        load_projects();
    }
    home.addEventListener("click",load_home);
    about.addEventListener("click",load_about);
    skills.addEventListener("click",load_skills);
    projects.addEventListener("click",load_projects);
    function load_home(){
        localStorage.setItem("current","");
        document.querySelector("#toggle_home").style.display = 'block';
        document.querySelector("#toggle_about").style.display = 'none';
        document.querySelector("#toggle_skills").style.display = 'none';
        document.querySelector("#toggle_projects").style.display = 'none';
    }
    function load_about(){
        localStorage.setItem("current","about");
        document.querySelector("#toggle_about").style.display = 'block';
        document.querySelector("#toggle_home").style.display = 'none';
        document.querySelector("#toggle_skills").style.display = 'none';
        document.querySelector("#toggle_projects").style.display = 'none';
    }
    function load_skills(){
        localStorage.setItem("current","skills");
        document.querySelector("#toggle_skills").style.display = 'block';
        document.querySelector("#toggle_projects").style.display = 'none';
        document.querySelector("#toggle_about").style.display = 'none';
        document.querySelector("#toggle_home").style.display = 'none';
    }
    function load_projects(){
        localStorage.setItem("current","projects");
        document.querySelector("#toggle_skills").style.display = 'none';
        document.querySelector("#toggle_projects").style.display = 'block';
        document.querySelector("#toggle_about").style.display = 'none';
        document.querySelector("#toggle_home").style.display = 'none';
    } 

// -----------------------------------End-of-navbar-----------------------------------------



    // console.log(document.querySelector(".project1-toggle").style.display);
    let check1=false;
    let project1 = document.querySelector("#project1-img");
    let project2 = document.querySelector("#project2-img");
    let project3 = document.querySelector("#project3-img");
    console.log(project1);
    project1.addEventListener("click",()=>{   
        if(document.querySelector(".project1-toggle").style.display=="" ||
           document.querySelector(".project1-toggle").style.display=="none")
        {
            let project1_toggle = document.querySelectorAll(".project1-toggle");
            project1_toggle.forEach((element)=>{
                element.style.display = 'block';
            });
            project2.style.display = 'none';
            // project2.style.pointerEvents = 'none';
            // project3.style.pointerEvents = 'none';
            project3.style.display = 'none';
            project2.style.cursor='default';
            project3.style.cursor='default';
            // document.querySelector(".project-text").style.cursor='default';
        }
        else
        {
            let project1_toggle = document.querySelectorAll(".project1-toggle");
            project1_toggle.forEach((element)=>{
                element.style.display = 'none';
            });
            // project2.style.pointerEvents = 'auto';
            // project3.style.pointerEvents = 'auto';
            project2.style.display = 'block';
            project3.style.display = 'block';
            project2.style.cursor='pointer';
            project3.style.cursor='pointer';
            // document.querySelector(".project-text").style.cursor='default';
        }
    });
    project2.addEventListener("click",() =>{
        if(document.querySelector(".project2-toggle").style.display=="" ||
           document.querySelector(".project2-toggle").style.display=="none")
           {
                let project2_toggle = document.querySelectorAll(".project2-toggle");
                project2_toggle.forEach((element)=>{
                    element.style.display = 'block';
                });
                project1.style.display = 'none';
                project3.style.display = 'none';
                project1.style.cursor='default';
                project3.style.cursor='default';
           }
           else
           {
                let project2_toggle = document.querySelectorAll(".project2-toggle");
                project2_toggle.forEach((element)=>{
                    element.style.display = 'none';
                });
                project1.style.display = 'block';
                project3.style.display = 'block';
                project1.style.cursor='pointer';
                project3.style.cursor='pointer';
            
           }
        })
    project3.addEventListener("click",() =>{
        if(document.querySelector(".project3-toggle").style.display=="" ||
           document.querySelector(".project3-toggle").style.display=="none")
           {
                let project3_toggle = document.querySelectorAll(".project3-toggle");
                project3_toggle.forEach((element)=>{
                    element.style.display = 'block';
                });
                project1.style.display = 'none';
                project2.style.display = 'none';
                project1.style.cursor='default';
                project2.style.cursor='default';
           }
           else{
                let project3_toggle = document.querySelectorAll(".project3-toggle");
                project3_toggle.forEach((element)=>{
                    element.style.display = 'none';
                });
                project1.style.display = 'block';
                project2.style.display = 'block';
                project1.style.cursor='pointer';
                project2.style.cursor='pointer';
           }
    })
});
