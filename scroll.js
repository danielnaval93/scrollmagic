(function($) {
    window.onload = function() {
        // initialize a controller
        var controller = new ScrollMagic.Controller();
        // build scene
        var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1"
        })
        .setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
        .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 300})
        // animate color and top border in relation to scroll position
        .setTween("#animate2", {borderTop: "30px solid white", backgroundColor: "blue", scale: 0.7}) // the tween duration can be omitted and defaults to 1
        .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);

        // pin an element. the pushFollowers option pushes elements after the triggerElement away, creating a gap the size of our Scene's duration
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 300})
        .setPin("#pin3", {pushFollowers: false})
        .addIndicators({name: "3 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);
        
        // pin another element, all the way to the end of the page
        var scene = new ScrollMagic.Scene({triggerElement: "#pin4"})
        .setPin("#pin4")
        .addIndicators({name: "4 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);


        /* Section Wipes (with Pin) */
        // wait for document ready
		// init
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
        }
        
        /* Going Horizontal */
        // // init controller
        // var controller2 = new ScrollMagic.Controller({vertical: false});

        // // build tween
        // var tween = TweenMax.to("#target5", 0.5, {backgroundColor: "green", width: "+=400"});

        // // build scene
        // var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: 500})
        // .setTween(tween)
        // .addIndicators() // add indicators (requires plugin)
        // .addTo(controller2);

        /* Use setClassToggle to trigger class attribute changes programatically */
        // init controller
        var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

        // build scenes
        new ScrollMagic.Scene({triggerElement: "#sec1"})
        .setClassToggle("#high1", "active") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
        new ScrollMagic.Scene({triggerElement: "#sec2"})
        .setClassToggle("#high2", "active") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
        new ScrollMagic.Scene({triggerElement: "#sec3"})
        .setClassToggle("#high3", "active") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
        new ScrollMagic.Scene({triggerElement: "#sec4"})
        .setClassToggle("#high4", "active") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

        /** Set the duration as a percent of the window's viewport. This allows for more responsive UI. */
        // init controller
        var controller = new ScrollMagic.Controller();

        // build tween
        var tween = TweenMax.to("#animate7", 0.5, {scale: 1.3, repeat: 5, yoyo: true});

        // build scene and set duration to window height
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger7", duration: "100%"})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

        /* Attach event listeners to a Scene */
        // init controller
        var controller = new ScrollMagic.Controller();

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger9", duration: 200})
        .addTo(controller)
        .addIndicators() // add indicators (requires plugin)
        .on("update", function (e) {
            $("#scrollDirection").text(e.target.controller().info("scrollDirection"));
        })
        .on("enter leave", function (e) {
            $("#state").text(e.type == "enter" ? "inside" : "outside");
        })
        .on("start end", function (e) {
            $("#lastHit").text(e.type == "start" ? "top" : "bottom");
        })
        .on("progress", function (e) {
            $("#progress").text(e.progress.toFixed(3));
        });

        /* Debugging log levels */
        // init controller
		var controller = new ScrollMagic.Controller(
            // {loglevel: 3}
        );

		// build tween
		var tween = TweenMax.to("#target8", 0.5, {backgroundColor: "black"});

		// build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger8", duration: 300
        // , loglevel: 3
        })
        .setTween(tween)
        .setPin("#target8")
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

		// checkbox actions
		// $("form.loglevel input[type=checkbox]").on("change", function (e) {
		// 	var
		// 		target = $(this).attr("id") == "logcontroller" ? controller : scene,
		// 		level = $(this).prop("checked") ? 3 : 0;

		// 	target.loglevel(level);
        // });
        
        /**Advanced Tweening */
        // build tween that repeats infinitely, and yoyos
        var tween = TweenMax.fromTo("#animate11", 1,
            {left: -100},
            {left: 100, repeat: -1, yoyo: true, ease: Circ.easeInOut}
        );

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger11", duration: 200, offset: -50})
        .setTween(tween)
        .addIndicators({name: "loop"}) // add indicators (requires plugin)
        .addTo(controller);

        // set start offset
        TweenMax.set("#animate12", {left: "-=100"});

        var $box = $("#animate12 p");

        /**Chained tween */
        // build tween
        var tween = new TimelineMax()
        .to("#animate12", 1, {top: "-=200",
                onStart: function () {$box.html("This");},
                onReverseComplete: function () {$box.html("Let's draw!");}
            }
        )
        .to("#animate12", 1, {top: "+=200", left: "+=200",
                onStart: function () {$box.html("is");},
                onReverseComplete: function () {$box.html("This");}
            }
        )
        .to("#animate12", 1, {top: "-=200",
                onStart: function () {$box.html("the");},
                onReverseComplete: function () {$box.html("is");}
            }
        )
        .to("#animate12", 1, {left: "-=200",
                onStart: function () {$box.html("house");},
                onReverseComplete: function () {$box.html("the");}
            }
        )
        .to("#animate12", 1, {top: "-=100", left: "+=100",
                onStart: function () {$box.html("of");},
                onReverseComplete: function () {$box.html("house");}
            }
        )
        .to("#animate12", 1, {top: "+=100", left: "+=100",
                onStart: function () {$box.html("San...");},
                onReverseComplete: function () {$box.html("of");}
            }
        )
        .to("#animate12", 1, {top: "+=200", left: "-=200",
                onStart: function () {$box.html("...ta");},
                onReverseComplete: function () {$box.html("San...");}
            }
        )
        .to("#animate12", 1, {left: "+=200",
                onStart: function () {$box.html("Clause.");},
                onReverseComplete: function () {$box.html("...ta");}
            }
        );

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger12"})
        .setTween(tween)
        .addIndicators({name: "timeline"}) // add indicators (requires plugin)
        .addTo(controller);

        /**Tween a css class */
        // build tween
        var tween = TweenMax.to("#animate13", 1, {className: "+=fish"});
        
        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger13", duration: 200, offset: -50})
        .setTween(tween)
        .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
        .addTo(controller);

        /**Staggered tween */
        // build tween
        var tween = TweenMax.staggerFromTo(".animate14", 2, {left: 700}, {left: 0, ease: Back.easeOut}, 0.15);
        
        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger14", duration: 300})
        .setTween(tween)
        .addIndicators({name: "staggering"}) // add indicators (requires plugin)
        .addTo(controller);

        /**Section Wipe with TimelineMax */
        // init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.fromTo("section.panel2.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
			.fromTo("section.panel2.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			.fromTo("section.panel2.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "300%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
    }
    
})(jQuery);