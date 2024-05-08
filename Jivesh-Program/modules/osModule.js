const os = require('os');

const systemUptime = os.uptime();
/*
-> tells the uptime in seconds. 
-> Returns the number of seconds since the system was last rebooted
*/

const userInfo = os.userInfo();
/*
-> userInfo() gives the info about the current user. 
-> returns an object containing the userID, groupID, username, home directory and the default shell.
*/ 

//We will store some other info about the OS in objecct
const otherInfo = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
};
/*
.type() - gives the OS name
.release() - tells the release version of the OS
memory is given in bytes
*/

console.log(systemUptime);
console.log(userInfo);
console.log(otherInfo);