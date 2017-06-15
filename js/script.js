document.addEventListener('DOMContentLoaded', function () {

        //menu event
        var submenu = document.querySelector('.submenu');

        submenu.classList.add('hidden');

        submenu.parentElement.addEventListener('mouseover', function () {
                submenu.classList.toggle('hidden');
        });

        submenu.parentElement.addEventListener('mouseout', function () {
                submenu.classList.toggle('hidden');
        });

        //gallery event
        var box_description_background = document.querySelectorAll('.box_description_background');
        // console.log(box_description_background);

        for (var i = 0; i < box_description_background.length; i++) {

                box_description_background[i].addEventListener('mouseover',function(event){                
                        this.classList.toggle('hidden');
                      //  this.firstElementChild.classList.toggle('hidden');
                        console.log('box');
                         
                });

                box_description_background[i].addEventListener('mouseout', function (event) {
                    // this.classList.toggle('hidden');
                   //  this.firstElementChild.classList.toggle('hidden');
                     console.log('out');

                });
        }


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


});