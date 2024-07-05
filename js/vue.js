function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

ism = isMobile()

if (ism) {
    console.log("Mobile device detected");
} else {
    console.log("Desktop device detected");
}

const native_language = true;

new Vue({
    el: ".main",
    data() {
        return {
            isMobile: ism,
            show: false
        }
    }
})

function clicado() {
    
}