/*!
 * jquery-sarissa-compat - v0.9.0 - 2014-06-06
 * https://github.com/mareksuscak/jquery-sarissa-compat
 * Copyright (c) 2014 Marek Suscak (@mareksuscak)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function($) {

if(typeof Sarissa != 'undefined') { 

  // Globally override Ajax settings    
  $.ajaxSetup({
    xhr: function() {
      // TODO: add XDomainRequest branch to support older IE browsers
      if (Sarissa.originalXMLHttpRequest) {
        return new Sarissa.originalXMLHttpRequest();
      } else if (typeof ActiveXObject != 'undefined') {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } else {
        return new XMLHttpRequest();
      }
    }
  }); 
    
  // Override $.support.cors which is then used in ajaxTransport function
  var xhrSupported = $.ajaxSettings.xhr();
  $.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
}

}));