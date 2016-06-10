$(document).ready{
  chot.init();
}

var chat = {

   url: 'http://tiny-tiny.herokuapp.com/collections/customChatUsers',

   init: function(){

   }, //end init function

  createUser: function(info){
      $.ajax({
            url: chat.url,
            method: "POST",
            data: info,
            success: function(info){
              console.log(info, "user was created");
            },
            error: function(err){
              console.log("Failed to create " info);
            }
        }) //end of createUser_$.ajax
    }//end of createUser

    getUser: function(logIn){
        $.ajax({
          url: chat.url,
          method: 'GET',
          user: logIn,
          success: function(data){
            data.filter(function(element,idx,array){
              return logIn === userName;
            })
            console.log("Log in successful");
          },
          error: function(err){
            console.log(err, "User not found");
          }
        })//end of getUser_$.ajax
    }// end of getUser

    deleteUser: function(userInfo){
      $.ajax({
          url: chat.url,
          method: 'DELETE',
          success:function(userInfo){
            console.log("User removed");
          },
          error: function(err){
            console.log("User not found");
          }
        })//end of deleteUser_$.ajax
    }//end of deleteUser
}//end of var chat
