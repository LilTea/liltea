const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const config_dir = path.join(__dirname, '../config');

const atomsPath = path.join(config_dir, 'atoms.yaml');
const specialTokensPath = path.join(config_dir, 'special_tokens.yaml');

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