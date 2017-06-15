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
                }innerHTML

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

var cost1 = 0;
var cost2 = 0;
var cost3 = 0;
var cost4 = 0;

var summary = document.querySelector('.sum');

var checkbox = document.querySelector('#transport');

        checkbox.addEventListener('click',function(event){
                event.preventDefault(event);

                if(this.previousElementSibling.className.indexOf('agree')){
                        this.previousElementSibling.classList.add('agree');   
                        cost4 = parseInt(this.dataset.transportPrice);
                              
                }else{
                       this.previousElementSibling.classList.remove('agree');  
                       cost4 =0;
                       
                }

                summary.innerText = cost1 + cost2 + cost3 + cost4;   

        });
        
var chairs = document.querySelectorAll('.chairs_list li');




        [...chairs].map(function(chair){
                chair.addEventListener('click', function(){
                        var your_chair = document.querySelector('.panel_left  h4');
                        var chair_value = document.querySelector('.title_value');
                       // console.log(chair_value);
                                your_chair.innerText = this.innerText;
                                chair_value.innerText = this.dataset.price;
                                cost1 = parseInt(this.dataset.price);
                                summary.innerText = cost1 + cost2 + cost3 + cost4;
                })
        });

var colors = document.querySelectorAll('.colors_list li');
        [...colors].map(function(color){
                color.addEventListener('click', function(){
                        var your_color = document.querySelector('.panel_left .color');
                        var color_value = document.querySelector('.panel_right .color_value');
                                your_color.innerText = this.innerText;
                                color_value.innerText =  this.dataset.price;
                                cost2 = parseInt(this.dataset.price);
                                summary.innerText = cost1 + cost2 + cost3 + cost4;
                              
                })             

        });

var materials = document.querySelectorAll('.material_list li');

        [...materials].map(function(material){
                material.addEventListener('click', function(){
                        var your_material = document.querySelector('.panel_left .pattern');
                        var material_value = document.querySelector('.panel_right .pattern_value');
                                your_material.innerText = this.innerText;
                                material_value.innerText = this.dataset.price;
                                cost3 = parseInt(this.dataset.price);

                                summary.innerText = cost1 + cost2 + cost3 + cost4;   
                })
        });
                

});