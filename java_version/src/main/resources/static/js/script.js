// Get the form element
window.onload = function() {
    var loginForm = document.getElementById("loginForm");

    // Add a submit event listener to the form
    loginForm.addEventListener("submit", function(event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Get the values of the username and password inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var company = document.querySelector('input[name="company"]:checked').value;

    // Make a request to the backend to authenticate the user
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password, company:company })
    }).then(function(response) {
        // Check if the response is successful
        if (!response.ok) {
            throw new Error("Failed to authenticate");
        }

        // Get the Set-Cookie header from the response
        var cookie = response.headers.get("Set-Cookie");

        // Set the cookie in the browser's cookie storage
        document.cookie = cookie;
        // Make a request to the backend to calculate working time and go to dashboard
            fetch("/tims-crawler/dashboard", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function(response) {
                // Check if the response is successful
                if (!response.ok) {
                    throw new Error("Failed to authenticate");
                }

                // Get the Set-Cookie header from the response
                var cookie = response.headers.get("Set-Cookie");

                // Set the cookie in the browser's cookie storage
                document.cookie = cookie;

                // Redirect the user to the home page
                window.location.href = "/tims-crawler/dashboard";
            })
            .catch(function(error) {
                console.error(error);
            });
    })
    .catch(function(error) {
        console.error(error);
    });

});
}
