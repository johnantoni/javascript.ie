// detect Internet Explorer and version number through injected conditional comments (no UA detect, no need for cond. compilation / jscript check)
//
// author: Scott Jehl
//
// http://gist.github.com/scottjehl
//
// version arg is for IE version (optional)
// comparison arg supports 'lte', 'gte', etc (optional)
//
// is it IE?		
// 	isIE(); 
//
// is it IE6?
// 	isIE(6);
//
// is it less than or equal to IE 7?
// 	isIE(7,'lte');

var isIE = (function(undefined){
  
  var doc = document,
    doc_elem = doc.documentElement,
    cache = {},
    elem;
  
  return function( version, comparison ) {
    if(/*@cc_on!@*/true){return false;}

    var key = [ comparison || '', 'IE', version || '' ].join(' ');
    
    if ( cache[ key ] === undefined ) {
      elem = elem || doc.createElement( 'B' );
      elem.innerHTML = '<!--[if '+ key +']><b></b><![endif]-->';
      cache[ key ] = !!elem.getElementsByTagName( 'b' ).length;
    }
    
    return cache[ key ];
  };
  
})();