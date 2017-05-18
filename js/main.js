

//PREVENT MARGIN COLLAPSE ON SERVICES CONTAINERS OF  INDEX
  if ($(window).width() < 768) {
      // window width is at less than 768px
      var currentHeight = $('.services').height();
      var newHeight = currentHeight + 120 + 'px';

      function setNewHeight() {
        $('.services').css('height', newHeight );
      };
      setNewHeight();
      //currently doesn't adjust on window resize
}

//LINKS FROM SERVICES TO ACCORDIAN WITH CORRECT SUBJECT active
//$('.services-container').click(function(){
//  var i = $('.services').indexOf(this);
//  $('#services li').removeClass('active');
//  $('#services li').eq(i).addClass('active');
//  console.log(i);
//});
//select a service with index=i from the home page
//open the services page
//select the li with that index for class active
//select the services section and give it class selected

//ACCORDIAN ACCORDIAN ACCORDIAN ACCORDIAN ACCORDIAN

$('#services li').click( function() {
  $('#services li').removeClass('active');
  $( this ).addClass('active');
  $('#services section').removeClass('selected');
  var index = $( this ).index();
  $('#services section').eq(index).addClass('selected');
});
