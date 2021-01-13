const { Transform } = require('stream');

const transform = new Transform({
    transform(chunk,encoding,cb){
        this.push(chunk.toString().toUpperCase());
        cb();
    }
});

process.stdin.pipe(transform).pipe(process.stdout);