# This isn't very portable. It assumes java is installed and yuicompressor
# is in the specified location.
# It also does not error handling.

function minimize() {
    java -jar ../yuicompressor-2.4.8.jar $1 > $2
}

cat src/*.js > build/clippy.js
cp src/clippy.css build/clippy.css
minimize build/clippy.js build/clippy.min.js
minimize build/clippy.css build/clippy.min.css
mkdir -p build/agents
for jsfile in $(ls agents/*/*.js); do
    mkdir -p build/$(dirname $jsfile)
    minimize ${jsfile} build/${jsfile}
done
for mapfile in $(ls agents/*/*.png); do
    mkdir -p build/$(dirname $mapfile)
    cp ${mapfile} build/${mapfile}
done
