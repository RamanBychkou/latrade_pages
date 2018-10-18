$(document).ready(function(){
  $('.slider').slick({
    /*appendDots: $('.slide'), */
    dots: true,
    infinite: true,
    arrows: false,
   
    
   
  }); 
  $('.hamburger').click(
    function(){
  $("#menu").fadeToggle('slow');
  });
  $('#sidebar-menu li').click(
    function(){
     $(this).next('.sub-menu').slideToggle(200)
  });
  $('#btn_pop_up').click(
    function(){
    $('.pop-up-body').css('display', 'flex');
  });
  $('.pop-up-body').click(
    function(event){
    if ($(event.target).closest('#pop_up').length ){
      return
    }
    else {
      $('.pop-up-body').fadeOut();
    } 
    });
    $('.flaticon-close-button').click(
    function(){
      $('.pop-up-body').fadeOut();
    }
  );
  var validName = false;
  var validPhone = false;
  $('form').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    var phone = $('#phone').val();
    
    $('#name').removeClass('has-error');
    $('#phone').removeClass('has-error');
    
    $('form > span').remove()
      if ( phone == false || name == false) {
        $('form').append('<span>*Пожалуйста, заполните требуемые поля</span>')
      }
      if (name  == '') {
        $('#name').addClass('has-error')
        
        var validName = false;
     
      }
      else {
        var validName = true;
      }
      if (phone == '' ) {
        $('#phone').addClass('has-error')
        
        var validPhone = false;
      }
      else {
        var validPhone = true;
      }

    if (validName && validPhone == true) {
      $("form").unbind('submit').submit();
    }
  })
  
});