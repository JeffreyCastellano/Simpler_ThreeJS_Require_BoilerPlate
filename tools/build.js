({
    name: 'main',
    baseUrl: '../assets/js/app',
    // optimize: 'none',
    optimize: 'uglify2',
    //exclude: ['three'],
    paths: {
        requireLib: '../lib/require'
    },
    mainConfigFile: '../assets/app.js',
    out: '../deploy/assets/js/app/main.js',
    
    onBuildRead: function (moduleName, path, contents) {
        return contents;
    }
})
