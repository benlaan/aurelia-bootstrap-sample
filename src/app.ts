import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {

    config.title = 'Aurelia Bootstrap Sample';

    config.map([
      { route: ['', 'components'], name: 'components',   moduleId: 'components',   nav: true, title: 'Components' },
    ]);

    this.router = router;
  }
}