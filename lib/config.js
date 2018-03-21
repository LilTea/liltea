const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../config');

let atomsPath = path.join(configPath, 'atoms.yaml');
let specialTokensPath = path.join(configPath, 'special_tokens.yaml');

module.exports = {
    getAtoms() {
        return yaml.safeLoad(fs.readFileSync(atomsPath, 'utf8'));
    },
    setAtoms(atoms) {
        fs.writeFile(atomsPath, yaml.safeDump(atoms), err => console.log);
    },
    getSpecialTokens() {
        return yaml.safeLoad(fs.readFileSync(specialTokensPath, 'utf8'));
    }
}