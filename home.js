document.addEventListener("DOMContentLoaded", function(){
    
    let home = document.querySelector(".nav-btn-home");
    let about = document.querySelector(".nav-btn-about");
    let skills = document.querySelector(".nav-btn-skills");
    let projects = document.querySelector(".nav-btn-projects");
    let cf = document.querySelector(".nav-btn-cf");
    let dark = document.querySelector(".nav-btn-dark");
    // localStorage.setItem("current","");
    // console.log(localStorage.getItem("current"));
    if(localStorage.getItem("current")==="" || localStorage.getItem("current") === null)
    {
        load_home();
    }
    if(localStorage.getItem("current")==="about")
    {
        load_about();
    }
    if(localStorage.getItem("current")==="skills")
    {
        load_skills();
    }
    if(localStorage.getItem("current")==="projects")
    {
        load_projects();
    }
    if(localStorage.getItem("current")==="cf")
    {
        load_cf();
    }
    
    home.addEventListener("click",load_home);
    about.addEventListener("click",load_about);
    skills.addEventListener("click",load_skills);
    projects.addEventListener("click",load_projects);
    cf.addEventListener("click",load_cf);
    dark.addEventListener("click",toggle_mode);
    function load_home(){
        localStorage.setItem("current","");
        document.querySelector("#toggle_home").style.display = 'block';
        document.querySelector("#toggle_about").style.display = 'none';
        document.querySelector("#toggle_cf").style.display = 'none';
        document.querySelector("#toggle_skills").style.display = 'none';
        document.querySelector("#toggle_projects").style.display = 'none';
    }
    function load_about(){
        localStorage.setItem("current","about");
        document.querySelector("#toggle_about").style.display = 'block';
        document.querySelector("#toggle_home").style.display = 'none';
        document.querySelector("#toggle_skills").style.display = 'none';
        document.querySelector("#toggle_projects").style.display = 'none';
        document.querySelector("#toggle_cf").style.display = 'none';
    }
    function load_skills(){
        localStorage.setItem("current","skills");
        document.querySelector("#toggle_skills").style.display = 'block';
        document.querySelector("#toggle_projects").style.display = 'none';
        document.querySelector("#toggle_about").style.display = 'none';
        document.querySelector("#toggle_home").style.display = 'none';
        document.querySelector("#toggle_cf").style.display = 'none';
    }
    function load_projects(){
        localStorage.setItem("current","projects");
        document.querySelector("#toggle_skills").style.display = 'none';
        document.querySelector("#toggle_projects").style.display = 'block';
        document.querySelector("#toggle_about").style.display = 'none';
        document.querySelector("#toggle_cf").style.display = 'none';
        document.querySelector("#toggle_home").style.display = 'none';
    } 
    function load_cf(){
        localStorage.setItem("current","cf");
        document.querySelector("#toggle_skills").style.display = 'none';
        document.querySelector("#toggle_projects").style.display = 'none';
        document.querySelector("#toggle_cf").style.display = 'block';
        document.querySelector("#toggle_about").style.display = 'none';
        document.querySelector("#toggle_home").style.display = 'none';
    }
    function toggle_mode(){
        if(document.querySelector(".nav-btn-dark").innerHTML=="Dark")
        {
            document.querySelector(".nav-btn-dark").innerHTML="Light";
            document.querySelectorAll(".card-display").forEach((element)=>{
                element.classList.replace("Light","Dark");
            })
            document.querySelector("#nav_bar").classList.replace("Dark","Light");
            document.querySelector("#about-info").style.color="white";
            document.querySelector("#home_heading").style.color="white";
            document.querySelector("#home_content").style.color="white";
            document.querySelector(".Heading").style.color="white";
            document.querySelector("#cf-text-area").style.color="white";
            document.querySelectorAll(".nav_list").forEach((element)=>{
                element.style.color="black";  
              });
        }
        else
        {
            document.querySelector(".nav-btn-dark").innerHTML="Dark";
            document.querySelectorAll(".card-display").forEach((element)=>{
                element.classList.replace("Dark","Light");
            })
            document.querySelector("#nav_bar").classList.replace("Light","Dark");
            document.querySelector("#home_heading").style.color="black";
            document.querySelector("#about-info").style.color="black";
            document.querySelector("#home_content").style.color="black";
            document.querySelector(".Heading").style.color="black";
            document.querySelector("#cf-text-area").style.color="black";
            document.querySelectorAll(".nav_list").forEach((element)=>{
              element.style.color="white";  
            });
        }
        }
// -----------------------------------End-of-navbar-----------------------------------------



    // console.log(document.querySelector(".project1-toggle").style.display);
    let project1 = document.querySelector("#project1-img");
    let project2 = document.querySelector("#project2-img");
    let project3 = document.querySelector("#project3-img");
    let clicked = false;
    project1.style.animationPlayState='paused';
    project2.style.animationPlayState='paused';
    project3.style.animationPlayState='paused';
    // console.log(project1);
    function click(project,p1,p2,p3)
    {
        project.addEventListener("click",()=>{   
            if(document.querySelector(".project"+p1+"-toggle").style.display=="" ||
               document.querySelector(".project"+p1+"-toggle").style.display=="none")
            {
                let project1_toggle = document.querySelectorAll((".project"+p1+"-toggle"));
                project1_toggle.forEach((element)=>{
                    element.style.display = 'block';
                });
                p2.style.animationPlayState='running';
                setTimeout(()=>{p2.style.display = 'none'},500);
                p3.style.animationPlayState='running';
                setTimeout(()=>{p3.style.display = 'none'},500);
                // project.style.animationPlayState='running';
                p2.style.cursor='default';
                p3.style.cursor='default';
                clicked=true;
                document.querySelector(".project"+p1+"-nohover").classList.add("none");
                // project1.style.pointerEvents = 'none';
                // p3.style.pointerEvents = 'none';
                // document.querySelector(".project-text").style.cursor='default';
            }
            else
            {
                let project1_toggle = document.querySelectorAll(".project"+p1+"-toggle");
                project1_toggle.forEach((element)=>{
                    element.style.display = 'none';
                });
                p2.style.animationPlayState='paused';
                p3.style.animationPlayState='paused';
                p2.style.display = 'block';
                p3.style.display = 'block';
                p2.style.cursor='pointer';
                p3.style.cursor='pointer';
                clicked=false;
                document.querySelector(".project"+p1+"-nohover").classList.remove("none");
                // project1.style.pointerEvents = 'auto';
                // project2.style.pointerEvents = 'auto';
                // document.querySelector(".project-text").style.cursor='default';
            }
        });
    }


    click(project1,"1",project2,project3);
    click(project2,"2",project1,project3);
    click(project3,"3",project2,project1);
    
    //-------------------------- End of Click Events of Project Tab-------------------------------------------------------------
    
    function hover(project, projectno){
        if(clicked==false)
        {
            project.addEventListener("mouseover",() =>{
                document.querySelector(".project"+projectno+"-hover").style.display = 'block';
                document.querySelector(".project"+projectno+"-hover").classList.add("hover");
                document.querySelector(".project"+projectno+"-hover").classList.remove("hover-out");
            })
            project.addEventListener("mouseout",() =>{
                document.querySelector(".project"+projectno+"-hover").classList.add("hover-out");
                document.querySelector(".project"+projectno+"-hover").classList.remove("hover");
                // document.querySelector(".project"+projectno+"-hover").style.display = 'none';
            })
        }
    }
    // console.log(project1+"hover");
    hover(project1,"1");
    hover(project2,"2");
    hover(project3,"3");




    document.querySelector("#cp-submit").addEventListener("click", event =>{
        event.preventDefault();
        // console.log(event);
        let cpHandle = document.querySelector("#cf-handle").value;
        // console.log(ccHandle)
            fetch('https://codeforces.com/api/user.info?handles='+cpHandle)
            .then((response) => response.json())
            .then((data) => 
            {
                document.querySelector("#codeforces-rating").innerHTML=data.result[0].rating;
                document.querySelector("#codeforces-rank").innerHTML=data.result[0].rank;
                document.querySelector("#codeforces-handle").innerHTML=data.result[0].handle;
                document.querySelector("#codeforces-name").innerHTML=data.result[0].firstName+" "+data.result[0].lastName;
                console.log(data);
            });
    })
});





