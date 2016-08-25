var React = require( "react" );
require('../../../assets/style/main.scss');
var DishGroup = require( "../../components/DishgroupComponent.js" );
//console.log( JSON.parse( localStorage.getItem('commonDish') ) );
//console.log( JSON.parse( localStorage.getItem('tcDish') ) );

var commonDish = JSON.parse( localStorage.getItem('commonDish') );

var Huoguo = React.createClass({
	render:function(){

		var wholedish = [];
		
		for( var i = 0 ; i < commonDish.alldish.length ; i++ ){
			//var singleClassDish = [];
			// singleClassDish.push(
			// 	<div className="dishtitle">
			// 		{ commonDish.alldish[i].name }
			// 	</div>
			// );
			// for( var j = 0 ; j < commonDish.alldish[i].items.length ; j++ ){
			// 	singleClassDish.push(
			// 		<div>
			// 			{ commonDish.alldish[i].items[j].name }
			// 		</div>
			// 	);
			// }
			


			wholedish.push(  <DishGroup dishGroupName={ commonDish.alldish[i].name } dishGroup={ commonDish.alldish[i].items } /> );
		}

		return (
			<div>
				{ wholedish }
			</div>
		);
	}
});

module.exports = Huoguo;