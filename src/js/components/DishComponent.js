var React = require( "react" );

var DishComponent = React.createClass({
	render:function(){
		return (
			<div className="dishCell">
				{this.props.dish.name }
				<div className="addBtn" onClick={ this.clickHandler }>
					+
				</div>
			</div>
		)
	},
	clickHandler:function(){
		
	}
});

module.exports = DishComponent;