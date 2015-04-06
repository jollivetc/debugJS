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
        console.log("je suis une %s interpolée", 'String');
        console.log("aussi pour les entiers %d et les float %f", 42, 3.1415);
        console.log("et même les objets : %O", person1);
        console.log("ou les morceaux de DOM : %o", domElement);

    };

    function levelLog() {
        console.log("un simple log ");
        console.info("je suis une info");
        console.warn("je suis un warning");
        console.error("et moi une erreur");
    };

    function groupLog() {
        console.group("on commence un groupe");
        console.log("on log dans le groupe");
        console.log("toujours dans le groupe");
        console.group("et même un sous groupe");
        console.log("je suis à l'intérieur");
        createALog();
        console.groupEnd();
        console.log("retour au niveau 1");
        console.groupEnd();
        console.log("je ne suis pas dans un groupe");
    };

    function createALog() {
        console.log("je suis depuis une fonction");
    };

    function timedLog() {
        console.time("durée concaténation");
        for (i = 1; i < 1e6; i++)
            output += i;
        console.timeEnd("durée concaténation");
        console.time("asynchrone");
        setTimeout(function () {
            console.timeEnd("asynchrone");
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
            console.count("combien de fois on a bouclé ?");

    };

    function traceLog() {
        console.trace("on genère une stacktrace");
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