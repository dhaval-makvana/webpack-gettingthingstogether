// import './HelloWorldButton.css';
import './HelloWorldButton.scss';

class HelloWorldButton {

    buttonCSSClass = 'hello-world-button';

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World!';
        button.classList.add(this.buttonCSSClass);
        const buttonDIV = document.getElementById('hello-world-button');
        button.onclick = function() {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world paragragh TEXT!';
            p.classList.add('hello-world-text');
            buttonDIV.appendChild(p);
        };
        buttonDIV.appendChild(button);
    }
}

export default HelloWorldButton;