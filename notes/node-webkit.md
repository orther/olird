Notes related to `node-webkit` live here!

## Screen Sharing

The following issue discusses the ability to use screen sharing with node-webkit: https://github.com/rogerwang/node-webkit/issues/576

It seems screen sharing working in node-webkit v10.2+ and was fixed with this commit: https://github.com/rogerwang/node-webkit/commit/646275d3acf6f2a5bb475993da6fc385679c1424

## Auto Updater

Discussed in node-webkit repo here: https://github.com/rogerwang/node-webkit/issues/233

This is the results of one person's efforts to make a standardized package updater: https://github.com/edjafarov/node-webkit-updater

The current update functionality in the olird app uses this npm module.

## Live Refreshing

Refreshing the content of an app to flush out stale objects and deal with memory leaks is possible with `location.reload()` as noted in this wiki page: https://github.com/rogerwang/node-webkit/wiki/Livereload-node-webkit-on-changes

## H.264 Support

This is possible and documented here: https://github.com/rogerwang/node-webkit/wiki/Using-MP3-&-MP4-(H.264)-using-the--video--&--audio--tags.