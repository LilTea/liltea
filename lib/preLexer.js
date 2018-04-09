const insert = (str, what, idx) => {
    return str.slice(0, idx) + what + str.slice(idx);
};

function completeLiterals(source, specialTokens) {
    function stringLeft(index) {
        let i = index - 1
        for (; i >= 0; i--) {
            if (source[i] == specialTokens.string_literal_close)
                break;
            if (source[i] == specialTokens.string_literal_open) return false;
        }
        source = insert(source, specialTokens.string_literal_open, i + 1)
        return true;

    }
    for (let i = 0; i < source.length; i++) {
        if (source[i] == specialTokens.string_literal_close)
            if (stringLeft(i)) i++;
    }
    return source;
}

module.exports.completeLiterals = completeLiterals