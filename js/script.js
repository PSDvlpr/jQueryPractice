var span = $("span");

    span.each(function(index, element) {
      if (index % 2 == 0) {
        $(element).css('color', 'red');
      }
    });

var para = $("p");

  para.each(function(index, element) {
    var button = '<br><button class="btn" data-tmp="' + index + '">Click me</button>';
      $(element).append(button);
    });

$("button").click(function() {
  alert($(this).attr("data-tmp"));
});

$("button").css({
  margin: '20px',
  'font-size': '15px',
  padding: '10px'
});
