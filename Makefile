install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js
publish:
	npm publish --access=public
lint:
	npx eslint .
