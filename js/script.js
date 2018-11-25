window.onload = function () {
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            monthArr = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авн", "Сен", "Окт", "Ноя", "Дек"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes();
        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;

        document.getElementById("date").innerHTML = day + " " + monthArr[month] + " " + year;
        document.getElementById("time").innerHTML = hour + ":" + min;
    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 60000);
        clock();
    }

    clockStart();

    var btnUp = $('.up');
    btnUp.hide();
    $(window).scroll(function () {
        if($(this).scrollTop()>700){
            btnUp.fadeIn();
        }else{
            btnUp.fadeOut();
        }
    })
    btnUp.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('.card').mouseout(function () {
        $(this).find('.thumbnail').stop().fadeOut()
    })
    var accord = $('.accordion');
    accord.find('.title:not(.active)').siblings('p').slideUp();

    accord.find('.title').on('click', function () {
        $(this).siblings('p').stop().slideToggle(500);
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
        }
        else{
            $(this).addClass('active');
        }
    });

    $('#rangeSum').ionRangeSlider({
        grid: true,
        min: 51,
        max: 100,
        from: 500,
        step: 1,
        grid_num: 16,
        grid_margin: false,
        postfix: "$",
        onStart: function (data) {
            $('#sumInv').val(data.from);
        },

        onChange: function (data) {
            $('#sumInv').val(data.from);
        }
    });

    var sumRange = $('#rangeSum').data('ionRangeSlider'),
        min = 51,
        max = 100;

    $('#sumInv').on('change keyup', function () {
        var val = $(this).prop('value');
        if (val < min) {
            val = min;
        } else if (val > max){
            val = max;
        }

        sumRange.update({
            from: val
        });
    });

    $('#tabs').tabs({

    });
};