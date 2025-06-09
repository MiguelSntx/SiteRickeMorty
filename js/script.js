$(function() {

    $('.nav-links a').on('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            const target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
            }
        }
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    $(entry.target).removeClass('initial-hidden');
                    observer.unobserve(entry.target);
                }
            });
        }, 
        { threshold: 0.1 }
    );

    $('.card').addClass('initial-hidden').each(function() {
        observer.observe(this);
    });

    $('.zoom-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });
});