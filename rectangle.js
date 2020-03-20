$(function (){
  //get dom elem
  var $width  = $('#width'),
      $heigth = $('#heigth'),
      $btn    = $('#calculate'),
      $per = $('#perimeter'),
      $area = $('#area');
  $forkMeGH.show('https://github.com/sihan9/rectangle');
  $bszPageFooter.show('body');
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

    //calculate
    var rect = rectangle();

    //decimalSave
    var p = decimalSave(rect.per(w,h),2);
    var a = decimalSave(rect.a(w,h),2);
    //output
    $per.val(p);
    $area.val(a);
  }); 
});


