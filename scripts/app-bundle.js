define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia Bootstrap Sample';
            config.map([
                { route: ['', 'components'], name: 'components', moduleId: 'components', nav: true, title: 'Components' },
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components',["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Components = (function () {
        function Components() {
            this.breadcrumbs = [
                { name: "Top", link: "/go" },
                { name: "Middle", link: "/go-home" },
                { name: "Bottom" },
            ];
            this.dropDownOptions = [
                { label: "Top", link: "/go" },
                { label: "Middle", link: "/go-home" },
                { separator: true },
                { label: "Bottom", link: "#!/home/time" }
            ];
            this.listItems = [
                "Product 1",
                "Product 2",
                "Product 3",
                "Product 4"
            ];
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Array)
        ], Components.prototype, "breadcrumbs", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Array)
        ], Components.prototype, "dropDownOptions", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Array)
        ], Components.prototype, "listItems", void 0);
        return Components;
    }());
    exports.Components = Components;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment', 'bootstrap'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration();
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        aurelia.use
            .plugin('aurelia-bootstrap-plugin');
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"nav-bar.html\"></require>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n\n  <nav-bar router.bind=\"router\"></nav-bar>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <router-view></router-view>\n    </div>\n  </div>\n</template>"; });
define('text!components.html', ['module'], function(module) { module.exports = "<template>\n\n  <hr />\n  <h2>List Group</h2>\n\n  <bs-list-group items.bind=\"listItems\"></bs-list-group>\n\n  <bs-list-group>\n      <bs-list-group-item>\n        <p>\n            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida\n            <br />\n            at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n        </p>\n      </bs-list-group-item>\n      <bs-list-group-item>\n        <p>\n            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida\n            <br />\n            at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n        </p>\n      </bs-list-group-item>\n  </bs-list-group>\n\n  <hr />\n  <h2>Responsive Embed</h2>\n\n  <bs-responsive-embed source=\"https://www.youtube.com/v/m40ceh2A54o\" aspect-ratio=\"16by9\"></bs-responsive-embed>\n\n  <hr />\n  <h2>Well</h2>\n\n  <bs-well>\n      <p>\n        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida\n        <br />\n        at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n      </p>\n  </bs-well>\n\n  <hr />\n  <h2>Media Object</h2>\n\n  <bs-media-object direction=\"left\" image-source=\"/styles/media.svg\" image-alt-text=\"media object 1\" heading=\"Media Object 1\">\n      <p>\n        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida\n        <br />\n        at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n      </p>\n  </bs-media-object>\n  <bs-media-object direction=\"right\" alignment=\"top\" image-source=\"/styles/media.svg\" image-alt-text=\"media object 2\" heading=\"Media Object 2\">\n      <p>\n        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida\n        <br />\n        at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n      </p>\n  </bs-media-object>\n  <bs-media-object direction=\"left\" image-source=\"/styles/media.svg\" image-alt-text=\"media object 3\" heading=\"Media Object 3\">\n      <p>\n        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida\n        <br />\n        at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n      </p>\n  </bs-media-object>\n\n  <hr />\n  <h2>Progress Bar</h2>\n\n  <bs-progress-bar progress=\"22\"></bs-progress-bar>\n  <bs-progress-bar progress=\"50\" style=\"danger\"></bs-progress-bar>\n  <bs-progress-bar progress=\"74\" striped=\"true\"></bs-progress-bar>\n  <bs-progress-bar progress=\"92\" style=\"warning\" active=\"true\"></bs-progress-bar>\n\n  <bs-progress-bar min=\"10\" max=\"20\" progress=\"17\"></bs-progress-bar>\n\n  <hr />\n  <h2>Basic Thumbnail</h2>\n\n  <div class=\"row\">\n    <bs-thumbnail md-width=\"3\" image-source=\"/styles/sample.svg\" image-alt-text=\"a document\" link=\"#/click.me?1\"></bs-thumbnail>\n    <bs-thumbnail md-width=\"3\" image-source=\"/styles/sample.svg\" image-alt-text=\"a document\" link=\"#/click.me?2\"></bs-thumbnail>\n    <bs-thumbnail md-width=\"3\" image-source=\"/styles/sample.svg\" image-alt-text=\"a document\" link=\"#/click.me?3\"></bs-thumbnail>\n    <bs-thumbnail md-width=\"3\" image-source=\"/styles/sample.svg\" image-alt-text=\"a document\" link=\"#/click.me?3\"></bs-thumbnail>\n  </div>\n\n  <hr />\n  <h2>Detail Thumbnail</h2>\n\n  <div class=\"row\">\n    <bs-thumbnail image-source=\"styles/sample.svg\" image-alt-text=\"a document\" lg-width=\"3\">\n        <h3>Thumbnail label</h3>\n        <p>\n            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida\n            at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n        </p>\n        <p>\n          <bs-button style=\"primary\">Button</bs-button>\n          <bs-button style=\"default\">Button</bs-button>\n        </p>\n    </bs-thumbnail>\n\n    <bs-thumbnail image-source=\"styles/sample.svg\" image-alt-text=\"a document\" lg-width=\"3\">\n        <h3>Thumbnail label</h3>\n        <p>\n            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida\n            at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.\n        </p>\n        <p>\n          <bs-button style=\"primary\">Button</bs-button>\n          <bs-button style=\"default\">Button</bs-button>\n        </p>\n    </bs-thumbnail>\n  </div>\n\n  <!--\n  <hr />\n  <h2></h2>\n\n  <bs-page-header>\n  </bs-page-header>\n  -->\n\n  <hr />\n  <h2>Pagination</h2>\n\n  <bs-pagination\n    page-count=\"10\"\n    max-display-count=\"10\"\n    last-page-link=\"#/page/last\"\n    link-format=\"#/page/{{number}}\">\n  </bs-pagination>\n\n  <bs-pagination\n    page-count=\"20\"\n    max-display-count=\"10\"\n    first-page-link=\"#/page/first\"\n    link-format=\"#/page/{{index}}\">\n  </bs-pagination>\n\n  <hr />\n  <h2>Jumbotron</h2>\n\n  <bs-jumbotron title=\"Awesome\">\n    <p>Something awesome this way comes. Trust me. Press here.. Go on. I dare you</p>\n    <p><bs-button>Learn More</bs-button></p>\n  </bs-jumbotron>\n\n  <hr />\n  <h2>Tabs</h2>\n\n  <bs-tab>\n      <bs-tab-item id=\"person\" title=\"People\" glyph=\"user\" active=\"true\">\n        Peeps! <bs-badge label=\"5\"></bs-badge>\n      </bs-tab-item>\n\n      <bs-tab-item title=\"Places\" glyph=\"map-marker\">\n        I'm a map! <bs-badge label=\"10\"></bs-badge>\n      </bs-tab-item>\n\n      <bs-tab-item id=\"google\" title=\"Things\" glyph=\"search\">\n        Buy!! <bs-badge label=\"now\"></bs-badge>\n      </bs-tab-item>\n  </bs-tab>\n\n  <hr />\n  <h2>Pills</h2>\n\n  <bs-pill>\n    <bs-pill-item id=\"home\" title=\"Home\">Home?</bs-pill-item>\n    <bs-pill-item id=\"work\" title=\"Work\" link=\"/#/GoHere.html\">Work!</bs-pill-item>\n    <bs-pill-item id=\"pub\" title=\"Pub\" active=\"true\">Yes!</bs-pill-item>\n  </bs-pill>\n\n  <hr />\n  <h2>Stacked Pills</h2>\n\n  <bs-pill stacked=\"true\" stack-size=\"2\">\n    <bs-pill-item id=\"home\" title=\"Home\">Home?</bs-pill-item>\n    <bs-pill-item id=\"work\" title=\"Work\" link=\"/#/GoHere.html\">Work!</bs-pill-item>\n    <bs-pill-item id=\"pub\" title=\"Pub\" active=\"true\">Yes!</bs-pill-item>\n  </bs-pill>\n\n  <hr />\n  <h2>Input Groups</h2>\n\n  <bs-input-group before=\"@\" value=\"benlaan\" placeholder=\"User name\"></bs-input-group>\n  <hr />\n\n  <bs-input-group after=\"@example.com\" placeholder=\"Recipient's username\"></bs-input-group>\n  <hr />\n\n  <bs-input-group before=\"$\" after=\".00\" placeholder=\"enter amount\"></bs-input-group>\n\n  <hr />\n  <h2>Breadcrumbs</h2>\n\n  <bs-breadcrumb>\n    <bs-breadcrumb-item name=\"Parent\"></bs-breadcrumb-item>\n    <bs-breadcrumb-item name=\"Child\" link=\"/#/GoHere.html\"></bs-breadcrumb-item>\n    <bs-breadcrumb-item name=\"Current\" active=\"true\"></bs-breadcrumb-item>\n  </bs-breadcrumb>\n\n  <hr />\n  <h2>Bound Breadcrumbs</h2>\n\n  <bs-breadcrumb items.bind=\"breadcrumbs\"></bs-breadcrumb>\n\n  <hr />\n  <h2>Badges</h2>\n\n  Inbox:  <bs-badge label=\"40\"></bs-badge>\n  <bs-button style=\"warning\">\n    Outbox: <bs-badge label=\"3\"></bs-badge>\n  </bs-button>\n\n  <hr />\n  <h2>Toolbar with Groups</h2>\n\n  <bs-toolbar>\n    <bs-button-group label=\"Horizontal\">\n      <bs-button glyph=\"align-left\">Left</bs-button>\n      <bs-button glyph=\"align-center\">Centre</bs-button>\n      <bs-button glyph=\"align-right\">Right</bs-button>\n    </bs-button-group>\n\n    <bs-button-group label=\"Vertical\">\n      <bs-button>Top</bs-button>\n      <bs-button>Centre</bs-button>\n      <bs-button>Bottom</bs-button>\n    </bs-button-group>\n  </bs-toolbar>\n\n  <hr />\n  <h2>Drop Down</h2>\n\n  <bs-drop-down label=\"Press Me!\" style=\"warning\">\n    <bs-drop-down-item label=\"All The Things\"     link=\"#\"></bs-drop-down-item>\n    <bs-drop-down-item label=\"Because I think so\" link=\"#\"></bs-drop-down-item>\n    <bs-drop-down-item separator=\"true\"></bs-drop-down-item>\n    <bs-drop-down-item label=\"Clearly Not This\"   link=\"#\"></bs-drop-down-item>\n    <bs-drop-down-item label=\"This Doesn't Work\"  link=\"#\" disabled=\"true\"></bs-drop-down-item>\n  </bs-drop-down>\n\n  <hr />\n  <h2>Split Button Drop Down</h2>\n\n  <bs-drop-down label=\"Press Me!\" split=\"true\" style=\"info\">\n    <bs-drop-down-item label=\"All The Things\"     link=\"#\"></bs-drop-down-item>\n    <bs-drop-down-item label=\"Because I think so\" link=\"#\"></bs-drop-down-item>\n    <bs-drop-down-item separator=\"true\"></bs-drop-down-item>\n    <bs-drop-down-item label=\"Clearly Not This\"   link=\"#\"></bs-drop-down-item>\n    <bs-drop-down-item label=\"This Doesn't Work\"  link=\"#\" disabled=\"true\"></bs-drop-down-item>\n  </bs-drop-down>\n\n  <hr />\n  <h2>Bound Drop Down</h2>\n\n  <bs-drop-down label=\"Press Me Too!\" items.bind=\"dropDownOptions\"></bs-drop-down>\n\n  <hr />\n  <h2>Button with Nested Glyph</h2>\n\n  <bs-button size=\"Large\" style=\"primary\">\n      <bs-glyph icon=\"star\" label=\"Rate\"></bs-glyph>\n  </bs-button>\n\n  <hr />\n  <h2>Glyph Button</h2>\n\n  <bs-button size=\"Large\" glyph=\"refresh\">Refreshing..</bs-button>\n\n  <hr />\n  <h2>Alerts</h2>\n\n  <bs-alert type=\"success\" dismissible=\"true\" close-label=\"I know!\">\n    <bs-glyph icon=\"star\"></bs-glyph>You are a star!\n  </bs-alert>\n\n  <bs-alert type=\"info\" dismissible=\"true\">In case you are interested</bs-alert>\n  <bs-alert type=\"warning\">Stop!! This is a bad idea</bs-alert>\n\n</template>"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle Navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-home\"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n          <a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map