var keyDivGlobal = '';

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    document.body.appendChild(newDiv);
}

document.addEventListener('keydown', function (event) {
    var keyDiv = document.getElementById('key');
    if (event.key === 'a') {
        keyDiv.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        keyDiv.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        keyDiv.style.backgroundColor = 'lightblue';
    } else if (event.key === 'q') {
        createNewDiv('purple');
    } else if (event.key === 'w') {
        createNewDiv('gray');
    } else if (event.key === 'e') {
        createNewDiv('brown');
    }
});
