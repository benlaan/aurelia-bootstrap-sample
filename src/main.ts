import 'bootstrap';
import {Aurelia} from 'aurelia-framework';
import environment from './environment';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {

  aurelia.use
    .standardConfiguration()

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  aurelia.use
    .plugin('aurelia-ui-virtualization')
    .plugin('aurelia-bootstrap-plugin')
    ;

  aurelia.start().then(() => aurelia.setRoot());
}
