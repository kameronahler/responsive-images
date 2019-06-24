module.exports = function(grunt) {
    grunt.initConfig({
        // grunticon
        responsive_images: {
            dev: {
                options: {
                    sizes: [{
                        upscale:true,
                        width: 200,
                        name: '@200',
                        quality: 100
                    },{
                        upscale:true,
                        width: 400,
                        name: '@400',
                        quality: 90
                    },{
                        upscale:true,
                        width: 800,
                        name: '@800',
                        quality: 90
                    },{
                        upscale:true,
                        width: 1200,
                        name: '@1200',
                        quality: 80
                    },{
                        upscale:true,
                        width: 1600,
                        name: '@1600',
                        quality: 80
                    },{
                        upscale:true,
                        width: 2000,
                        name: '@2000',
                        quality: 70
                    },{
                        upscale:true,
                        width: 2400,
                        name: '@2400',
                        quality: 70
                    },{
                        upscale:true,
                        width: 2800,
                        name: '@2800',
                        quality: 70
                    }]
                },
                files: [{
                    expand: true,
                    cwd:'in',
                    src: ['**/*.{gif,jpg,png,jpeg}'],
                    dest: 'out/'
                }]
            }
        },
        imageoptim: {
            dev: {
                options:{
                    imageAlpha:false,
                    jpegMini:false
                },
                src: ['out/**/*.{gif,jpg,png,jpeg}']
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-imageoptim');


    // Register tasks
    grunt.registerTask('default', [
        'responsive_images'
    ]);
    grunt.registerTask('imageoptim', [
        'imageoptim'
    ])
};
