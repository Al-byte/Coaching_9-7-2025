const button1 = document.getElementById('headingOne');
const button2 = document.getElementById('headingTwo');
const button3 = document.getElementById('headingThree');

$(document).ready(function() {    

      $('.modal').on('hide.bs.modal', function() {
        var memory = $(this).html();
        $(this).html(memory);
      })


    
})

