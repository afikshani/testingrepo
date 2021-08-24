import './hello-world-buttun.css'

class HelloWorldButton {

    render() {
        const btn = document.createElement('button');
        btn.innerHTML = 'Hello World';
        btn.classList.add('hello-world-buttun')
        const body = document.querySelector('body');
        btn.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = "hello world";
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        body.appendChild(btn)
    }

}

export default HelloWorldButton;