Brief description
=====================

Package which solves compatibility issues between [Sarissa](http://dev.abiss.gr/sarissa/) (bundled for example with [Ajax4JSF](https://java.net/projects/ajax4jsf) library) and [jQuery](http://jquery.com) JavaScript library that are caused mainly due to Sarissa  overriding native window.XMLHttpRequest object for Internet Explorer browsers. It then subsequently causes "No Transport" problems with Ajax CORS (Cross-Origin Resource Sharing) in newer versions of IE (10+).

Usage
=====

Just include the script on the page after jQuery: 

	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js"></script>
	<script src="js/jquery-sarissa-compat.min.js"></script>

Notes
=====

- Supports [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) 

Missing pieces
==============

- XDomainRequest object branch for better compatibility with older IE browsers (8-9)