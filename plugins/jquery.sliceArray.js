/*
 * jQuery sliceArray
 *
 * Copyright (c) 2008 Carlo Zottmann <carlo@zottmann.org>
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://github.com/Carlo/little-shop-of-jquery-horrors/
 *
 * Splits an array into [n] slices, and returns a new array with [n] elements,
 * each being a slice of the input array.
 * 
 * Example:
 *
 *      var arr = [ "a", "b", "c", "d", "e", "f", "g", "h", "i" ];
 *      var sliced_2 = $.sliceArray( arr, 2 );
 *      var sliced_3 = $.sliceArray( arr, 3 );
 *      var sliced_4 = $.sliceArray( arr, 4 );
 *
 * Results:
 *
 *      sliced_2: [ [ "a", "b", "c", "d", "e" ], [ "f", "g", "h", "i" ] ]
 *      sliced_3: [ [ "a", "b", "c" ], [ "d", "e", "f" ], [ "g", "h", "i" ] ]
 *      sliced_4: [ [ "a", "b", "c" ], [ "d", "e", "f" ], [ "g", "h", "i" ], [ ] ]
 */
 
(function($){

	$.sliceArray = function( arr, number_of_slices ) {
	    var old_arr    = arr.slice();
	    var new_arr    = [];
	    var arr_size   = old_arr.length;
	    var slice_size = Math.ceil( arr_size / number_of_slices );

	    for ( var a = 0; a < number_of_slices; a++ ) {
	        var index = a * slice_size;
	        new_arr.push( old_arr.slice( index, index + slice_size ) );
	    }

		return new_arr;
	}
	
})(jQuery);