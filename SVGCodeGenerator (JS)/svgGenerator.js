function updatePage(){
    var shape = document.getElementById("svgShape").value;

    switch(shape){
        case "rectangle":
            document.getElementById("default").style.display = "block";
            document.getElementById("fieldset").style.display = "block";
            document.getElementById("circle").style.display = "none";
            document.getElementById("ellipse").style.display = "none";
            break;
        case "circle":
            document.getElementById("default").style.display = "none";
            document.getElementById("fieldset").style.display = "none";
            document.getElementById("circle").style.display = "block";
            document.getElementById("ellipse").style.display = "none";
            break;
        case "ellipse":
            document.getElementById("default").style.display = "none";
            document.getElementById("fieldset").style.display = "none";
            document.getElementById("ellipse").style.display = "block";
            document.getElementById("circle").style.display = "none";
            break;
        case "line":
            document.getElementById("fieldset").style.display = "none";
            document.getElementById("ellipse").style.display = "none";
            document.getElementById("default").style.display = "none";
            document.getElementById("circle").style.display = "none";
            break;
        case "polygon":
                document.getElementById("fieldset").style.display = "none";
                document.getElementById("ellipse").style.display = "none";
                document.getElementById("default").style.display = "none";
                document.getElementById("circle").style.display = "none";
                break;

        case "polyline":
                document.getElementById("fieldset").style.display = "none";
                document.getElementById("ellipse").style.display = "none";
                document.getElementById("default").style.display = "none";
                document.getElementById("circle").style.display = "none";
                break;

    }
    }

    
    function calCode(){
        var shape = document.getElementById("svgShape").value;

        if (shape === "rectangle"){
            var output = document.getElementById("output");
            var height = document.getElementById("input1").value;
            var width = document.getElementById("input2").value;
            var color = document.getElementById("input3").value;
            output.innerHTML = '<svg width="'+ width + '" height="' + height + '"> &#10; <rect width="'+ width + '" height="' + height + '" style = "fill:' + color + ';"> &#10; </svg>';
            }
        else if (shape === "circle"){
            var cOutput = document.getElementById("output");
            var radius = document.getElementById("radius").value;
            var xcenter = document.getElementById("x").value;
            var ycenter = document.getElementById("y").value;
            var cColor = document.getElementById("color").value;
            cOutput.innerHTML = '<svg width="100" height="100"> &#10; <circle cx="'+ xcenter + '" cy="' + ycenter +'" r="'+ radius +'" style="fill:' + cColor + ';"> &#10; </svg>';
        }

        else if (shape === "ellipse"){
            var eOutput = document.getElementById("output");
            var exradius = document.getElementById("eXradius").value;
            var eyradius = document.getElementById("eYradius").value;
            var excenter = document.getElementById("ex").value;
            var eycenter = document.getElementById("ey").value;
            var eColor = document.getElementById("eColor").value;
            eOutput.innerHTML = '<svg width="300" height="300"> &#10; <ellipse cx="'+ excenter + '" cy="' + eycenter +'" rx="'+ exradius +'" ry="'+ eyradius + '" style="fill:' + eColor + ';"> &#10; </svg>';

        }

        else if (shape === "line"){
            
        }

        else if (shape === "polygon"){
            
        }

        else if (shape === "polyline"){
            
        }
        else{
            return false;
        }

        document.getElementById("copy").style.display = "block";
        }


function copyClip(){
    var text = document.getElementById("output");
    text.select();
    text.setSelectionRange(0,999999);
    document.execCommand("copy");
}
    

