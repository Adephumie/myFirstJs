function loginUser(){
  let username = document.getElementById("username").value

  while (validateUsername(username) == false){
    alert(`Username is invalid! Username must be less than 10. `)
    return
  }

  // if (username == null){
  //   alert(`You have successfully ended the session`)
  //   return
  // }


  let password = document.getElementById("password").value;
  while (validatePassword(password) == false){
    alert(`Invalid password! Password must be greater than 6`)
    return
  }

  // if (password === null){
  //   alert(`You have successfully ended the session`)
  //   return
  // }

  let confirmPassword = document.getElementById("confirmPassword").value;
  while (confirmPassword !== password){
    alert("Password does not match! Confirm your password again!")
    return
  }

  // if (confirmPassword == null){
  // alert(`password correct! confirm your password again`)
  // return
  // }

  alert(`Hello dear ${username}, You have successfully logged into the app`)
  
}

function validateUsername(username){
  if (username == null){
    return true
  }
  if (username.length > 10){
    return false} else {
    return true
    }
  }

function validatePassword(password){
  if (password == null){
    return true
  }
  if (username.length < 6){
    return false} else {
    return true
    }
  }
