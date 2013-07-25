'use strict';



var parseComments  = require('../lib/parseComments');



var files = [
    "./Ink/1/lib.js",
    "./Ink/Net/Ajax/1/lib.js",
    "./Ink/Net/JsonP/1/lib.js",
    "./Ink/Dom/Css/1/lib.js",
    "./Ink/Dom/Element/1/lib.js",
    "./Ink/Dom/Event/1/lib.js",
    "./Ink/Dom/Loaded/1/lib.js",
    "./Ink/Dom/Selector/1/lib.js",
    "./Ink/Dom/Browser/1/lib.js",
    "./Ink/Util/Url/1/lib.js",
    "./Ink/Util/Swipe/1/lib.js",
    "./Ink/Util/String/1/lib.js",
    "./Ink/Util/Dumper/1/lib.js",
    "./Ink/Util/Date/1/lib.js",
    "./Ink/Util/Cookie/1/lib.js",
    "./Ink/Util/Array/1/lib.js",
    "./Ink/Util/Validator/1/lib.js",
    "./Ink/Util/BinPack/1/lib.js",
    "./Ink/Util/Image/1/lib.js",
    "./Ink/UI/Aux/1/lib.js",
    "./Ink/UI/Modal/1/lib.js",
    "./Ink/UI/ProgressBar/1/lib.js",
    "./Ink/UI/SmoothScroller/1/lib.js",
    "./Ink/UI/SortableList/1/lib.js",
    "./Ink/UI/Spy/1/lib.js",
    "./Ink/UI/Sticky/1/lib.js",
    "./Ink/UI/Table/1/lib.js",
    "./Ink/UI/Tabs/1/lib.js",
    "./Ink/UI/ImageQuery/1/lib.js",
    "./Ink/UI/TreeView/1/lib.js",
    "./Ink/UI/Gallery/1/lib.js",
    "./Ink/UI/FormValidator/1/lib.js",
    "./Ink/UI/Droppable/1/lib.js",
    "./Ink/UI/Draggable/1/lib.js",
    "./Ink/UI/DatePicker/1/lib.js",
    "./Ink/UI/Close/1/lib.js",
    "./Ink/UI/Toggle/1/lib.js",
    "./Ink/UI/Pagination/1/lib.js"
];
(function() {
    for (var i = 0, f = files.length; i < f; ++i) {
        files[i] = '/home/jdias/Work/inkjs' + files[i].substring(1);
    }
})();



parseComments(files, function(err, root) {
    if (err) { return console.log(err); }

    console.log( JSON.stringify(root, null, '\t') );
});
