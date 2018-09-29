oy-brigade.work
===============

The sources for `www.oy-brigade.work`.

Based on https://github.com/yadex205/scaffold-firebase-ssr


Setup
-----

```bash
# Install requirements
npm install -g firebase-tools

# Install packages
npm install                   # for npm user
yarn install --ignore-engines # for yarn user (MUST apply --ignore-engines)

# Setting project
firebase use --add
```


Develop
-------

```bash
# Launch live preview environment, then edit files under /src/app
npm run develop # for npm user
yarn develop    # for yarn user

# Emulate Firebase environment
npm run emulate
yarn emulate
```
