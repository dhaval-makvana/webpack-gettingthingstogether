import KiwiImage from './kiwi-fruit.jpg';

function AddImage() {
    const image = document.createElement('img');
    image.alt = 'Kiwi';
    image.src = KiwiImage;
    image.width = 400;

    const body = document.querySelector('body');
    body.appendChild(image);
};

export default AddImage;