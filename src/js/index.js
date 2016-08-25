var React = require( "react" );
var ReactDOM  = require( "react-dom" );
var Huoguo = require( "./pages/kuaican/index.js" );
var data = require( "./DiancaiExampleData.js" );

data.init();

ReactDOM.render( <Huoguo />,document.getElementById("test") );