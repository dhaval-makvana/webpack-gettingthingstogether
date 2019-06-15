import HelloWorld from './hello-world';
import AddImage from './add-image';
import HelloWorldButton from './components/HelloWorldButton/HelloWorldButton';

HelloWorld();
AddImage();
const helloWorldButton =  new HelloWorldButton();
helloWorldButton.render();