document.addEventListener('DOMContentLoaded', function() {    
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {        
        link.addEventListener('click', function(e) {            
            e.preventDefault();            
            const targetId = this.getAttribute('href');            
            const targetElement = document.querySelector(targetId);            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({                
                top: targetPosition,                
                behavior: 'smooth'            
            });        
        });    
    });
});