var dbup = {};

dbup.cp = require('child_process');

dbup.execpath = require.resolve("./dropbox_uploader.sh");

dbup.run = function(arglist, spec) {
  spec = spec || {};
 
  console.error("EXEC: %j", [dbup.execpath].concat(arglist));
  var proc = dbup.cp.spawn('bash', [dbup.execpath].concat(arglist));

  proc.stdout.pipe(spec.stdout || process.stdout);
  proc.stderr.pipe(spec.stderr || process.stderr);
};

module.exports = dbup;

if (module.parent) {
} else {
  dbup.run(process.argv.slice(2));
}
