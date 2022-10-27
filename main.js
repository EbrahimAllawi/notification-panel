function a(n) {
    console.log(n.toString().length)
    if(n.toString().length !== 10)
        return 'invalid'

    return 'valid'

}
function b(n) {
    console.log(n.toString().length)
    if(n.toString().length !== 10) {
        return 'invalid'
    }
    else {
        return 'valid'
    }

}

console.log(a(1111111111))
console.log(b(1111111111))