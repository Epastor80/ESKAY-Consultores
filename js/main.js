const app = document.getElementById('typewriter');

const typewriter = new Typewriter (app, {
    loop:true,
    delay:75
});

typewriter
.typeString('ESKAY CONSULTORES!')
.pauseFor(200)
.start();