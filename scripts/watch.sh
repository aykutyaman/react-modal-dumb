echo "> Start transpiling ES2015"
echo ""
babel --watch --plugins "transform-runtime" lib --ignore __tests__ --out-dir ./dist
cd dist
browserify --debug -t [ exposify --expose [ --react React ] ] ./window_bind.js > ./browser.js
echo ""
echo "> Complete transpiling ES2015"
