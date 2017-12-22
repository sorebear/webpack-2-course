import './styles/base.css';
import './styles/image_frame.css';
import './styles/image_viewer.css';
import sum from './sum';

const total = sum(11, 5);
console.log(total);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
document.body.appendChild(buttonContainer);

// Button 1
const localButton = document.createElement('button');
localButton.innerText = 'View Local Gallery';
localButton.onclick = () => {
  System.import('./local_image_viewer').then((module) => {
    module.default();
  });
};

buttonContainer.appendChild(localButton);

// Button 2
const remoteButton = document.createElement('button');
remoteButton.innerText = 'View Remote Gallery';
remoteButton.onclick = () => {
  System.import('./remote_image_viewer').then((module) => {
    module.default();
  });
};

buttonContainer.appendChild(remoteButton);

// ImageContainer
const imageContainer = document.createElement('div');
imageContainer.id = 'image-container';
document.body.appendChild(imageContainer);
