var line = document.getElementById("follow-line");

function curveGeneration() {
    var x = 400;
    var y = 100;
    var v = 0;
    var l = 100;
    var path = "M " + x + " " + y + " Q"

    for (let i = 0; i < 10; i++) {

        x += Math.cos(v) * l;
        y += Math.sin(v) * l;

        path += " " + x + " " + y;

        v += Math.random() * Math.PI*2;

        x += Math.cos(v) * l;
        y += Math.sin(v) * l;

        path += " " + x + " " + y;
    
    }



    line.setAttribute("d", path);
}

curveGeneration()