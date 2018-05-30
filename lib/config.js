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
    },
    getAllLilSymbols() {
        let symbols = this.getAtoms().map(a => ({big: a.big, lil: a.lil || a.lil_generated}))
        let specials = this.getSpecialTokens()
        for(let s in specials)
            if(!Array.isArray(specials[s]))
                symbols.push({big:s, lil: specials[s]})
            else
                for(let variable of specials[s])
                    symbols.push({big: "variableSet", lil: variable.setter}, {big: "variableGet", lil: variable.getter})
        return symbols
    }
}