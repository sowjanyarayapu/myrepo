var userID = new Array("user1","user2","user3");
var Password = ["abc"];
function createUser()
{
  var uid=document.forms["signupform"]["uid"].value;
   var pw=document.forms["signupform"]["pass"].value;
   if(uid != null && pw != null){
    userID.push(uid);
	Password.push(pw);
   alert("User sign up successful, Please login now !");
   window.location = "../sowjanya/login.html";
   			return false;
   }
   else{
	   alert("Required fields are missing");
   }
}

function validateForm() {
	var un=document.forms["loginform"]["UserID"].value;
	var pwd=document.forms["loginform"]["Password"].value;
   var temp =0;
   var uexist = 0;
   		for(var i = 0; i < userID.length; i++){
			if(userID[i] === un){
				uexist = 1;
				break;
		}
		}
		if(uexist == 0)
		{
			alert ("user doesn't exist, Please create an account from signup page");
			window.location = "../sowjanya/signup.html";
						return false;
		}
		else{
		for(var i = 0; i < userID.length; i++)
		{
		for(var j = 0; j < Password.length; j++) {
			if(userID[i] == un && Password[j] == pwd)
			{
			alert ("Login successful.. Taking you to profile page");
			window.location = "../sowjanya/home.html";
			return false;
			temp =1;
			break;
			}
        }
      }
	  if(temp == 0){
		 alert ("Login was unsuccessful, please check your username and password");
		window.location = "../sowjanya/login.html";
					return false;
	  }

	}
	
}