import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp
    .src(app.path.src.images, { encoding: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "Images",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(webp()) // Convert images to WebP
    .pipe(app.gulp.dest(app.path.build.images))

    .pipe(app.gulp.src(app.path.src.images, { encoding: false }))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, // 0 - 7
      })
    )
    .pipe(app.gulp.dest(app.path.build.images))

    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, //0 - 7
      })
    )
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
