echo "> Start transpiling ES2015"
echo ""
node_modules/.bin/babel --plugins "transform-runtime" lib --ignore __tests__ --out-dir ./dist
cd dist
../node_modules/.bin/browserify --debug -t [ exposify --expose [ --react React ] ] ./window_bind.js > ./browser.js
#cat ./browser.js | uglifyjs -c > ./browser.min.js
echo ""
echo "> Complete transpiling ES2015"
