function isBalanced(num) {
    const str = String(num);
    for (const char of new Set(str)) {
        const count = str.split(char).length - 1;
        if (count !== Number(char)) {
            return false;
        }
    }
    return true;
}

function nextBeautifulNumber(n) {
    let x = n + 1;
    while (true) {
        if (isBalanced(x)) {
            return x;
        }
        x++;
    }
}
