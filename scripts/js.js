// Note to anyone looking at this, I suck at JS.

// Check User Agent string to see if the user is on a mobile browser, and redirect them to the mobile optimised site if they are.

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    location.replace("https://m.gabriel-sykes.com")
}else{
    // false for not mobile device
    void(null)
}