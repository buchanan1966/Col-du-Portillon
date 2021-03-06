/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
        'npm:': 'node_modules/',
        'dist': 'dist/'

    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'dist:@angular/core/bundles/core.umd.js',
      '@angular/common': 'dist:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'dist:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'dist:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'dist:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'dist:@angular/http/bundles/http.umd.js',
      '@angular/router': 'dist:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'dist:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
