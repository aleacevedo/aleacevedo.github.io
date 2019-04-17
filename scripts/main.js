let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
let myButton = document.querySelector('button')

myHeading.textContent = 'Hello world!';

if(!localStorage.getItem('name')){
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool. ${storedName}`;
}

myButton.onclick = setUserName

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.png'){
        myImage.setAttribute('src', 'images/test2.jpg');
    } else{
        myImage.setAttribute('src', 'images/test.png')
    }
}

function setUserName(){
    var myName = prompt('Please entre your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool. ${myName}`;
}