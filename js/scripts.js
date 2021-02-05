$(function () {
  var input = document.getElementById('period');
  var datepicker = new HotelDatepicker(input, {
    autoClose: false,
    format: "MM-DD-YYYY",
  });
  var inputMobile = document.getElementById('period-mobile');
  var datepickerMobile = new HotelDatepicker(inputMobile, {
    autoClose: false,
    format: "MM-DD-YYYY",
  });

  $('.btn-mobile-book').click(function () {
    $('.mobile-form').show("slow");
  })
  $('.btn-close').click(function () {
    $(".mobile-form").slideUp();
  })

  input.addEventListener('afterClose', function () {
    var rangeDate = datepicker.getValue();
    var rangeArray = rangeDate.split(' - ');
    var dateStart = new Date(rangeArray[0]);
    var dateEnd = new Date(rangeArray[1]);
    $('#checkInDate').val(rangeArray[0]);
    $('#checkOutDate').val(rangeArray[1]);
  }, false);
  inputMobile.addEventListener('afterClose', function () {
    var rangeDate = datepickerMobile.getValue();
    var rangeArray = rangeDate.split(' - ');
    var dateStart = new Date(rangeArray[0]);
    var dateEnd = new Date(rangeArray[1]);
    $('#checkInDateMobile').val(rangeArray[0]);
    $('#checkOutDateMobile').val(rangeArray[1]);
  }, false);
})
