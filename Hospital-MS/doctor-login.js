var myApp = angular.module("myApp", []);
myApp.controller("loginController", function ($scope, $http, $log) {
    $http({
        mrthod: 'GET',
        url: "https://jsonplaceholder.typicode.com/users",
    })
    .then(function(response){
        $scope.users = response.data;
        $log.info(response);
    },function(reason){
        $scope.error =  reason.data;
        $log.info(reason);
    
    });
});
// ---
// ---
function validateUsername() {
    var username = document.getElementById("username").value;
    var usernameValue = username.trim();
    if (usernameValue == "") {
        // document.getElementById("usererror").innerHTML = "Enter your username";
        $("#username").css({
            "border": "none",
            "border-bottom": "2px solid red"
        });
    } else if (usernameValue != "") {
        // document.getElementById("usererror").innerHTML = "";
        $("#username").css({
            "border": "none",
            "border-bottom": "2px solid green"
        });
        return true;
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordValue = password.trim();
    if (passwordValue == "") {
        // document.getElementById("passerror").innerHTML = "Enter your password";
        $("#password").css({
            "border": "none",
            "border-bottom": "2px solid red"
        });
    } else if (passwordValue != "") {
        // document.getElementById("passerror").innerHTML = "";
        $("#password").css({
            "border": "none",
            "border-bottom": "2px solid green"
        });
        return true;
    }
}

function validateFields() {
    var p = validatePassword();
    var u = validateUsername();
    if ((p == true) && (u == true)) {
        validateAPI();
    } else {
        alert("Fill alll Fields!")
    }
}

function validateAPI() {
    var url = "";
    fetch("http://jsonplaceholder.typicode.com/users/2")
        .then(function (response) {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error('Invalid user ID');
            }
        })
        .then((data) => {
            console.log(data);
            var usernameData = document.getElementById("username").value;
            var passwordData = document.getElementById("password").value;

            if ((data.username == usernameData) && (data.id == passwordData)) {
                window.location = "PortalPRS.html";
            } else {
                alert("Invalid Credentials");
            }
        })
        .catch((err) => {
            console.log('ERROR: ', err.message);
        });
}