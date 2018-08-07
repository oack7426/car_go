var Body = document.querySelector('body');

Body.addEventListener('keydown', function Go(e) {
    console.log(e.keyCode)
    switch (e.keyCode) {
        case 32:
            document.querySelector('img').style.right = "2000px"
    }
}, false)