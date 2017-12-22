import big1 from './assets/big-1.jpg';
import big2 from './assets/big-2.jpg';
import small1 from './assets/small-1.jpg';
import small2 from './assets/small-2.jpg';

const images = [small1, small2, big1, big2];

export default () => {
  const imageContainer = document.getElementById('image-container');
  for (let i = 0; i < images.length; i += 1) {
    const image = document.createElement('img');
    image.src = images[i];
    imageContainer.insertBefore(image, imageContainer.firstChild);
    image.onload = () => {
      image.classList.add('loaded');
    };
  }
};
