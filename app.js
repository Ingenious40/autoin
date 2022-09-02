var active = document.getElementById('.active');
function active(){
    for(let i = 0; i < menu.length; i++){
        menu[i].addEventListener('click', function(){
            let menubtn = document.querySelectorAll('.active');
            menubtn[0].classname = menubtn.classname.replace, '.active';
            this.classname += '.active';
        })
    }
}