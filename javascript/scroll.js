export const scroll =  () => {
    window.addEventListener('scroll',() =>{
        const abountContent = document.querySelector('.about-content');
        const projects = document.querySelector('.carousel');
    
        const leftImagePosition = abountContent.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1;
    
        const projectsPosition = projects.getBoundingClientRect().top;
        const projectscreenPosition = window.innerHeight / 1;


    
        if(leftImagePosition < screenPosition){
            abountContent.classList.add('active');
        }else{
            abountContent.classList.remove('active');
        }
        if(projectsPosition < projectscreenPosition){
            projects.classList.add('active-projects');
        }else{
            projects.classList.remove('active-projects');
        }
    })
}