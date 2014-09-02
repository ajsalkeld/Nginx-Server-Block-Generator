function togglePHP(_checked) {
    document.getElementById('php-socket').disabled = _checked ? false : true;
}

/*
server{
  listen 80;
  server_name www.gormful.net;
  root /var/sites/salkey/www;
  index index.php index.html index.htm;
if (!-e $request_filename) { 
    rewrite ^(.+)$ /index.php?q=$1 last;
  } 
location ~* \.(png|gif|jpg|jpeg)$ {
        set $testref "";
        if ($http_referer !~ ^(http://www.gormful.net|http://www.google|http://images.search.yahoo|http://www.bing|http://pictures.ask|http://*.facebook.com|https://*.facebook.com|https://*.akamaihd.net/)){
           set $testref I;
        }
        if ($http_user_agent !~* (Googlebot|psbot|msnbot|Yahoo|Ask)) {
           set $testref "${testref}G";
        }
        if ($testref = IG){
           return 444;
        }
}
  location / {
    index index.php;
}
  location ~ \.php(/|$) {
    fastcgi_pass   127.0.0.1:9000;
    fastcgi_split_path_info ^(.+\.php)(/.*)$;
    include fastcgi_params;
    fastcgi_param  SCRIPT_FILENAME    $document_root$fastcgi_script_name;
    fastcgi_param  HTTPS              off;
  }
}
*/