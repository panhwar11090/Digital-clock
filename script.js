const currentTime = document.querySelector("h1");
setInterval(() => {
    // getting hours mins secs

    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
    ampm = "AM";

    if(h >= 12){
        h = h-12;
        ampm = "PM";
    }
    // if hours is 0 set this value to 12
    h = h == 0 ? h =12 : h;
    // ading 0 before hr min sec if this value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
}, 1000);