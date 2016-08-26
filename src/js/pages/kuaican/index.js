var React = require( "react" );
require('../../../assets/style/main.scss');
var DishGroup = require( "../../components/DishgroupComponent.js" );
console.log( JSON.parse( localStorage.getItem('commonDish') ) );
//console.log( JSON.parse( localStorage.getItem('tcDish') ) );

var commonDish = JSON.parse( localStorage.getItem('commonDish') );

var Huoguo = React.createClass({
	render:function(){

		var wholedish = [];
		
		for( var i = 0 ; i < commonDish.alldish.length ; i++ ){
			wholedish.push(  <DishGroup key={ commonDish.alldish[i].itemClassId } dishGroupName={ commonDish.alldish[i].name } dishGroup={ commonDish.alldish[i].items } /> );
		}

		return (
			<div>
				{ wholedish }
			</div>
		);
	}
});

module.exports = Huoguo;