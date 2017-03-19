module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }

    });

    // Register tasks.
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);
};