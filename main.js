let myImage = document.querySelector('img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'cutecat1.jpg') {
        myImage.setAttribute ('src', 'cutecat2.jpg');
    } else {
        myImage.setAttribute ('src', 'cutecat1.jpg');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Cute cats are cool, ' + myName;
}
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cute cats are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
