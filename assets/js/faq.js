$(document).ready(function () {
    $('#search_form').submit(function (e) {
        e.preventDefault();
    });
    $('#search_input').keyup(function () {
        var str = $(this).val();

        if (str != '') {
            // $('.tab-nav').hide();
            $('.card-header').hide();
            
            $('.card-header').each(function () {
                var txt = $(this).text();
                eval("var regx = new RegExp('" + str + "', 'gi')");
                var status = regx.exec(txt);

                if (status && status.length > 0) {
                    $(this).show();
                } else {
                    $('.well').css('border', 'none');
                }
            });
        } else {
            $('.tab-nav').show();
            $('.card-header').show();
            $('.well').css('border-bottom', '1px solid aqua');
        }
    });
});