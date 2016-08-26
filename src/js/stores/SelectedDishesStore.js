var DishAppDispatcher = require( "../dispatcher/DishAppDispatcher.js" );
var DishConstants = require( "../constants/DishConstants.js" );
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = DishConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var selectedDishes = {};

function addDish( dish ){

}

var SelectedDishesStore = assign({},EventEmitter.prototype,{
	emitChange:function(){
		this.emit( CHANGE_EVENT );
	},
	addChangeListener:function( callback ){
		this.on( CHANGE_EVENT,callback );
	},
	removeChangeListener:function( callback ){
		this.removeListener( CHANGE_EVENT,callback );
	}
});

SelectedDishesStore.dispatchTocken = DishAppDispatcher.register(
	function( action ){
		switch( action.type ){
			case ActionTypes.ADD_ONE_DISH:
				addDish( action.dish );
				SelectedDishesStore.emitChange();
			break;

			default:
				//do nothing;
		}
	}
);

module.exports = SelectedDishesStore;

