(function($) {
    window.onload = function() {
        var controller = new ScrollMagic.Controller({vertical: false});

        // build tween
        var tween = new TimelineMax ()
        .add([
            TweenMax.to("#parallaxContainer .layer1", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
            TweenMax.to("#parallaxContainer .layer2", 1, {backgroundPosition: "-500% 0", ease: Linear.easeNone}),
            TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "-225% 0", ease: Linear.easeNone})
        ]);

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#parallaxContainer", duration: 2000, offset: 450})
            .setTween(tween)
            .setPin("#parallaxContainer")
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        // build tween
        var tween = new TimelineMax ()
        .add([
            TweenMax.fromTo("#parallaxText .layer1", 1, {scale: 3, autoAlpha: 0.05, left: 300}, {left: -350, ease: Linear.easeNone}),
            TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
        ]);

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: $(window).width()})
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
})(jQuery);