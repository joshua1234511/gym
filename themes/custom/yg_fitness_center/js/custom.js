(function ($, Drupal) {
  'use strict';
  
  		(function ($, Drupal, drupalSettings) {
			  'use strict';

			  Drupal.behaviors.mybehavior = {
			    attach: function (context, settings) {  
			     $(document).on('click','.navbar-collapse.in',function(e) {
			    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			        $(this).collapse('hide');
			    }
			});
			    }
			  };
			 $('.flexslider').flexslider({
    			animation: "slide"	
    		 });
		})(jQuery, Drupal, drupalSettings);
})(jQuery, Drupal);