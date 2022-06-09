export const scroll =  () => {
    window.addEventListener('scroll',() =>{
        const leftImage = document.querySelector('.left');
        const projects = document.querySelector('.carousel');
    
        const leftImagePosition = leftImage.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1;
    
        const projectsPosition = projects.getBoundingClientRect().top;
        const projectscreenPosition = window.innerHeight / 1;


    
        if(leftImagePosition < screenPosition){
            leftImage.classList.add('active');
        }else{
            leftImage.classList.remove('active');
        }
        if(projectsPosition < projectscreenPosition){
            projects.classList.add('active-projects');
        }else{
            projects.classList.remove('active-projects');
        }
    })
}