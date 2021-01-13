const { Duplex } = require('stream');

const duplexStream = new Duplex({
    write(chunk,enconding,cb){
        console.log(chunk.toString());
        cb();
    },
    read(){
        if(this.currentCharCode > 90) {
            this.push(null);
            return;
        }

        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

duplexStream.currentCharCode = 65;

process.stdin.pipe(duplexStream)
             .pipe(process.stdout);