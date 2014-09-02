Nginx Server Block Generator
=============================

Use: [tools.ajs.pw](http://tools.ajs.pw)

A Javascript webpage to generate a server config for Nginx.

Fill out the form and click 'Submit'. The script then generates a server config file for use in either nginx.conf (as server{}) or in a virtual host file.

Current options
---------------

* Set port to listen on
* Set server_name
* Set root directory
* Set index
* Enable php-fpm and change socket
* Enable SSL and set certificate and key locations
* Block image leeching (or hotlinking)
* Allow Wordpress pretty permalinks

TODO:
-----

* Make page pretty - 1/2 completed
* Add more advanced SSL options
* Anything else I think of/is suggested.

Known problems
--------------

Code is messy and the web page is ugly, but hey-ho it works. Any problems you experience, please report the issue!

Contributing
-------------

Feel free to add code/translations, and then make a pull request. I suggest you ask (by emailing [contact@ajs.pw](mailto:contact@ajs.pw)) before setting off on a wild adventure, because turning code down after umpteen hours of creation isn't nice. 
