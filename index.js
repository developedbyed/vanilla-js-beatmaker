window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];
  
  // also press keys to play music, possibility to refactor the play sound part too since it's repeted. See the comment at the botton for a possible solution coz I don't want to touch further your beautiful code :D
  document.addEventListener("keydown", function (event) {
    const getKey = event.which;
    const createKeys = [68, 70, 71, 72, 74, 75]; // key codes for d f g h j k
    const getKeyIndex = createKeys.indexOf(getKey);
    if (createKeys.includes(getKey)) {
      sounds[getKeyIndex].currentTime = 0;
      sounds[getKeyIndex].play();
      createBubble(getKeyIndex);
    }
  });
  
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});

// window.addEventListener("load", () => {
//   const sounds = document.querySelectorAll(".sound");
//   const pads = document.querySelectorAll(".pads div");
//   const visual = document.querySelector(".visual");
//   const colors = [
//     "#60d394",
//     "#d36060",
//     "#c060d3",
//     "#d3d160",
//     "#606bd3",
//     "#60c2d3"
//   ];

//   const createBubble = index => {
//     //Create bubbles
//     const bubble = document.createElement("div");
//     visual.appendChild(bubble);
//     bubble.style.backgroundColor = colors[index];
//     bubble.style.animation = `jump 1s ease`;
//     bubble.addEventListener("animationend", function () {
//       visual.removeChild(this);
//     });
//   };

//   const playSound = index => {
//     sounds[index].currentTime = 0;
//     sounds[index].play();
//     createBubble(index);
//   };

//   document.addEventListener("keydown", function (event) {
//     const getKey = event.which;
//     const createKeys = [68, 70, 71, 72, 74, 75]; // key codes for d f g h j k
//     const getKeyIndex = createKeys.indexOf(getKey);
//     if (createKeys.includes(getKey)) {
//       playSound(getKeyIndex);
//     }
//   });

//   pads.forEach((pad, index) => {
//     pad.addEventListener("click", function() {
//       playSound(index);
//     });
//   });

// });


