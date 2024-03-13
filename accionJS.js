$('#recipeCarousel').carousel({
  interval: 8000
})

$('.carousel .carousel-item').each(function(){
    let minPerSlide = 3;
    let next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (let i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});



// ---------













// window.onload = function() {
//   let iframe = document.getElementById("miIframe");
//   let srcList = [
// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420737.33717124164!2d-56.69055552367023!3d-34.527963299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1b5bde5a8c331%3A0xd30682b55603bb96!2sArtes%20Marciales%20Inwha%20Canelones!5e0!3m2!1ses-419!2suy!4v1710074466736!5m2!1ses-419!2suy", 
// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420737.33717124164!2d-56.69055552367023!3d-34.527963299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959ff5d516de3bd5%3A0xd6482cdbc28a1da7!2sArtes%20marciales%20InWha!5e0!3m2!1ses-419!2suy!4v1710074826796!5m2!1ses-419!2suy", 
// "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13159.523325183545!2d-56.4065071067768!3d-34.455172813598566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1a5dee4a2d923%3A0xc4450b3c4ea6d47a!2sClub%20Social%2023%20De%20Marzo!5e0!3m2!1ses-419!2suy!4v1710074899527!5m2!1ses-419!2suy"];

//   // Escoge un src aleatorio de la lista
//   let randomSrc = srcList[Math.floor(Math.random() * srcList.length)];
  
//   // Establece el src del iframe
//   iframe.src = randomSrc;
// };