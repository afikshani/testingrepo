import Lion from './lion.jpeg'

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Lion';
    img.width = 500;
    img.src = Lion;
    const body = document.querySelector('body');
    body.appendChild(img)
}



export default addImage;