$(document).ready(function() {
  chatPage.init();
  console.log(user);
})

var chatPage = {
    url: 'http://tiny-tiny.herokuapp.com/collections/damonrigganloganchat',
    chats:[],
    init: function () {

      chatPage.styling();
      chatPage.events();
    },
    styling: function(){
      chatPage.getChat();
    },
    events: function(){

//POST a chat
$('form ').on('submit', function(event){
  event.preventDefault();
  var newMsg = {
    content: $('input[name="chatbox"]').val(),
  };
  console.log(newMsg);
  $('.chatlog ul').append(`<li> <a href="#>"> <h3>${newMsg.content}</h3> </a></li>`);
  $.ajax({
    url: 'http://tiny-tiny.herokuapp.com/collections/damonrigganloganchat',
    method: "POST",
    data: newMsg,
    success: function(data) {
      console.log("ItWorks", data);
      $('.chatbox ul').append(`<li> <a href="#>"> <h3>${newMsg.content}</h3> </a></li>`);
      chatPage.getChat();
    },
    error: function(err) {
      console.error("WTF",err);
    }
  })
})
//end of POST

//find delete item
$(document).on('click', 'a',function(event){
  event.preventDefault();
    console.log($(this));
      var msgId = $(this).parent().data('id');
      console.log(msgId);
      chatPage.deleteChat(msgId);
      $(this).remove();
  })



},
// end of events




// getUser: function() {
// var user = prompt("Please enter your username:");
// console.log(user);
//
// },


getChat: function () {
  $.ajax({
    url: 'http://tiny-tiny.herokuapp.com/collections/damonrigganloganchat',
    method: "GET",
    success: function(data) {
      console.log("we got something", data);
      $('.chatlog ul').html("");
      data.forEach(function(chats) {
        $('.chatlog ul').append(`<li data-id=${chats._id}> <a href="#">${chats.content}</a> </li>`);
      })
    },
    error: function(err) {
      console.error("WTF",err);
      }
    })
  },

deleteChat: function (msgId) {
  var deleteUrl = chatPage.url + "/" + msgId;
  $.ajax({
    url: deleteUrl,
    method:"DELETE",
    success: function(data) {
      console.log("IT IS GONE",data);
      chatPage.getChat();
    },
    error: function(err) {
      console.error("you blew it", err);
      }
    })
  },


//end of chatPage
}
