window.addEventListener('load',  function() {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads >  div');
    const spans = document.querySelectorAll('.pads .letter');
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    const letters = [
        "F",
        "G",
        "H",
        "J",
        "K",
        "L"
    ];
   
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            active(index);;
        })
    });

    addEventListener('keyup', function(e) {
        const letter = e.key.toUpperCase();
        if (letters.includes(letter)) {
            const index = letters.indexOf(letter);
            active(index);
        }
    });

    const active = index => {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubbles(index);
    }

    const createBubbles = index => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump${spans[index].innerHTML} 1s ease`;
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };
});