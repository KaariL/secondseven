//HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES
$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});


//PREVENT MARGIN COLLAPSE ON SERVICES CONTAINERS OF  INDEX


  if ($(window).width() < 768) {
      // window width is at less than 768px

      var currentHeight = $('.services').height();
      var newHeight = currentHeight + 120 + 'px';
      console.log(newHeight);
      function setNewHeight() {
        console.log('newHeight');
        $('.services').css('height', newHeight );
      };
      setNewHeight();
}
else {
    // window width is equal or greater than 768px
}
