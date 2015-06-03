if (Meteor.isClient) {

  Template.messages.rendered = function () {
    scrollPosition();
  };

  Accounts.ui.config({
     passwordSignupFields: 'USERNAME_ONLY'
  });

  Template.messages.helpers({
      messages: function() {
          return Messages.find({}, { sort: { time: 1}});
      }
  });

  var scrollPosition = function() {
    $(".messageBox").prop({ scrollTop: $(".messageBox").prop("scrollHeight") });
  };

  $(document).ready(function(){
    scrollPosition();
  });

  var sendMessage = function() {
    if (Meteor.user())
      var name = Meteor.user().username;
    else
      var name = 'Anonymous';
    var message = document.getElementById('message');

    if (message.value != '') {
      Messages.insert({
        name: name,
        message: message.value,
        time: Date.now(),
      });

      document.getElementById('message').value = '';
      message.value = '';
      scrollPosition();
    }
  };

  Template.input.events = {
    'keydown input#message' : function (event) {
      if (event.which == 13) {
        sendMessage();
      }
     },
      'click #sendMessage': function(event) {
        sendMessage();
     }
  };

if (Meteor.isServer) {
  Meteor.startup(function () {
    Messages.remove({});
    });
  }
}
