$(index.html).ready(function () {
    $('#modalForm').modal({
        backdrop: 'static',
        keyboard: false
      })
    
   
    $("#submit, #close").click(function() {
        // Validation
        var form = $("#inputs")

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.addClass('was-validated')

        //Declare and initialize variable for display inputs in div
        var code = "";
        $("#inputs").each(function() {
            var text1 = $(this).find("#heading").val();
            var text2 = $(this).find("#post").val();
            code = text1 <br> text2;
        });

        $("#results").html(code);
        
    });
});