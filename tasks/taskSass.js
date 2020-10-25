// Inicia server
module.exports = function (gulp, plugins, config) {
  var paths = [
    { src: config.sassSrc, dist: config.sassDist },
    { src: config.sassSrcT, dist: config.sassDistT }
  ]
  gulp.task('sass', function(){
    paths.map(function(path){
      return gulp.src(path.src)
                 .pipe(plugins.sourcemaps.init())
                 .pipe(plugins.sass({
                                     outputStyle: 'expanded',
                                     sourceComments: 'map'
                                    })
                              .on('error', plugins.sass.logError)
                      )
                 .pipe(plugins.sourcemaps.write('./'))
                 .pipe(gulp.dest(path.dist))
                 .pipe(plugins.browserSync.reload({stream:true}));
    });
  });
};
