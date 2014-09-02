window.onload = function() {
    togglePHP(this.checked);
}

function togglePHP(_checked) {
    document.getElementById('php-socket').disabled = _checked ? false : true;
}

function getValue() {
    var phpValue;
    var leechingValue;
    var wpLinkValue;
    return generate();
}

function generate() {
    // Define phpValue
    if (document.getElementById('php').checked) {
        phpValue = '  location ~ \.php(/|$) {\n' +
        '    fastcgi_pass   ' + document.getElementById('php-socket').value +';\n' +
        '    fastcgi_split_path_info ^(.+\.php)(/.*)$;\n' +
        '    include fastcgi_params;\n' +
        '    fastcgi_param  SCRIPT_FILENAME    $document_root$fastcgi_script_name;\n' +
        '    fastcgi_param  HTTPS              off;\n' +
        '  }\n';
    } else {
        phpValue = '';
    }
    
    // Define leechingValue
    if (document.getElementById('leech').checked) {
        leechingValue = '  location ~* \.(png|gif|jpg|jpeg)$ {\n' +
        '    set $testref "";\n' +
        '    if ($http_referer !~ ^(http://' + document.getElementById('servername').value + '|http://www.google|http://images.search.yahoo|http://www.bing|http://pictures.ask|http://*.facebook.com|https://*.facebook.com|https://*.akamaihd.net/)){\n' +
        '      set $testref I;\n' +
        '    }\n' +
        '    if ($http_user_agent !~* (Googlebot|psbot|msnbot|Yahoo|Ask)) {\n' +
        '      set $testref "${testref}G";\n' +
        '    }\n' +
        '    if ($testref = IG){\n' +
        '      return 444;\n' +
        '    }\n';
    } else {
        leechingValue = '';
    }
    // define wpLinkValue
    if (document.getElementById('wp').checked) {
        wpLinkValue = '  if (!-e $request_filename) { \n' +
        '    rewrite ^(.+)$ /index.php?q=$1 last;\n' +
        '  } \n';
    } else {
        wpLinkValue = '';
    }
    // Generate in textarea
     document.getElementById("gen").innerHTML = 'server {\n' +
            '  listen ' + document.getElementById('listen').value + ';\n' +
            '  server_name ' + document.getElementById('servername').value + 
            ';\n' +
            '  root ' + document.getElementById('root').value + ';\n' +
            '  location / {\n' +
            '    index ' + document.getElementById('index').value +';\n' +
            '  }\n' +
            '  index ' + document.getElementById('index').value + ';\n' +
            wpLinkValue + leechingValue + phpValue +
            '}';
    return false;
}

