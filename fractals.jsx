if (Meteor.isClient) {
    Meteor.startup(function () {
	React.render(<SierpinskiCarpet/>, document.getElementById("render-target"));
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
