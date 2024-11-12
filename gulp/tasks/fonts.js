import gulp from "gulp";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const fonts = () => {
  return (
    app.gulp
      .src(app.path.src.fonts, { encoding: false })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      // Конвертація в .woff
      .pipe(
        fonter({
          formats: ["woff"],
        })
      )
      .pipe(app.gulp.dest(app.path.build.fonts))
      // Конвертація в .woff2
      .pipe(app.gulp.src(app.path.src.fonts, { encoding: false }))
      .pipe(ttf2woff2())
      .pipe(app.gulp.dest(app.path.build.fonts))
  );
};
