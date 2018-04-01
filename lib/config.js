const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const defaults = {}
defaults.configDir = path.join(__dirname, '../config')
defaults.atomsPath = path.join(defaults.configDir, 'atoms.yaml')
defaults.specialTokensPath = path.join(defaults.configDir, 'special_tokens.yaml')

module.exports = {
    loadConfigSync({
        configDir = defaults.configDir,
        atomsPath = defaults.atomsPath,
        specialTokensPath = defaults.specialTokensPath
    } = {}) {
        this.atoms = yaml.safeLoad(fs.readFileSync(atomsPath, 'utf8'));
        this.specialTokens = yaml.safeLoad(fs.readFileSync(specialTokensPath, 'utf8'));
        return this;
    },
    saveConfigSync({
        configDir = defaults.configDir,
        atomsPath = defaults.atomsPath,
        specialTokensPath = defaults.specialTokensPath
    }) {
        fs.writeFileSync(atomsPath, yaml.safeDump(this.atoms));
    },
    setAtoms(atoms) {
        this.atoms = atoms;
    },
    getAtoms() {
        return this.atoms;
    },
    getSpecialTokens() {
        return this.specialTokens;
    }
}