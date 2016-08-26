var DishAppDispatcher = require( "../dispatcher/DishAppDispatcher.js" );
var DishConstants = require( "../constants/DishConstants.js" );

var ActionTypes = DishConstants.ActionTypes;

module.exports = {
	addOneDish:function( dish ){
		type:ActionTypes.ADD_ONE_DISH,
		dish:dish
	}
}