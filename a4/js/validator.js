function validateForm() {
            let valid = true;
            let errorMessages = "";

            // Clear previous errors
            document.getElementById("errorMessages").innerHTML = "";
            document.getElementById("firstnameError").innerHTML = "";
            document.getElementById("lastnameError").innerHTML = "";
            document.getElementById("emailError").innerHTML = "";
            document.getElementById("phoneError").innerHTML = "";
            document.getElementById("usernameError").innerHTML = "";
            document.getElementById("passwordError").innerHTML = "";
            document.getElementById("addressError").innerHTML = "";
            document.getElementById("cityError").innerHTML = "";
            document.getElementById("stateError").innerHTML = "";
            document.getElementById("countryError").innerHTML = "";
            document.getElementById("zipcodeError").innerHTML = "";

            // First Name Validation
            const firstname = document.getElementById("firstname").value;
            if (!/^[a-zA-Z]+<span class="math-inline">/\.test\(firstname\) \|\| firstname\.length \> 20 \|\| firstname \=\=\= ""\) \{
document\.getElementById\("firstnameError"\)\.innerHTML \= "First name is required and must be alphabetical \(max 20 characters\)\.";
valid \= false;
\}
// Last Name Validation
const lastname \= document\.getElementById\("lastname"\)\.value;
if \(\!/^\[a\-zA\-Z\]\+</span>/.test(lastname) || lastname.length > 20 || lastname === "") {
                document.getElementById("lastnameError").innerHTML = "Last name is required and must be alphabetical (max 20 characters).";
                valid = false;
            }

            // Email Validation
            const email = document.getElementById("email").value;
            const atpos = email.indexOf("@");
            const dotpos = email.lastIndexOf(".");


