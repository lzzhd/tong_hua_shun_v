var fs = require('fs');

var testvm2 = `${__dirname}/v.js`;
const {VM,VMScript}  = require('vm2');
const vm = new VM();
const script = new VMScript(fs.readFileSync(testvm2), "VM2");
function get_v(){
    return vm.run(script);
}

module.exports = {
    get_v,
}

// inspect