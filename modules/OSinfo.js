const os = require("os");
var colors = require("colors");
const timeUtil = require("./timeUtil");

const getOSinfo = () => {
    const type = os.type() === "Darwin" ? "OSX" : os.type() === "Windows_NT" ? "Windows" : "Linux";
    const release = os.release();
    const cpu = os.cpus()[0].model;
    const uptime = timeUtil.format(os.uptime());
    const userInfo = os.userInfo();

    console.log("System:".rainbow, type);
    console.log("Release:".magenta, release);
    console.log("CPU model:".green, cpu);
    console.log("Uptime: ~".red, uptime);
    console.log("User name:".cyan, userInfo.username);
    console.log("Home dir:".grey, userInfo.homedir);
};

exports.print = getOSinfo;
