var gulp = require('gulp');
var shell = require('gulp-shell');

var jspmLinkCommand = 'jspm install github:benlaan/aurelia-bootstrap-plugin --link -y';

gulp.task('relink', shell.task([jspmLinkCommand], {verbose: true}));

