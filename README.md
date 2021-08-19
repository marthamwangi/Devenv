# Javascript dev environment / seed /boilerplate / starter kit

# ediorconfig

# Javascript package manager tools

Bower, npm, jspm, jam, volo

# Development web servers

1. `http-server`

   - ultra-simple
   - single command servers current directory

2. `express`

   - comprehensive
   - Highly configurable
   - production grade
   - can run it everywhere
   - competitors: koa and hapi

3. `webpack dev server`

   - built in to webpack
   - seves from memory
   - includes hot loading

4. `browsersync`
   - dedicated ip for shairing work on lan
   - all interactions remain in sync
   - great for cross-device testing
   - intergrates with webpack, express, browserify, gulp

# shairing work-in-progress

1. `localtunnel`

   - Easily share work on your local machine by punching a hole on your firewall
   - lower friction to get setup
   - ultra versatile

   # setup:

   ```bash
   npm i localtunnel - or npm install -g localtunnel
   lt --port portNumber or npx localtunnel --port 8000
   own subdomain
   lt --port 8000 --subdomain marty
   npx localtunnel --port 8000 --subdomain marty
   **_ you can combine localtunnel with browsersync_**
   ctrl+c kills the process and you can no longer see the domain - throws error 404
   Error: listen EADDRINUSE: address already in use :::3000
   ```

2. `ngrok`

   - secure tunnel to your local machine

   # setup:

   ```bash
   signup
   instal ngrok
   install authtoken
   start your app
   ./ngrok http portNumber
   ```

3. `surge`

   - extreme simplicity
   - quickly host static files to public url no node.js files
   - no firewall hole
   - hosting persists

   # setup:

   ```bash
   npm i -g surge
   surge
   ```

4. `vercel`
   - Quickly deploy node.js to the cloud
   - no need to keep your machine
   # setup:
   ```bash
   npm i -g vercel / npx vercel
   create start script
   vercel
   ```

# Automation

`Grunt`

- configuration over code
- file oriented ~ writes files to the disk after each automation process
- large plugin ecosystem

`Gulp`

- in-memory streams called pipes
- faster that grunt
- code over configuration
- large plugin ecosystem

`npm scripts`

- declared i package.json
- leverage your OS' command line
  Directly use npm packages
- convection-based pre/post hooks
- leverage world's largest package manager
- no need for separate plugins
- simpler debugging
- better documentation
- easy to learn
- simple

```bash
pre and post hooks
```

pre - any script with pre prefix followed by a word like `start` i.e `prestart` will run before `start`
post - any script with pre prefix followed by a word like `start` i.e `poststart` will run after `start`

# Transpiling

~ is a specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction

`Babel`

- modern, standard-based js today
- leverage full js-ecosystem
- use experimental features
- no type defs, automation required

```bash
@babel/preset-env
```

# babel configuratin styles

- .babelrc

  - not npm specific
  - easier to read since its isolated

- package.json
  - one less file in your project

`Typescript`

- superset of javascript
- enhanced autocompletion ~ type safety
- safer refactoring
- clearer intent
- enhanced readability
- additional non-standard features

# build script js style

- Build scripts are used to build the solution which will be a part of the entire continuous Integration cycle.
- A build script is a file that is started by a build plan. The build script prepares output from generated files.

  `Plain js`

- no waiting for transpile = faster
- no transpiler dependency

  `Transpiled`

- enjoy the latest features
- consistent coding style
- use the same linting rules everywhere
- can eventually remove transpiler

# Bundling

**_ module formats _**

1. IIFE

```bash
(function(){
  //code
})();
```

2. Asynchronous Module Defination (AMD)

```bash
define(['jq'], function (jq){});
```

3. CommonJS (CJS)

```bash
var express = require ('express');
```

4. Universal Module Defination (UMD)
5. ES6 Modules

```bash
import express from 'express';
```

- ES6 format is best preferred

* they are standardized
* statically analyzable
* improved autocompletion
  - intelligent refctoring
  - fails fast ~ find mistake quickly
  - tree shaking ~ Tree shaking is a term commonly used in the JavaScript context for dead-code elimination.
