$(document).ready(function() {
  $("form#celeb").submit(function(event) {
    var gender = $("select#gender").val();
    var food = $("select#food").val();

    if (food === "pizza" && gender === "male") {
      $('#aniston').show();
    } else {
      $('#aniston').hide();
    }

    if (food === "tacos" && gender === "male") {
      $('#lawrence').show();
    } else {
      $('#lawrence').hide();
    }

    if (food === "burgers" && gender === "male") {
      $('#lopez').show();
    }  else {
        $('#lopez').hide();
    }


    if (food === "pizza" && gender === "female") {
      $('#trump').show();
    } else {
      $('#trump').hide();
    }

    if (food === "tacos" && gender === "female") {
      $('#sanders').show();
    } else {
      $('#sanders').hide();
    }
    
    if (food === "burgers" && gender === "female") {
      $('#clinton').show();
    } else {
      $('#clinton').hide();
    }

    event.preventDefault();
  });
});
