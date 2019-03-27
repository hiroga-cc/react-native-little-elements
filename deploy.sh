# if error happend, fail process.
set -e

node versionup.js

# push git 
git add package.json
git commit -m "[bot] Update app version!"
git push origin master

# push to npm
npm publish --access public
