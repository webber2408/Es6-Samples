/* Only one instance of the module is created! */

var foo = (function User() {
  var username, password;

  function login(uname, pass) {
    username = uname;
    password = pass;
  }

  function getUserDetails() {
    console.log("Username: " + username);
    console.log("Password: " + password);
  }

  var publicAPI = {
    login,
    getUserDetails,
  };

  return publicAPI;
  // Naming the return object as publicAPI is a slightly good variation.
})();

foo.login("admin", "admin1234"); // Closure
foo.getUserDetails(); // Closure
