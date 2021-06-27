const getSeq = (array) => {
    if(!array || array.length === 0) {
        return '1'
    } else {
        return array.sort((a,b) => a.id + b.id)[array.length-1].id+1
    }
}

module.exports = {
    getSeq
}