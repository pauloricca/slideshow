$(() => {
    var current = 0;
    var interval = 1500;
    var showFor = 800;
    var nColours = 7;

    var showNext = () => {
        var img = $('[data-id="' + current + '"]');
        var screenWidth = $('.gallery').width();
        var screenHeight = $('.gallery').height();

        img.css('left', Math.random() * (screenWidth - img.width()));
        img.css('top', Math.random() * (screenHeight - img.height()));

        img.addClass('show');
        for(var i = 0; i < nColours; i++) img.removeClass('colour-' + i);
        img.addClass('colour-' + Math.round(Math.random() * nColours));
        setTimeout(() => img.removeClass('show'), showFor);

        current++;
        if (current >= imgs.length) current = 0;

        setTimeout(showNext, interval);
    }

    showNext();
});
