import { Router, RouterConfiguration} from 'aurelia-router'
import { bindable } from 'aurelia-framework'

export class Components {

    @bindable
    public breadcrumbs: Array<any>;

    @bindable
    public dropDownOptions: Array<any>;

    @bindable
    public listItems: Array<any>;

    constructor() {

        this.breadcrumbs = [
            { name: "Top", link: "/go" },
            { name: "Middle", link: "/go-home" },
            { name: "Bottom" },
        ]

        this.dropDownOptions = [

            { label: "Top", link: "/go" },
            { label: "Middle", link: "/go-home" },
            { separator: true  },
            { label: "Bottom", link: "#!/home/time" }
        ]

        this.listItems = [

            "Product 1",
            "Product 2",
            "Product 3",
            "Product 4"
        ]
    }
}