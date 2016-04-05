$(document).ready(function () {
    $(".portfolioTabs").click(function () {
        $(".portfolioTabs").removeClass('tabActive');
        $(this).addClass('tabActive');
        if ($('#javascriptTab').hasClass('tabActive') === true) {
            $('.portfolioContents').addClass('noDisplay');
            $('#javascriptTabContent').toggle('fade', 2000);
            $('#jqueryTabContent').hide();
            $('#csharpTabContent').hide();
        }
        else if ($('#jqueryTab').hasClass('tabActive') === true) {
            $('.portfolioContents').addClass('noDisplay');
            $('#jqueryTabContent').toggle('fade', 2000);
            $('#csharpTabContent').hide();
            $('#javascriptTabContent').hide();
        }
        else if ($('#csharpTab').hasClass('tabActive') === true) {
            $('.portfolioContents').addClass('noDisplay');
            $('#csharpTabContent').toggle('fade', 2000);
            $('#javascriptTabContent').hide();
            $('#jqueryTabContent').hide();
        }
    });

    $('#factorialBtn').on('click', function () {
        if ($('#factorialStart').val() === "") {
            $('#factorialNum').text('Please enter a number.');
        }
        else {
            var start = +$('#factorialStart').val();
            if (start === NaN || start < 0) {
                $('#factorialNum').text('Please enter a number greater than or equal to 0 but less than 100.')
            }
            else {
                function factorial(int) {
                    if (int < 2 && int >= 0) {
                        return 1;
                    }
                    else if (int < 0) {
                        return "Please enter a positive number.";
                    }
                    else {
                        return int * factorial(int - 1);
                    }
                }

                var answer = factorial(start);
                $('#factorialNum').text('The number ' + start + ' has a factorial of ' + answer + '.');
            }
        }
    });

    $('#PrimeBtn').on('click', function () {
        var prime = [];
        for (var i = 1; i <= 100; i++) {
            primeNum = true;
            for (var j = 2; j < i; j++) {
                if (i % j === 0) {
                    primeNum = false;
                }
            }
            if (primeNum) {
                prime.push(i +'\n');
            }
        }
        $('#primeNums').text(prime);
    });

    var template = function (text) {
        return '<p class="listContent"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
    };
    $('form').submit(function () {
        var text = $('#todo').val();
        var html = template(text);
        $('.list').append(html);
        $('#todo').val('');
        return false;
    });
    $(document).on('click', '.glyphicon-star', function () {
        $(this).toggleClass('active');
    });
    $(document).on('click', '.glyphicon-remove', function () {
        $(this).parent().remove();
    });
    $(document).on('dblclick', '.listContent', function () {
        $(this).toggleClass('contactForm');
    });
});