//HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES
$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});
$.get(
  'http://assets.secondseven.ca/html-includes/header.html',
function ( response ){
  var header = document.getElementsByTagName('header');
  $(header).prepend(response);
});
$.get(
  'http://assets.secondseven.ca/html-includes/footer.html',
function ( response ){
  var footer = document.getElementsByTagName('footer');
  $(footer).prepend(response);
});
