# aurelia-bootstrap-plugin-sample

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

7. Ensure runtime components are installed:

  ```shell
  jspm install
  ```

## Seeing the Components

Running gulp will build, serve, and watch the project folder. That's it!

  ```shell
  au run --watch
  ```

1. Visit http://localhost:9000 to see the components in action.
2. When gulp is running, any changes will force the browser to reload.

## How to Develop new components

I run two shells - one for the plugin folder, and one for this sample project.
Simply run gulp from the plugin project - it will create a symbolic link that the sample project can link to via the following command -

  ```shell
  gulp relink
  ```

This will ensure that the sample project uses the 'local' symbolic linked version of the project instead of the github 'dist' version

*NOTE*: If changes are made to the plugin folder, they will be pushed to the linked folder automatically, *however* this will not automatically reload the browser.
Just wait for the plugin project to complete, then manually refresh (F5)