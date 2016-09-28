$('.btn').click(function(){
  $.get('/part', function(res){
    $('.fillContent').html(res);
  })
})
