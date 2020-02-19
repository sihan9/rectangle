$(function add(x,y){
  //get dom elem
  var $width  = $('#width'),
      $heigth = $('#heigth'),
      $btn    = $('#calculate'),
      $per = $('#perimeter'),
      $area = $('#area');
  /*calc button click event*/
  $btn.click(function (){
    //get value
    var w = Number($width.val());
    var h = Number($heigth.val());
    //calculate
    var p = 2*(w+h);
    var a = w*h;
    //output
    $per.val(p);
    $area.val(a);
  }) 
})
