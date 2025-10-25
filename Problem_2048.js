function isBalanced(num) {
    const str = String(num);
    for (const ch of new Set(str)) {
        const count = str.split(ch).length - 1;
        if (count !== Number(ch)) {
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
