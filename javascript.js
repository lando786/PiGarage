function onClick(){
    runPyScript();
}

function runPyScript(){
    var jqXHR = $.ajax({
        type: "POST",
        url: "/script.py",
        async: false
    });

    return jqXHR.responseText;
}

