var url = window.location.href;

if (url.indexOf("localhost") != -1) {
  var serviceURL = "http://localhost/sole-web/public";
} else {
  var serviceURL = "http://soleinsider.com/public";
}

var admin_url = 'app/';
var app_name = "SoleSales";
var page_title = "SoleSales";

var solesales = {};
solesales.base_url = serviceURL;
solesales.cache = false;
solesales.show_featured = true;
solesales.version = "1";