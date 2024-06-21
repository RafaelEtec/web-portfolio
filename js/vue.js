function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

isMobile = isMobile()

if (isMobile) {
    console.log("Mobile device detected");
} else {
    console.log("Desktop device detected");
}

new Vue({
    el: ".main",
    dada() {
        return {
            isMobile: isMobile,
        }
    }
})