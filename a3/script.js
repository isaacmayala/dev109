   function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
            upRight(pHeight, pColorEven, pColorOdd, pSymbol);
            downRight(pHeight, pColorEven, pColorOdd, pSymbol);
        }

        function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
            var rLine = "";
            for (var i = 0; i < pHeight; i++) {
                rLine += "<p>";
                for (var j = 0; j <= i; j++) {
                    if (j % 2) 
                        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
                    else
                        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
                }
                rLine += "</p>";
            }
            document.getElementById("upRight").innerHTML = rLine;
        }

        function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
            var rLine = "";
            for (var i = pHeight - 1; i >= 0; i--) { // Adjusted loop
                rLine += "<p>";
                for (var j = 0; j <= i; j++) { // Adjusted loop
                    if (j % 2) 
                        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
                    else
                        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
                }
                rLine += "</p>";
            }
            document.getElementById("downRight").innerHTML = rLine;
        }
