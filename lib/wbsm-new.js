#! /usr/bin/env node

// RESOURCES:
//   - https://www.npmjs.com/package/commander
//   - https://developer.atlassian.com/blog/2015/11/scripting-with-node/
//   - https://github.com/tj/commander.js/tree/master/examples
//   - https://nodejs.org/api/path.html

var version = require("./version").version;
var fileUtils = require("./file-utils");
var templateReportFile = "../templates/wbs.sample.md";
var defaultMdFile = "wbs.project.md";
var newReportFilename = './' + defaultMdFile;

var path = require('path');

// command-line argument support
var program = require('commander');
program
  .version(version)
  .usage('<file ...>')
  .description("Create a new Work Breakdown Structure (WBS) Markdown project file.\n"+
               "  Give a filename if you don't want to use the default of '"+defaultMdFile+"'.")
  .parse(process.argv);

// Specified filename comes in through args. Only accept 0 or 1
var filenames = program.args;

if (filenames.length > 1) {
  console.error('Only expecting a single filename');
  process.exit(1);
}

// given exactly 1, use that filename. Overrides the default.
if (filenames.length == 1) {
  newReportFilename = filenames[0]
}

///
///
///
createNewReportFromSample(newReportFilename);
///
///
///


function createNewReportFromSample(filename) {
  //  Don't overwrite the file if it exists and error instead.
  if (fileUtils.exists(filename)) {
    console.log("")
    console.error("Project file already exists")
    process.exit(1);
  }
  else {
    // copy the report sample template file to the output config name.
    fileUtils.copy(getSampleReportFilename(), filename);
    console.log("")
    console.log("New report file created! ["+ filename +"]")
  }
}

function getSampleReportFilename() {
  return path.join(__dirname, templateReportFile);
}
