if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Accounts.ui.config({
     passwordSignupFields: 'USERNAME_ONLY'
  });

  Template.messages.helpers({
      messages: function() {
          return Messages.find({}, { sort: { time: -1}});
      }
  });

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
}
