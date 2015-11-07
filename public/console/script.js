var person1 = {
    firstName: 'Christophe',
    lastName: 'Jollivet',
    social: {
        twitter: '@jollivetc',
        github: 'jollivetc'
    }
};
var person2 = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        twitter: '@JohnDoe',
        github: 'johndoe'
    }
};
var table = [person1, person2];
$(document).ready(function () {
    var i, output = "";
    var nbBoucle = 8;
    var domElement = document.getElementById("btnDiv");
    var editor = CodeMirror.fromTextArea(document.getElementById("textArea"), {
        mode: "javascript"
    });

    function showCode(code) {
        editor.setValue(code);
    };

    function simpleLog() {
        console.log("Hello in the console");
    };

    function interpolatedLog() {
        console.log("I am an interpoladed %s", 'String');
        console.log("it also works with integer %d and float %f", 42, 3.1415);
        console.log("it even work with object : %O", person1);
        console.log("or HTML element : %o", domElement);

    };

    function levelLog() {
        console.log("a simple log ");
        console.info("I am an info log");
        console.warn("I am a warning log");
        console.error("I am an error");
    };

    function groupLog() {
        console.group("We begin a groupe");
        console.log("I am a log in a group");
        console.log("I am in the same group");
        console.group("I am a nested group");
        console.log("I a inside the nested group");
        createALog();
        console.groupEnd();
        console.log("Return to the parent level of group");
        console.groupEnd();
        console.log("I am in no group");
    };

    function createALog() {
        console.log("I am logged from a function");
    };

    function timedLog() {
        console.time("duration of concatenation");
        for (i = 1; i < 1e6; i++)
            output += i;
        console.timeEnd("duration of concatenation");
        console.time("asynchronous");
        setTimeout(function () {
            console.timeEnd("asynchronous");
        }, 2000);
    };

    function tableLog() {
        console.table(table);
    };

    function tableFilterLog() {
        console.table(table, ["firstName", "lastName"]);
    }

    function countedLog() {
        for (var foo = 0; foo < nbBoucle; foo++)
            console.count("How many times did we go through the loop ?");

    };

    function traceLog() {
        console.trace("i wil generate a stacktrace");
    }


    $("#btnlog").on("click", function () {
        simpleLog();
        showCode(simpleLog.toString());
    });
    $("#btnInterpol").on("click", function () {
        interpolatedLog();
        showCode(interpolatedLog.toString());
    });

    $("#btnLevels").on("click", function () {
        levelLog();
        showCode(levelLog.toString());
    });
    $("#btnGroups").on("click", function () {
        groupLog();
        showCode(groupLog.toString());
    });

    $("#btnTime").on("click", function () {
        timedLog();
        showCode(timedLog.toString());
    });

    $("#btnCompteur").on("click", function () {
        countedLog();
        showCode(countedLog.toString());
    });
    $("#btnTrace").on("click", function () {
        traceLog();
        showCode(traceLog.toString());
    });

    $("#btnTable").on("click", function () {
        tableLog();
        showCode(tableLog.toString());
    });
    $("#btnTableFilter").on("click", function () {
        tableFilterLog();
        showCode(tableFilterLog.toString());
    });

});