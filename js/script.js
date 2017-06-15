document.addEventListener('DOMContentLoaded', function () {

        //drop down menu
        var submenu = document.querySelector('.submenu');

        submenu.classList.add('hidden');

        submenu.parentElement.addEventListener('mouseover', function () {
                submenu.classList.toggle('hidden');
        });

        submenu.parentElement.addEventListener('mouseout', function () {
                submenu.classList.toggle('hidden');
        });

        //gallery
        var box1 = document.querySelector(' #box1');
        var box2 = document.querySelector(' #box2');
        
        
        var description1 = box1.firstElementChild;


        var description2 = box2.firstElementChild;
  


        box1.addEventListener('mouseenter',function(){
                var description1 = box1.firstElementChild;

                description1.classList.toggle('hidden');
       
        });

        box1.addEventListener('mouseleave',function(){
                var description = box1.firstElementChild;

                description.classList.toggle('hidden');
       
        });

         box2.addEventListener('mouseenter',function(){
                var description = box2.firstElementChild;

                description.classList.toggle('hidden');
       
        });

        box2.addEventListener('mouseleave',function(){
                var description = box2.firstElementChild;

                description.classList.toggle('hidden');
       
        });



        //slider
        var slider = document.querySelector('.slider');
        var previous = document.querySelector('.arrow_left');
        var next = document.querySelector('.arrow_right');

        var sliderLis = slider.querySelectorAll('li');

        var index =0 ;

        next.addEventListener('click', function(){

                sliderLis[index].classList.add('hidden');
                index++;

                if(index > sliderLis.length-1){ //loop photos
                        index = 0;
                }

                sliderLis[index].classList.remove('hidden');

        });


        previous.addEventListener('click', function(){

                sliderLis[index].classList.add('hidden');
                index--;

                if(index < 0 ){ //loop photos
                        index = sliderLis.length-1
                }

                sliderLis[index].classList.remove('hidden');

        });


//calculator


var  list_arrows = document.querySelectorAll('.list_arrow');

var list_panels =  document.querySelectorAll('.list_panel');

[...list_panels].map(function(panel){ //by default list should be hidden
        panel.classList.add('hidden');
});

   [...list_arrows].map(function(arrow){
        arrow.addEventListener('click',function(){
                var list_panel = this.nextElementSibling;      
                  list_panel.classList.toggle('hidden');

        })
   });

var checkbox = document.querySelector('#transport');

        checkbox.addEventListener('click',function(event){
                event.preventDefault(event);
                this.previousElementSibling.classList.toggle('agree');       
        });


});