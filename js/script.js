function validateForm()
{
    var username = document.forms["myForm"]["username"];
    var name = document.forms["myForm"]["fname"];
    var icno = document.forms["myForm"]["ic"];
    var matrix = document.forms["myForm"]["matrix"];
    var psw2 = document.forms["myForm"]["password"];
    var psw = document.forms["myForm"]["psw"];
    var alamat = document.forms["myForm"]["address"];
    var reading = document.forms["myForm"]["read"].checked;
    var sleeping = document.forms["myForm"]["sleep"].checked;
    var fishing = document.forms["myForm"]["fishing"].checked;
    var sport = document.forms["myForm"]["sport"].checked;

    if (username.value == "")
    {
        window.alert("Please fill in your Username.");
        username.focus();
        return false;
    }
    if (psw2.value == "")
    {
        window.alert("Please fill in your Password");
        psw2.focus();
        return false;
    }

        if (psw2.value != psw.value)
        {
          window.alert("fill in the same Password");
          psw2.focus();
          return false;
        }

    if (name.value == "")
    {
        window.alert("Please fill in your Name.");
        name.focus();
        return false;
    }
    if (icno.value == "")
    {
        window.alert("Please fill in your I/C No.");
        icno.focus();
        return false;
    }
    if(icno.value.length < 12)
    {
      window.alert("Please enter 12 Digit I/C No.");
      icno.focus();
      return false;
    }
    if (matrix.value == "")
    {
        window.alert("Please fill in your Matrix No.");
        matrix.focus();
        return false;
    }

    if(alamat == "" || alamat == null){
      alert("Please fill in your address");
      return false;
    }
    if((reading == "") && (sleeping == "") && (fishing == "") && (sport == ""))
    {
      alert("please fill int the interest");
      return false;
    }
    return true;
}



var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
