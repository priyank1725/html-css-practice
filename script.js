function checkURLChange() {
    var currentURL = window.location.href;

    // Do something with the current URL, e.g., compare it to a previous URL
    console.log("Current URL: " + currentURL);

    // You can store the current URL for comparison in the next iteration
    // prevURL = currentURL;
}

// Initially, check the URL
checkURLChange();

// Listen for changes in the URL
window.addEventListener('popstate', function () {
    checkURLChange();
});