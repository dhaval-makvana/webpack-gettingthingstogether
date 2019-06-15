import KiwiImage from './kiwi-fruit.jpg';

function AddImage() {
    const image = document.createElement('img');
    image.alt = 'Kiwi';
    image.src = KiwiImage;
    image.width = 400;

    const imageDIV = document.getElementById('image');
    imageDIV.appendChild(image);
};

export default AddImage;