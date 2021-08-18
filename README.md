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
   lt --port 8000 --subdomain anyname
   **_ you can combine localtunnel with browsersync_**
   ctrl+c kills the process and you can no longer see the domain - throws error 404
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
