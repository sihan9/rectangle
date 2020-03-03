$(function (){
  //get dom elem
  var $width  = $('#width'),
      $heigth = $('#heigth'),
      $btn    = $('#calculate'),
      $per = $('#perimeter'),
      $area = $('#area');
  /**
  * decimalSave
  * 小数点后面保留第n位
  *
  * @param num
  * @param n
  * @returns {undefined}
  */
  function decimalSave(num,n){
    return Math.round(num * Math.pow(10,n)) / Math.pow(10,n);
  }
  /*calc button click event*/
  $btn.click(function (){
    //get value
    var w = Number($width.val());
    var h = Number($heigth.val());
    /*calculate
    var p = 2*(w+h);
    var a = w*h;*/
    var rect = rectangle();
    //decimalSave
    //console.log(decimalSave(p,2));
    var p = decimalSave(rect.p(w,h),2),
        a = decimalSave(rect.a(w,h),2);
    //output
    $per.val(p);
    $area.val(a);
  }); 
});


