const yaml = require("js-yaml");
const fs = require('fs');
const path = require('path');

const atomsPath = path.join(__dirname, 'atoms.yaml');

module.exports =
{
    getAtoms()
    {
        return yaml.safeLoad(fs.readFileSync(atomsPath, 'utf8'));
    },
    setAtoms(atoms)
    {
        fs.writeFile(atomsPath, yaml.safeDump(atoms), err => console.log);
    },
    getSpecialTokens()
    {
        throw Error("Not implemented");
    }
}