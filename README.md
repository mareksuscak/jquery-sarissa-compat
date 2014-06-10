Brief description
=================

Package which solves compatibility issues between [Sarissa](http://dev.abiss.gr/sarissa/) (bundled for example with [Ajax4JSF](https://java.net/projects/ajax4jsf) library) and [jQuery](http://jquery.com) JavaScript library that are caused mainly due to Sarissa  overriding native window.XMLHttpRequest object for IE (Internet Explorer) browsers. It then subsequently causes "No Transport" problems with Ajax CORS (Cross-Origin Resource Sharing) requests in newer versions of IE (10+).

Background
====================

This library was originally written for applications that are built upon [JSF](http://www.oracle.com/technetwork/java/javaee/javaserverfaces-139869.html) (Java Server Faces) framework which has a dependency on [Ajax4JSF](https://java.net/projects/ajax4jsf) framework and this framework uses [Sarissa](http://dev.abiss.gr/sarissa/) JavaScript library internally. [Sarissa](http://dev.abiss.gr/sarissa/) library however silently overrides [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object (only for IE browsers without a restriction on browser version) that is used by [jQuery](http://jquery.com/) and some other libraries to make Ajax requests in the background. Cross-domain requests are however not supported with Sarissa's version of [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object and it subsequently causes IE to not send any cross-domain requests at all. Besides that IE (at least version 10 and 11) clearly does not support _cross-http-scheme ajax requests_ and _ajax requests that are sent to addresses with invalid SSL certificates_.

Usage
=====

Just include the script on the page after jQuery library and make sure you use the correct path: 

	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js"></script>
	<script src="js/jquery-sarissa-compat.min.js"></script>

Notes
=====

- Supports [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) 

Missing pieces
==============

- XDomainRequest object branch for better compatibility with older IE browsers (8-9)