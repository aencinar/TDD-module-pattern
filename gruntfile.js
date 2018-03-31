module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        jasmine: {
            pivotal: {
                src: 'src/**/*.js',
                options: {
                    specs: 'spec/*spec.js',
                    helpers: 'spec/*Helper.js'
                }
            }
        }

    });

    // Register tasks.
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('karma-test', ['karma']);
    grunt.registerTask('grunt-jasmine', ['jasmine']);
};