* easy to read
  - named imports
  - default exports

# choosing a bundler...

1. Requirejs

   - its not used often
   - first popular bundler
   - utilizes and helped popularize AMD pattern

2. browserify ~ simple

   - the first bundler to reach mass adoption
   - bundle npm packages referenced for the web
   - large plugin ecosystem

3. webpack ~ mature, popular, and, comprehensive

   - bundles more than just js
   - import css, images, fonts, HTML, etc like js (Asset bundling)
   - built in hot-reloading web server since it serves files from memory
   - best suited for application dev

4. rollup ~ performant libraries

   - tree shaking
   - faster loading production code than webpack as it moves all code to scope
   - best for library authors

5. snowpack ~ instant front-end builds

   - logical defaults
   - get started quickly
   - code splitting ~ splitting your code into different smaller files. Instead of getting a single big JavaScript bundle, you will divide it into several files (chunks)
   - fast

6. parcel ~ no config

   - near instant startup = fast
   - instant refresh on save
   - build once, cache forever
   - built in support for TS, react, css, etc.
   - plugin eecosystem
   - frontend focused = limited on use cases

# source maps

debugging bundle.js generated by webpack and babel

- devtool: "eval-source-map"
  - debugger

# Linting - code linters detect problems in your code without executing it.

why?

- enforce consistency

  - curly brace position
  - confirm/alert
  - Trailing commas
  - globals
  -

- Avoid mistakes

  - Extra parenthesis
  - overwriting function
  - assignment in conditional
  - missing default case in switch
  - debugger / many console.log

- Linters

1. ESLint
2. JSHint
3. JSLint
4. JSCS
5. Closure Linter

- Core decisions to configure ESLint

1. config format
   ESLint supports configuration files in several formats:

JavaScript - use `.eslintrc.js` and export an object containing your configuration.
JavaScript (ESM) - use `.eslintrc.cjs` when running ESLint in JavaScript packages that specify "type":"module" in their package.json. Note that ESLint does not support ESM configuration at this time.
YAML - use `.eslintrc.yaml` or .eslintrc.yml to define the configuration structure.
JSON - use `.eslintrc.json` to define the configuration structure. ESLint's JSON files also allow JavaScript-style comments.
package.json - create an eslintConfig property in your `package.json` file and define your configuration there.

2. Which built-in rules
3. Warnings or errors

```bash
 0 means off
 1 means warning
 2 means error
```

4. which plugins
5. Use preset instead

### watching files with ESLint

Eslint doen't watch files
Ways to watch files

1. eslint-loader

- Re-lints all files upon save

2. eslint-watch

- Eslint wrapper that adds file watch
- not tied to webpack
- Better warning/error formatting
- Displays clean message
- Easily lint tests and build scripts

# eslint with experimental js features ~ Experiments are beta features

- Running eslint directly supports current JS features
- To support experimental features babel-eslint does the job

# setup:

- ESLint recommended
  `.eslintrs.json`

- eslint-watch

  - configure in `package.json`

  ```bash
    "scripts": {
      "lint":"esw webpack.config.* src buildScripts --color"
    }
  ```

  `esw` is the excecutable for eslint watch
  `webpack.config.*` watch .dev.js and .prod.js
  `src buildScripts` watch everything in src and buildScripts
  `--color` adds color to the warning and errors

- overriding eslint rules in `.eslintrc.json`

  ```bash
  no-console: 1
  ```

  `//eslint-disable-line no-console` disables line comments
  `/*eslint-disable no-console */` disables block comment

# enable files watching to run it automatically

```bash
  "scripts": {
    "lint:watch":"npm run lint -- --watch"
  }
```

# run eslint parallel to start

modifying save from `"start": "babel-node buildScripts/srcServer.js",` to:

```bash
  "scripts": {
    "start": "npm-run-all --parallel open:src lint:watch",
  }
```

# Testing and Continuous Intergration (CI)

# Testing styles

1. unit - single function or module
2. Intergration - interaction between modules
3. UI - Auotomate interactions with UI (tools: eg. `selenium`)

# unit testing decisions

