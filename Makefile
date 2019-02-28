install:
	npm install
start:
	npx babel-node -- src/bin/brain-even.js
publish:
	npm publish --access=public
lint:
	npx eslint .
