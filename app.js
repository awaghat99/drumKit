// sounds

let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

let boomKey = document.getElementById("boomkey");
let clapKey = document.getElementById("clapkey");
let hihatKey = document.getElementById("hihatkey");
let kickKey = document.getElementById("kickkey");
let openhatKey = document.getElementById("openhatkey");
let rideKey = document.getElementById("ridekey");
let snareKey = document.getElementById("snarekey");
let tinkKey = document.getElementById("tinkkey");
let tomKey = document.getElementById("tomkey");

document.addEventListener("keypress", (keyValue) => {
    if (keyValue.key == "a") {
        boomKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
        boom.pause();
        boom.currentTime = 0;
        boom.play();
        setTimeout(() => {
            boomKey.style.backgroundColor = "#193757";
        }, 200);
    } else if (keyValue.key == "s") {
        clapKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
        clap.pause();
        clap.currentTime = 0;
        clap.play();
        setTimeout(() => {
            clapKey.style.backgroundColor = "#193757";
        }, 200);
    } else if (keyValue.key == "d") {
        hihatKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
        hihat.pause();
        hihat.currentTime = 0;
        hihat.play();
        setTimeout(() => {
            hihatKey.style.backgroundColor = "#193757";
        }, 200);
    } else if (keyValue.key == "f") {
        kickKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
        kick.pause();
        kick.currentTime = 0;
        kick.play();
        setTimeout(() => {
            kickKey.style.backgroundColor = "#193757";
        }, 200);
    } else if (keyValue.key == "g") {
        openhatKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
        setTimeout(() => {
            openhatKey.style.backgroundColor = "#193757";
        }, 200);
    } else if (keyValue.key == "h") {
        rideKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
        ride.pause();
        ride.currentTime = 0;
        ride.play();
        setTimeout(() => {
            rideKey.style.backgroundColor = "#193757";
        }, 200);
    } else if (keyValue.key == "j") {
        snareKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
        snare.pause();
        snare.currentTime = 0;
        snare.play();
        setTimeout(() => {
            snareKey.style.backgroundColor = "#193757";
        }, 200);
    } else if (keyValue.key == "k") {
        tinkKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
        tink.pause();
        tink.currentTime = 0;
        tink.play();
        setTimeout(() => {
            tinkKey.style.backgroundColor = "#193757";
        }, 200);
    } else if (keyValue.key == "l") {
        tomKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
        tom.pause();
        tom.currentTime = 0;
        tom.play();
        setTimeout(() => {
            tomKey.style.backgroundColor = "#193757";
        }, 200);
    }
});

boomKey.addEventListener("click", () => {
    boomKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
    boom.pause();
    boom.currentTime = 0;
    boom.play();
    setTimeout(() => {
        boomKey.style.backgroundColor = "#193757";
    }, 200);
});

clapKey.addEventListener("click", () => {
    clapKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
    clap.pause();
    clap.currentTime = 0;
    clap.play();
    setTimeout(() => {
        clapKey.style.backgroundColor = "#193757";
    }, 200);
});

hihatKey.addEventListener("click", () => {
    hihatKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
    hihat.pause();
    hihat.currentTime = 0;
    hihat.play();
    setTimeout(() => {
        hihatKey.style.backgroundColor = "#193757";
    }, 200);
});

kickKey.addEventListener("click", () => {
    kickKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
    kick.pause();
    kick.currentTime = 0;
    kick.play();
    setTimeout(() => {
        kickKey.style.backgroundColor = "#193757";
    }, 200);
});

openhatKey.addEventListener("click", () => {
    openhatKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
    setTimeout(() => {
        openhatKey.style.backgroundColor = "#193757";
    }, 200);
});

rideKey.addEventListener("click", () => {
    rideKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
    ride.pause();
    ride.currentTime = 0;
    ride.play();
    setTimeout(() => {
        rideKey.style.backgroundColor = "#193757";
    }, 200);
});

snareKey.addEventListener("click", () => {
    snareKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
    snare.pause();
    snare.currentTime = 0;
    snare.play();
    setTimeout(() => {
        snareKey.style.backgroundColor = "#193757";
    }, 200);
});

tinkKey.addEventListener("click", () => {
    tinkKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
    tink.pause();
    tink.currentTime = 0;
    tink.play();
    setTimeout(() => {
        tinkKey.style.backgroundColor = "#193757";
    }, 200);
});

tomKey.addEventListener("click", () => {
    tomKey.style.backgroundColor = "rgba(85, 211, 213, 0.7)";
    tom.pause();
    tom.currentTime = 0;
    tom.play();
    setTimeout(() => {
        tomKey.style.backgroundColor = "#193757";
    }, 200);
});