1. Testing Framework `Mocha`

   - Mocha
   - Jasmine
   - Tape
   - QUnit
   - AVA
   - Jest

2. Assertion libraries : an asertion is a declaration on what you expect `Chai`

   - common libraries include
     - chai
     - espect
     - should.js

3. Helper libraries `JSDOM`

   - JSDOM
   - Cheerio - jsquery for the server

4. where to run tests `Node`

   - Browser - slower
     - Karma, Testem
   - Headless browser - browser with no visible UI
     - headless chrome
   - In-memory DOM - fast and quick to setup
     - JSDOM

5. where to place tests `Alongside`

   - test folder (centralized)
     - less "noise" in src folder
     - deployment confusion
     - inertia (a convention followed by many)
   - (Alongside) the file under tests
     - easy imports
     - clear visibility
     - convenient to open
     - no recreating structure `src and test folder`
     - easy move files

6. when to run tests `upon save`
   - Everytime you hit save
     - rapid feedback
     - Facilitate test driven development
     - automatic = low friction
     - increases test driven visiblity

# Setup:

1. create a file to configure tests. `testSetup.js`
2. add a script that will run our test via Mocha
   ```bash
   "test":"mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\""
   ```
   `progress` is the reporter we want to use to determine how the test output should display
   - other reporters include
   1. spec
   2. Dot Matrix
   3. Nyan
   4. Tap
   5. landing strip
   6. list
   7. progress
   8. Json
   9. Json stream
   10. min
   11. doc
   12. markdown
   13. third party reporters
   14. html reporters
       `testSetup.js` we tell Mocha to run the configuration file we setup
       `"src/**/*.test.js\` then Mocha should run any tests it finds in src directory and any subdirectory with `test.js` extension
3. writew tests
4. run test `upon save`
   `"test:watch":"npm run test -- --watch"` and lastly add it to start
   `"start": "npm-run-all --parallel open:src lint:watch test:watch",`

# continuous intergration?

> > Continuous integration is a software development process where developers integrate the new code they've written more frequently throughout the development cycle, adding it to the code base at least once a day.

A `continuous integration server` offers the ability to do the following:

> Run automatic builds, tests and releases in a single place
> Deploy any version, anytime
> Keep configuration orderly
> Support plug-ins to enhance functionality
> Monitor your project’s repository
> Pull changes and perform tasks you defined for successful commit
> Send feedback to the relevant project members with details of the build

With continuous integration, each developer integrates their work with the main branch of source code at least once a day (or, preferably, multiple times a day). it:

> confirm commits work as expected from different machines
> continuous integration helps streamline the build process
> results in higher-quality software and more predictable delivery schedules

# why need The CI server

- Forgot to commit new file
- Forgot to update package.json
- commit doesn't run cross-platform
- node version conflicts
- bad merge
- din't run tests
- catch mistakes quickly

The following are some of the most popular continuous integration tools:

`Jenkins`: A widely used open source continuous integration tool, Jenkins allows developers to automatically build, integrate and test code as soon as they commit it to the source repository, making it easier for developers to catch bugs early and deploy software faster. The docker plug-in is available on Jenkins.
`Buildbot`: Buildbot can automate all aspects of the software development cycle. As a job scheduling system, it queues and executes jobs, and reports results.
`Go`: What makes Go stand out from the crowd is the concept of pipelines, which makes the modeling of complex build workflows easy.
`IBM UrbanCode Build`
`Travis CI`: One of the oldest and most-trusted hosted solutions, it is also available in an on-premises version for the enterprise. It runs on windows
`GitLab CI`: An integral part of the open source Rails project, GitLab CI is a free hosted service that provides detailed git repository management with features like access control, issue tracking, code reviews and more.
`Appveyor` - windows support
`SnapCI`
`CircleCI`
`Semaphore`

# Decisions

To do that they would have to agree on the following:

1. Which CI to use: prefarably `Travis` and `Appveyor` to make sure it runs on MAC, Linux and Windows machines
2. When to begin testing code integration
3. How to test that the integration has been successful
4. How to communicate the results to the team

> Setup: Travis CI
