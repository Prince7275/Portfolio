const navlinks =document.querySelectorAll('header nav a');
const logolinks =document.querySelector('.logo');
const section =document.querySelectorAll('section');
const menuicon =document.querySelector('#menu-icon');
const navbar =document.querySelector('header nav');


menuicon.addEventListener('click',() =>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    });


const activepage = () =>{
    const header = document.querySelector('header');
    const barsbox = document.querySelector('.bars-box');
    header.classList.remove('active');
   setTimeout(() =>{
    header.classList.add('active');   
   },1100);
    navlinks.forEach(link =>{
        link.classList.remove('active');
    });
    
    barsbox.classList.remove('active');
   setTimeout(() =>{
    barsbox.classList.add('active');   
   },1100);
    
    section.forEach(section =>{
        section.classList.remove('active');
    });
    
     
};

 navlinks.forEach((link , idx) =>{
    link.addEventListener('click', () =>{
      if(!link.classList.contains('active')){
          activepage();
          link.classList.add('active');
            setTimeout(() =>{
             section[idx].classList.add('active');   
             },1100);
      }  
    }); 
 });

logolinks.addEventListener('click',()=>{
    if(!navlinks[0].classList.contains('active')){
        activepage();
        navlinks[0].classList.add('active');
        setTimeout(() =>{
             section[0].classList.add('active');   
             },1100);
    }
});

 // Close menu after clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                menuicon.classList.remove('bx-x');
				navbar.classList.remove('active');
            });
        });
        
		 // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && !menuicon.contains(e.target)) {
                 menuicon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        });
		
		
 window.addEventListener("DOMContentLoaded", () => {
    const barsBox = document.getElementById("barsBox");

    // Trigger reflow and then add 'active' class to play animation
    setTimeout(() => {
      barsBox.classList.add("active");
    }, 100); // Small delay ensures it's triggered after render
  });


const resumeBtn=document.querySelectorAll('.resume-button');
resumeBtn.forEach((button,idx) =>{
    button.addEventListener('click',() =>{
        const resumeDetail=document.querySelectorAll('.resume-detail');
        
        resumeBtn.forEach(button =>{
            button.classList.remove('active');
        });
        button.classList.add('active');
        
        resumeDetail.forEach(detail =>{
            detail.classList.remove('active');
        });
        resumeDetail[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgSlide = document.querySelector('.portfolio-box .portfolio-carousal .img-slide');
const portfolioDetails=document.querySelectorAll('.portfolio-detail');

let index = 0;
const maxIndex = 4; // assuming you have 5 images (0 to 4)

const activePortfolio = () => {
  // Slide each image 100% width with 2rem gap
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
   portfolioDetails.forEach(detail =>{
       detail.classList.remove('active');
   });
    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
  if (index < maxIndex) {
    index++;
      arrowLeft.classList.remove('disabled');
  }
    else{
        index=4;
        arrowRight.classList.add('disabled');
    }
     activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
      arrowRight.classList.remove('disabled');
  }
    else{
        index=0;
        arrowLeft.classList.add('disabled');
    }
        activePortfolio();
});


        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            alert('Right-click is disabled!');
        });

        document.addEventListener('keydown', function(e) {
            if (
                (e.ctrlKey && e.key === 'c') || 
                (e.ctrlKey && e.key === 'u') || 
                (e.ctrlKey && e.shiftKey && e.key === 'I') || 
                e.key === 'F12'
            ) {
                e.preventDefault();
                alert('This action is not allow to copy Source code!');
            }
        });




