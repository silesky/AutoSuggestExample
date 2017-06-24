#! /usr/bin/env bash

# the purpose of this script is to: 
# - install in the node_modules folder so you can import 'react-native-autosuggest' with webpack
# - install via git so someone can open up the dependency from the node_modules folder and make changes

pkg="react-native-autosuggest"
rm -rf node_modules/$pkg # just in case it's already installed
npm i $pkg --save && npm uninstall $pkg # adds react-native-autosuggest to the package.json, but I don't want to actually install it
git clone git@github.com:silesky/$pkg.git node_modules/$pkg
cd node_modules/$pkg && npm install # install my dependencies like throttle debounce

# __Troubleshooting__
# if module not found error when it's obviously in the node_modules folder, run `npm start -- -- reset-cache`
# if it doesn't reload when you are editing the node module: go to node_modules/react-native/packager/defaults.js
# exports.providesModuleNodeModules = [
#  'react-native',
#  'react-native-windows',
#  'react-native-autosuggest, <-- add this line
#];
