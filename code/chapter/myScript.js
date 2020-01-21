let body = document.getElementsByTagName('body')[0];
let canvas = document.getElementsByTagName('canvas')[0];
let btnColorPage = document.querySelector('#btn123');
let picturepanel = document.querySelector('.picturepanel');
let toolbar = document.querySelector('.toolbar');
btnColorPage.addEventListener('click', setTextColor);



function setTextColor(picker) {
    body.style.backgroundColor =  '#' + picker;
    canvas.style.backgroundColor =  '#' + picker;
    picturepanel.style.backgroundColor =  '#' + picker;
    toolbar.style.backgroundColor =  '#' + picker;

    localStorage.setItem('bodyBg', picker);
    localStorage.setItem('canvasBg', picker);
    localStorage.setItem('picturepanelBg', picker);
    localStorage.setItem('toolbarBg', picker);
}



/* if (localStorage.getItem('bodyBg') !==null) {
   let color = localStorage.getItem('bodyBg');
   body.style.backgroundColor = color;
}

if (localStorage.getItem('canvasBg') !==null) {
    let color1 = localStorage.getItem('canvasBg');
    canvas.style.backgroundColor = color1;
}

if (localStorage.getItem('picturepanelBg') !==null) {
    let color2 = localStorage.getItem('picturepanelBg');
    picturepanel.style.backgroundColor = color2;
}

if (localStorage.getItem('toolbarBg') !==null) {
    let color3 = localStorage.getItem('toolbarBg');
    toolbar.style.backgroundColor = color3; 
}

*/

