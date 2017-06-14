document.addEventListener('DOMContentLoaded', function(){

    var submenu = document.querySelector('.submenu');

    submenu.classList.add('hidden');

    submenu.parentElement.addEventListener('mouseover',function(){
            submenu.classList.remove('hidden');
            submenu.classList.add('show_list');
    });

    submenu.parentElement.addEventListener('mouseout',function(){
            submenu.classList.remove('show_list');
            submenu.classList.add('hidden');
    });


});
