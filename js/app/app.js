$(document).ready(function () {
    var question = 0;

    $('.main_page_block_text_button').click(function (event) {
        event.preventDefault();

        $('.main_page').fadeOut(300);
        $('.test_page').delay(300).fadeIn(300);
    });

    $('.next_button').click(function (event) {
        event.preventDefault();

        var check = $('.active').find('input:checked');

        if (check.length < 1) {
            alert('Выберите один из вариантов');
        } else {
            $('.active').removeClass('active');
            $('.question').eq(++question).addClass('active');

            if (question == $('.question').length - 1) {
                $('.next_button').css('display', 'none');
            }

            if (question > 0) {
                $('.prev_button').css('display', 'block');
            }
        }
    });

    $('.prev_button').click(function (event) {
        event.preventDefault();

        $('.active').removeClass('active');
        $('.question').eq(--question).addClass('active');
        if (question < $('.question').length - 1) {
            $('.next_button').css('display', 'block');
        }
        if (question <= 0) {
            $('.prev_button').css('display', 'none');
        }
    });

    $('.form').on('submit', function (event) {
        event.preventDefault();

        var answers = [];

        for (var i = 0; i < $('.question').length - 1; i++) {
            var question = $('.question').eq(i).find('.question_text').text();
            var ans = $('.question').eq(i).find('input:checked');
            var str = '';

            if (ans.length > 1) {
                ans.each(function () {
                    str += $(this).val() + ',';
                });
            } else {
                str += ans.val();
            }

            answers.push(question + ' ' + str);
        }
        $('#questions').val(answers.join(';'));

        var form = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'send.php',
            data: form,
            success: function () {
                $('.test_page').fadeOut(300);
                $('.thanks').delay(300).fadeIn(300);
            }
        });
    });
});
