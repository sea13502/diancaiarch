var React = require("react");

var DishgroupComponent = React.createClass({
	render:function(){

		var dishGroup = this.props.dishGroup;
		var dishGroupName = this.props.dishGroupName;
		var dishArr = [];
		dishArr.push(
			<div className="dishtitle">
				{ dishGroupName }
			</div>
		);

		for( var i = 0 ; i < dishGroup.length ; i++ ){
			dishArr.push(
				<div>
					{dishGroup[i].name }
				</div>
			);
		}

		return (
			<div>{ dishArr }</div>
		)
	}
});

module.exports = DishgroupComponent;