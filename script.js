$(document).ready(function() {

    var operators = ["+", "-", "*", "/", "."];
    var $screen = $("#screen");
    $screen.text("0");

    function check() {
        if ($screen.text().slice() === "0" && $screen.text().slice(1) !== "." || $screen.text().length >= 13) {
            $screen.text("");
        } else if ($screen.text().slice() === "0" && $screen.text().slice(1) === ".") {}
    };


    $("#9").on("click", function() {
        check();
        $screen.append("9");
    });
    $("#8").on("click", function() {
        check();
        $screen.append("8");
    });
    $("#7").on("click", function() {
        check();
        $screen.append("7");
    });
    $("#6").on("click", function() {
        check();
        $screen.append("6");
    });
    $("#5").on("click", function() {
        check();
        $screen.append("5");
    });
    $("#4").on("click", function() {
        check();
        $screen.append("4");
    });
    $("#3").on("click", function() {
        check();
        $screen.append("3");
    });
    $("#2").on("click", function() {
        check();
        $screen.append("2");
    });
    $("#1").on("click", function() {
        check();
        $screen.append("1");
    });
    $("#0").on("click", function() {
        check();
        $screen.append("0");
    });
    $("#dot").on("click", function() {
        if (operators.indexOf($screen.text().slice(-1)) === -1 && $screen.text().slice() !== -1) {
            $screen.append(".");
        }
    });
    $("#plus").on("click", function() {
        if (operators.indexOf($screen.text().slice(-1)) === -1 && $screen.text().slice() !== -1) {
            $screen.append("+");
        }
    });
    $("#minus").on("click", function() {
        if (operators.indexOf($screen.text().slice(-1)) === -1 && $screen.text().slice() !== -1) {
            $screen.append("-");
        }
    });
    $("#multiply").on("click", function() {
        if (operators.indexOf($screen.text().slice(-1)) === -1 && $screen.text().slice() !== -1) {
            $screen.append("*");
        }
    });
    $("#divide").on("click", function() {
        if (operators.indexOf($screen.text().slice(-1)) === -1 && $screen.text().slice() !== -1) {
            $screen.append("/");
        }
    });
    $("#equal").on("click", function() {
        $screen.text(eval($screen.text()));
    });
    $("#AC").on("click", function() {
        $screen.text("0");
    });

});
