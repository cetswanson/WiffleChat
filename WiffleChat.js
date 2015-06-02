if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Accounts.ui.config({
     passwordSignupFields: 'USERNAME_ONLY'
  });

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
}
