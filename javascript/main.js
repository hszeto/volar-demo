$(document).ready(function(){
  $('.nav-item').click(function(){
    event.preventDefault();

    // Load html
    var link_clicked = this.getAttribute('rel');
    $('#carousel-generic').hide();
    $('#target').empty();
    $('#target').load( 'categories/' + link_clicked + '.html');

    // Set active on navbar
    $("[class*='active']").removeClass('active')
    $(this).parent().addClass('active');
    $(this).addClass('active');
  });
});