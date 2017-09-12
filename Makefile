include builder/compile.mk

pre-build:
	-mkdir -p lib
	-mkdir -p dist

lib/dict.js: src/index.js
	$(BABEL) $< -o $@

dist/dict.js: src/index.js
	$(BABEL) $(CFLAGS) $< -o $@

dist/dict.min.js: src/index.js
	$(BABEL) $(CFLAGS) --minified $< -o $@

dist-all: pre-build dist/dict.js dist/dict.min.js

all: test dist-all lib/dict.js

test:
	$(MOCHA) $(TEST_CFLAGS) tests/*.js

clean:
	rm -rf lib dist

clean-all: clean
	rm -rf node_modules
