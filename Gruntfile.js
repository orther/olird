module.exports = function(grunt) {

    grunt.initConfig({
        nodewebkit: {
            options: {
                version: '0.10.5',
                buildDir: './build', // Where the build version of my node-webkit app is saved
                credits: './src/Credits.html',
                macIcns: './icon.icns', // Path to the Mac icon file
                platforms: ['osx', 'win'] // These are the platforms that we want to build
            },
            src: './src/**/*' // Your node-webkit app
        },
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.registerTask('default', ['nodewebkit']);

};