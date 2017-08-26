Nginx Server Block Generator
=============================

Use on [ajsalkeld.com](https://www.ajsalkeld.com/tools/nginx-server-block-generator/ "Use the Nginx Server Block Generator"), or [read more about it](https://www.ajsalkeld.com/blog/project/2016/07/05/nginx-server-block-generator/ "Read about Nginx Server Block Generator").

A Javascript webpage to generate a server config for Nginx.

Fill out the form and click 'Just Do It!'. The script then generates a server config file for use in either nginx.conf (as server{}) or in a virtual host file.

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

* Add IPv6
* Add more advanced SSL options
* Anything else I think of/is suggested.

Known problems
--------------

Code is a wee bit messy, but hey-ho it works. Any problems you experience, please report the issue!

Contributing
-------------

Feel free to add code and fix my mess, and then make a pull request. Shoutout to [jartaud](https://github.com/jartaud) for doing just so.
