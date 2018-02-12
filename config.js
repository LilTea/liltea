const yaml = require("js-yaml");

module.exports =
{
    getAtoms()
    {
        return yaml.safeLoad(fs.readFileSync('./atoms.yaml', 'utf8'));
    },
    setAtoms(atoms)
    {
        fs.writeFile("./atoms.yaml", yaml.safeDump(atoms), err => console.log);
    },
    getSpecialTokens()
    {
        throw Error("Not implemented");
    }
}