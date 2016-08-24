var Router = require( "react-router" ).Router;
var Route = require( "react-router" ).Route;
//var IndexRoute = require( "react-router" ).IndexRoute;
var hashHistory = require( "react-router" ).hashHistory;
var Hello = require('../../test/HelloComponent.js');



var routes = (
	<Router history={ hashHistory }>
		<Route path="/aaa" component={ Hello }/>
	</Router>
);

module.exports = routes;