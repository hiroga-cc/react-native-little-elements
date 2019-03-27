PACKAGE_JSON = 'package.json'

var package_json = require('./' + PACKAGE_JSON)
version = package_json.version
console.log(`Latest version: ${version}`)

match = /([0-9]+\.[0-9]+\.)([0-9]+)/.exec(version)
major_minor_version = match[1]
patch_version = match[2]
new_patch_version = Number(patch_version) + 1
new_version = major_minor_version + new_patch_version
console.log(`New version: ${new_version}`)

package_json.version = new_version
const fs = require('fs')
fs.writeFileSync(PACKAGE_JSON, JSON.stringify(package_json, null, 2))
