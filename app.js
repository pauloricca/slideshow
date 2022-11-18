$(() => {
    var current = 0;
    var interval = 1500;
    var showFor = 800;
    var nColours = 6;

    var showNext = () => {
        var img = $('[data-id="' + current + '"]');
        var screenWidth = $('.gallery').width();
        var screenHeight = $('.gallery').height();

        img.css('left', Math.random() * (screenWidth - img.width()));
        img.css('top', Math.random() * (screenHeight - img.height()));

        var rotation = 20 * Math.random() - 10;
        var translateX = 400 * Math.random() - 200;
        var translateY = 0 * Math.random() - 0;
        img.css('transform', 'rotate(' + rotation + 'deg) translate3d(' + translateX + 'px, ' + translateY + 'px, 0)');
        img.addClass('show');
        for(var i = 0; i < nColours; i++) img.removeClass('colour-' + i);
        img.addClass('colour-' + Math.floor(Math.random() * nColours));
        setTimeout(() => img.removeClass('show'), showFor);

        current++;
        if (current >= imgs.length) current = 0;

        setTimeout(showNext, interval);
    }

    showNext();
});
