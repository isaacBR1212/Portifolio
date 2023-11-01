$(document).ready(function() {
    
    $("#contato-link").on("click", function(event) {
      event.preventDefault(); 

      
      var footerPosition = $("#footer").offset().top;

      
      $("html, body").animate(
        {
          scrollTop: footerPosition
        },
        900 
      );
    });
  });

  $(document).ready(function() {
    $("#contato-link").on("click", function(event) {
      event.preventDefault();
      var footerPosition = $("#footer").offset().top;

      $("html, body").animate(
        {
          scrollTop: footerPosition
        },
        10,
        function() {
          
          $("#footer").addClass("scroll-indication");

          
          setTimeout(function() {
            $("#footer").removeClass("scroll-indication");
          }, 250);
        }
      );
    });
  });

  




