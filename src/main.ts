import 'bootstrap';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {

  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use.plugin('benlaan/aurelia-bootstrap-plugin');

  aurelia.start().then(() => aurelia.setRoot());
}
