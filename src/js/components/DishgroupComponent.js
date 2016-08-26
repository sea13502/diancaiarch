var React = require("react");
var Dish = require( "./DishComponent.js" );

var DishgroupComponent = React.createClass({
	render:function(){

		var dishGroup = this.props.dishGroup;
		var dishGroupName = this.props.dishGroupName;
		var dishArr = [];
		dishArr.push(
			<div key="name" className="dishtitle">
				{ dishGroupName }
			</div>
		);

		for( var i = 0 ; i < dishGroup.length ; i++ ){
			dishArr.push(
				<Dish key={ dishGroup[i].itemId } dish={ dishGroup[i] } />
			);
		}

		return (
			<div>{ dishArr }</div>
		)
	}
});

module.exports = DishgroupComponent;