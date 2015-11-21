requirejs.config({
    baseUrl: 'assets/js/app',
    paths: {
        app: '../../app',
        three: '../lib/three',
   		stats: '../lib/stats.min',
   		TweenMax: '../lib/TweenMax.min',
    	dat: '../lib/dat.gui.min',
    	jquery: '../lib/jquery-2.1.4.min',
    }
});

requirejs(['main']);

//node r.js -o build.js