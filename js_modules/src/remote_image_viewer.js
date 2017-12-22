export default () => {
  const imageContainer = document.getElementById('image-container');
  const frame = document.createElement('div');
  frame.classList.add('image-frame');
  imageContainer.insertBefore(frame, imageContainer.firstChild);

  const image = document.createElement('img');
  image.src = 'http://lorempixel.com/400/400';
  frame.appendChild(image);
  image.onload = () => {
    image.classList.add('loaded');
  };
};
