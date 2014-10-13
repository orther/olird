var gui = require('nw.gui');
var pkg = require('./package.json');
var updater = require('node-webkit-updater');
var upd = new updater(pkg);
var copyPath, execPath;

$('#version').text(pkg.version);



var updateStatus = $("#update_status");

updateStatus.append("<p>Updater Started</p>");

// Args passed when new app is launched from temp dir during update
if(gui.App.argv.length) {
    // ------------- Step 5 -------------
    copyPath = gui.App.argv[0];
    execPath = gui.App.argv[1];

    // Replace old app, Run updated app from original location and close temp instance
    upd.install(copyPath, function(err) {
        if(!err) {

            // ------------- Step 6 -------------
            upd.run(execPath, null);
            gui.App.quit();
        }
    });
}
else { // if no arguments were passed to the app

    // ------------- Step 1 -------------
    updateStatus.append("<p>step 1</p>");
    upd.checkNewVersion(function(error, newVersionExists, manifest) {
        updateStatus.append("<p>step 1.5</p>");
        if (!error && newVersionExists) {

            // ------------- Step 2 -------------
            updateStatus.append("<p>step 2</p>");
            upd.download(function(error, filename) {
                updateStatus.append("<p>step 2.5</p>");
                if (!error) {

                    // ------------- Step 3 -------------
                    updateStatus.append("<p>step 3</p>");
                    upd.unpack(filename, function(error, newAppPath) {
                        updateStatus.append("<p>step 3.5</p>");
                        if (!error) {

                            // ------------- Step 4 -------------
                            updateStatus.append("<p>step 4</p>");
                            upd.runInstaller(newAppPath, [upd.getAppPath(), upd.getAppExec()],{});
                            updateStatus.append("<p>step 4.5</p>");
                            gui.App.quit();
                        }
                    }, manifest);
                }
            }, manifest);
        }
    });
}