const { readFile, writeFile } = require('fs')
readFile('ap.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const a = result
    readFile('d.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const sec = result
        writeFile('f.txt', `our result is ${a} and ${sec} `, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })

})


// const fs=require('fs')
// const t=fs.readFileSync('ap.txt','utf8');
// console.log(t);
// fs.writeFileSync('os.txt','buiuuihuihiuhiuh')