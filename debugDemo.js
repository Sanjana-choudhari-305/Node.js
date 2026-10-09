const debug = require('debug')('app:main');
function doWork(){
    debug('Starting the task....');
    setTimeout(()=>{
        debug('Task completed') //Hey display hotey 10 sec nantar
    },10000);
}
doWork();