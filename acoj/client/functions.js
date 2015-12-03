toggleSpinner = function(size, property) {
  if (property == 'show') {
    $('.form-btn').attr('disabled', 'disabled');
    $('.spinner').animate({"width" : size, "height" : size});
  } else if (property == 'hide') {
    $('.form-btn').removeAttr('disabled');
    $('.spinner').animate({"width" : "0px", "height" : "0px"});
  }
}
hideBtnText = function() {

}
