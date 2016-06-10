$(document).ready(function() {
  chatPage.init();
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
  $('.chatlog ul').append(`<li> ${newMsg.content} </li>`);
  $.ajax({
    url: 'http://tiny-tiny.herokuapp.com/collections/damonrigganloganchat',
    method: "POST",
    data: newMsg,
    success: function(data) {
      console.log("ItWorks", data);
      $('.chatbox ul').append(`<li> ${newMsg.content} </li>`);
      chatPage.getChat();
    },
    error: function(err) {
      console.error("WTF",err);
    }
  })
})





    },
// end of events

getChat: function () {
  $.ajax({
    url: 'http://tiny-tiny.herokuapp.com/collections/damonrigganloganchat',
    method: "GET",
    success: function(data) {
      console.log("we got something", data);
      $('.chatlog ul').html("");
      data.forEach(function(chats) {
        $('.chatlog ul').append(`<li data-id=${chats._id}> ${chats.content} </li>`);
      })
    },
    error: function(err) {
      console.error("WTF",err);
    }
  })
},



}
