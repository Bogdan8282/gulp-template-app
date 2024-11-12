import plumber from "gulp-plumber"; //Обробка помилок
import notify from "gulp-notify"; //Підказки
import browsersync from "browser-sync"; //Локальний сервер
import newer from "gulp-newer"; //Перевірка оновлень

export const plugins = {
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer
};
