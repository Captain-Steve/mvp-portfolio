$(document).ready(function () {

    $('.credit-card-billing-toggle').click(function(){
        $('.credit-card-billing').addClass('active');
        $('.paypal-billing').removeClass('active');
    });

    $('.paypal-billing-toggle').click(function(){
        $('.credit-card-billing').removeClass('active');
        $('.paypal-billing').addClass('active');
    });

    $('.monthly-plan-toggle').click(function(){
        $('.card-plan-monthly').addClass('active');
        $('.card-plan-yearly').removeClass('active');
        $('.plan-details-monthly').addClass('active');
        $('.plan-details-yearly').removeClass('active');
    });

    $('.yearly-plan-toggle').click(function(){
        $('.card-plan-monthly').removeClass('active');
        $('.card-plan-yearly').addClass('active');
        $('.plan-details-monthly').removeClass('active');
        $('.plan-details-yearly').addClass('active');
    });

    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            }, false);
        });
    }, false);

    $('.promo-code button').click(function(){
        $(this).toggleClass('active');
    });

    $('.apply-promo-code-input').click(function(){
        $('.apply-promo-code-button').addClass('active');
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    $('.card-plan').click(function(){
        $('#plan-details').toggleClass('active');
        $(this).toggleClass('active');
    });

});
