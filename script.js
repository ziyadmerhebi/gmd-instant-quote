//Enables checkboxes quantity input
function enableDropIn() {
    if (document.getElementById("qtyDropIn").disabled == true)
    {
        document.getElementById("qtyDropIn").disabled = false;
    }
    else {
        document.getElementById("qtyDropIn").disabled = true;
    }
 }

 function enableUndermount() {
    if (document.getElementById("qtyUndermount").disabled == true)
    {
        document.getElementById("qtyUndermount").disabled = false;
    }
    else {
        document.getElementById("qtyUndermount").disabled = true;
    }
 }

 function enableCooktop() {
    if (document.getElementById("qtyCooktop").disabled == true)
    {
        document.getElementById("qtyCooktop").disabled = false;
    }
    else {
        document.getElementById("qtyCooktop").disabled = true;
    }
 }

 function enableOutlet() {
    if (document.getElementById("qtyOutlet").disabled == true)
    {
        document.getElementById("qtyOutlet").disabled = false;
    }
    else {
        document.getElementById("qtyOutlet").disabled = true;
    }
 }

 function enableDowndraft() {
    if (document.getElementById("qtyDowndraft").disabled == true)
    {
        document.getElementById("qtyDowndraft").disabled = false;
    }
    else {
        document.getElementById("qtyDowndraft").disabled = true;
    }
 }

 function enableCastIron() {
    if (document.getElementById("qtyCastIron").disabled == true)
    {
        document.getElementById("qtyCastIron").disabled = false;
    }
    else {
        document.getElementById("qtyCastIron").disabled = true;
    }
 }

 function enableVanity() {
    if (document.getElementById("qtyVanity").disabled == true)
    {
        document.getElementById("qtyVanity").disabled = false;
    }
    else {
        document.getElementById("qtyVanity").disabled = true;
    }
 }

 function enableLaminateRemoval() {
    if (document.getElementById("qtyLaminateRemoval").disabled == true)
    {
        document.getElementById("qtyLaminateRemoval").disabled = false;
    }
    else {
        document.getElementById("qtyLaminateRemoval").disabled = true;
    }
 }

 function enableOtherRemoval() {
    if (document.getElementById("qtyOtherRemoval").disabled == true)
    {
        document.getElementById("qtyOtherRemoval").disabled = false;
    }
    else {
        document.getElementById("qtyOtherRemoval").disabled = true;
    }
 }

 function enableExtraMileage() {
    if (document.getElementById("qtyExtraMileage").disabled == true)
    {
        document.getElementById("qtyExtraMileage").disabled = false;
    }
    else {
        document.getElementById("qtyOtherRemoval").disabled = true;
    }
 }

 function enableBacksplash() {
    if (document.getElementById("qtyBacksplash").disabled == true)
    {
        document.getElementById("qtyBacksplash").disabled = false;
    }
    else {
        document.getElementById("qtyBacksplash").disabled = true;
    }
 }




var AddRowButton = document.getElementById("btnAddRow");
AddRowButton.onclick = function() {

     
    if ($('#pricingContainer2').is(':visible'))
    {
        $('#pricingContainer3').show()

    }
    else {
        $('#pricingContainer2').show()
    }
}


var DeleteRowButton = document.getElementById("btnDeleteRow");
DeleteRowButton.onclick = function() {

    $('#pricingContainer').hide()

    }

var DeleteRowButton2 = document.getElementById("btnDeleteRow2");
DeleteRowButton2.onclick = function() {

    $('#pricingContainer2').hide()

    }

var DeleteRowButton3 = document.getElementById("btnDeleteRow3");
DeleteRowButton3.onclick = function() {

    $('#pricingContainer3').hide()

    }
    
function hideFunction() {
    $('#pricingContainer2').hide()
}   
 


 //Define json list
 var jsonList = {"GraniteTable" : [{"price" : "42","name" : "Azul Platino - $42"},
                        {"price" : "42","name" : "White Sparkle - $42"},
                        {"price" : "42","name" : "Caledonia - $42"},
                        {"price" : "42","name" : "Dallas White - $42"},
                        {"price" : "45","name" : "Black Pearl - $45"},                      
                        {"price" : "45","name" : "Ganache - $45"},
                        
                        {"price" : "52","name" : "New Venetian Gold - $52"},
                        {"price" : "52","name" : "Black Pearl - $52"},
                        {"price" : "52","name" : "Colonial White - $52"},
                        {"price" : "55","name" : "Grey Nuevo - $55"},
                        {"price" : "59","name" : "Fantasy Brown - $59"},
                        {"price" : "59","name" : "New River White - $59"},
                        {"price" : "59","name" : "Silver Cloud - $59"},
                        {"price" : "65","name" : "Snowfall - $65"},
                        {"price" : "65","name" : "Bianco Antico - $65"},
                        {"price" : "65","name" : "Azul Celeste - $65"},
                        {"price" : "65","name" : "Delicatus White - $65"},
                        {"price" : "65","name" : "Bianco Antique - $65"},
                        {"price" : "65","name" : "Avalon White - $65"},
                        {"price" : "90","name" : "Taj Mahal - $90"},
                        {"price" : "90","name" : "Zermatt - $90"},
                        {"price" : "90","name" : "Florida Wave - $90"},
                        {"price" : "90","name" : "Super White - $90"}],

                        "QuartzTable" : [{"price": "55", "name" : "Frost White - $55"},
                        {"price": "55", "name" : "Iced Gray - $55"},
                        {"price": "55", "name" : "Sparkling White - $55"},
                        {"price": "59", "name" : "Alpine - $59"},
                        {"price": "59", "name" : "Arctic White - $59"},
                        {"price": "59", "name" : "Meridian Gray - $59"},
                        {"price": "59", "name" : "Mystic Gray - $59"},
                        {"price": "59", "name" : "Pearl Gray - $59"},
                        {"price": "69", "name" : "Carrara Grigio - $69"},
                        {"price": "69", "name" : "Carrara Marmi - $69"},
                        {"price": "69", "name" : "Carrara Mist - $69"},
                        {"price": "69", "name" : "Fossil Gray - $69"},
                        {"price": "75", "name" : "Calacatta Vicenza - $75"},
                        {"price": "75", "name" : "Concerto - $75"},
                        {"price": "75", "name" : "Shadow Gray - $75"},
                        {"price": "79", "name" : "Statuary Classique UnbookMatched - $79"},
                        {"price": "79", "name" : "Babylon Gray - $79"},
                        {"price": "79", "name" : "Calacatta Classique UnbookMatched - $79"},
                        {"price": "79", "name" : "Fairy White - $79"},
                        {"price": "79", "name" : "Gray Lagoon - $79"},
                        {"price": "79", "name" : "Pacific Salt - $79"},
                        {"price": "85", "name" : "Blanca Arabescato - $85"},
                        {"price": "85", "name" : "Blanca Statuarietto - $85"},
                        {"price": "85", "name" : "Cashmere Carrara - $85"},
                        {"price": "85", "name" : "Chakra Beige - $85"},
                        {"price": "85", "name" : "Rolling Fog - $85"},
                        {"price": "95", "name" : "Calacatta Classique BookMatched - $95"},
                        {"price": "95", "name" : "Glacier White - $95"},
                        {"price": "95", "name" : "Calacata Laza - $95"},
                        {"price": "95", "name" : "Perla White - $95"},
                        {"price": "95", "name" : "Statuary Classique BookMatched - $95"}],
                        "MarbleTable" : [{"price": "55", "name" : "Fantasy Brown - $55"},
                            {"price": "65", "name" : "Blue Persia - $65"}]}
        

            //define row 1 change product
            function changeProduct(value) {
                
                if (value == "selectGranite") {
                    var listItems= "";
                    for (var i = 0; i < jsonList.GraniteTable.length; i++){
                        listItems+= "<option value='" + jsonList.GraniteTable[i].price + "'>" + jsonList.GraniteTable[i].name + "</option>";
                    }
                    $("#productName").html(listItems);
                }
                else if (value == "selectQuartz") {
                    var listItems= "";
                    for (var i = 0; i < jsonList.QuartzTable.length; i++){
                        listItems+= "<option value='" + jsonList.QuartzTable[i].price + "'>" + jsonList.QuartzTable[i].name + "</option>";
                    }
                    $("#productName").html(listItems);
                }
                else if (value == "selectMarble") {
                    var listItems= "";
                    for (var i = 0; i < jsonList.MarbleTable.length; i++){
                        listItems+= "<option value='" + jsonList.MarbleTable[i].price + "'>" + jsonList.MarbleTable[i].name + "</option>";
                    }
                    $("#productName").html(listItems);
                }
            };


            //DEFINE ROW 2 CHANGE PRODUCT
            function changeProduct2(value) {
                
                if (value == "selectGranite") {
                    var listItems= "";
                    for (var i = 0; i < jsonList.GraniteTable.length; i++){
                        listItems+= "<option value='" + jsonList.GraniteTable[i].price + "'>" + jsonList.GraniteTable[i].name + "</option>";
                    }
                    $("#productName2").html(listItems);
                }
                else if (value == "selectQuartz") {
                    var listItems= "";
                    for (var i = 0; i < jsonList.QuartzTable.length; i++){
                        listItems+= "<option value='" + jsonList.QuartzTable[i].price + "'>" + jsonList.QuartzTable[i].name + "</option>";
                    }
                    $("#productName2").html(listItems);
                }
                else if (value == "selectMarble") {
                    var listItems= "";
                    for (var i = 0; i < jsonList.MarbleTable.length; i++){
                        listItems+= "<option value='" + jsonList.MarbleTable[i].price + "'>" + jsonList.MarbleTable[i].name + "</option>";
                    }
                    $("#productName2").html(listItems);
                }
            };

            //DEFINE ROW 3 CHANGE PRODUCT
            function changeProduct3(value) {
                
                if (value == "selectGranite") {
                    var listItems= "";
                    for (var i = 0; i < jsonList.GraniteTable.length; i++){
                        listItems+= "<option value='" + jsonList.GraniteTable[i].price + "'>" + jsonList.GraniteTable[i].name + "</option>";
                    }
                    $("#productName3").html(listItems);
                }
                else if (value == "selectQuartz") {
                    var listItems= "";
                    for (var i = 0; i < jsonList.QuartzTable.length; i++){
                        listItems+= "<option value='" + jsonList.QuartzTable[i].price + "'>" + jsonList.QuartzTable[i].name + "</option>";
                    }
                    $("#productName3").html(listItems);
                }
                else if (value == "selectMarble") {
                    var listItems= "";
                    for (var i = 0; i < jsonList.MarbleTable.length; i++){
                        listItems+= "<option value='" + jsonList.MarbleTable[i].price + "'>" + jsonList.MarbleTable[i].name + "</option>";
                    }
                    $("#productName3").html(listItems);
                }
            };


// Define edges List?            
var edgesList = {"EdgesTable" : [{"price" : "0","name" : "No Edges"},
            {"price" : "0","name" : "Eased"},
            {"price" : "5","name" : "1/4 Bevel"},
            {"price" : "5","name" : "1/4 Radius"},
            {"price" : "15","name" : "3/4 Bevel"},
            {"price" : "10","name" : "Double Bevel"},
            {"price" : "10","name" : "Double Radius"},
            {"price" : "10","name" : "1/2 Bullnose"},
            {"price" : "15","name" : "Full Bullnose"},
            {"price" : "18","name" : "Dupont"},
            {"price" : "18","name" : "Ogee"}]}

$(document).ready(function(){
var listItems= "";
for (var i = 0; i < edgesList.EdgesTable.length; i++){
    listItems+= "<option value='" + edgesList.EdgesTable[i].price + "'>" + edgesList.EdgesTable[i].name + "</option>";
}
$("#edgesOption").html(listItems);

//populate row 2 edges
$("#edgesOption2").html(listItems);

//populate row 3 edges
$("#edgesOption3").html(listItems);

});




            //Cutout calculations
            var htmlEl = document.getElementById("costLabel");
            function postPayments(totalCost) { 

                var qtyTotalDropIn = document.getElementById("qtyDropIn").value.replace('$', '');
                if (document.getElementById("qtyDropIn").disabled == false)
                {
                    totalCost = totalCost + 150 * qtyTotalDropIn;
                }

                var qtyTotalUndermount = document.getElementById("qtyUndermount").value.replace('$', '');
                if (document.getElementById("qtyUndermount").disabled == false)
                {
                    totalCost = totalCost + 200 * qtyTotalUndermount;
                }

                var qtyTotalCooktop = document.getElementById("qtyCooktop").value.replace('$', '');
                if (document.getElementById("qtyCooktop").disabled == false)
                {
                    totalCost = totalCost + 200 * qtyTotalCooktop;
                }

                var qtyTotalOutlet = document.getElementById("qtyOutlet").value.replace('$', '');
                if (document.getElementById("qtyOutlet").disabled == false)
                {
                    totalCost = totalCost + 100 * qtyTotalOutlet;
                }

                var qtyTotalDowndraft = document.getElementById("qtyDowndraft").value.replace('$', '');
                if (document.getElementById("qtyDowndraft").disabled == false)
                {
                    totalCost = totalCost + 300 * qtyTotalDowndraft;
                }

                var qtyTotalCastIron = document.getElementById("qtyCastIron").value.replace('$', '');
                if (document.getElementById("qtyCastIron").disabled == false)
                {
                    totalCost = totalCost + 250 * qtyTotalCastIron;
                }

                var qtyTotalVanity = document.getElementById("qtyVanity").value.replace('$', '');
                if (document.getElementById("qtyVanity").disabled == false)
                {
                    totalCost = totalCost + 200 * qtyTotalVanity;
                }

                var qtyTotalLaminateRemoval = document.getElementById("qtyLaminateRemoval").value.replace('$', '');
                if (document.getElementById("qtyLaminateRemoval").disabled == false)
                {
                    totalCost = totalCost + 250 * qtyTotalLaminateRemoval;
                }

                var qtyTotalOtherRemoval = document.getElementById("qtyOtherRemoval").value.replace('$', '');
                if (document.getElementById("qtyOtherRemoval").disabled == false)
                {
                    totalCost = totalCost + 500 * qtyTotalOtherRemoval;
                }

                var qtyTotalExtraMileage = document.getElementById("qtyExtraMileage").value.replace('$', '');
                if (document.getElementById("qtyExtraMileage").disabled == false)
                {
                    totalCost = totalCost + 500 * qtyTotalExtraMileage;
                }

                var qtyTotalBacksplash = document.getElementById("qtyBacksplash").value.replace('$', '');
                if (document.getElementById("qtyBacksplash").disabled == false)
                {
                    totalCost = totalCost + 500 * qtyTotalBacksplash;
                }

                totalCost = totalCost.toLocaleString('en', 2); 
                //parseFloat(totalCost).toFixed(2).toLocaleString('en');                      
                htmlEl.innerText = "$" + totalCost;

            }

            //Functions that display the Row costs
            var htmlROW1 = document.getElementById("row1Cost");
            function postRowCost(row1Cost) {              

                row1Cost = row1Cost.toLocaleString('en', 2); 
                //parseFloat(totalCost).toFixed(2).toLocaleString('en');                      
                htmlROW1.innerText = "$" + row1Cost;

            }

            var htmlROW2 = document.getElementById("row2Cost");
            function postSecondRowCost(row2Cost) {              

                row2Cost = row2Cost.toLocaleString('en', 2); 
                //parseFloat(totalCost).toFixed(2).toLocaleString('en');                      
                htmlROW2.innerText = "$" + row2Cost;

            }

            var htmlROW3 = document.getElementById("row3Cost");
            function postThirdRowCost(row3Cost) {              

                row3Cost = row3Cost.toLocaleString('en', 2); 
                //parseFloat(totalCost).toFixed(2).toLocaleString('en');                      
                htmlROW3.innerText = "$" + row3Cost;

            }


            var btn = document.getElementById("btnCalculate");
            btn.onclick = function() {

                //ROW 1 CALCULATIONS:
                //Check to make sure that a product type is selected
                var ddl = document.getElementById("productType");
                var selectedValue = ddl.options[ddl.selectedIndex].value;
                    if (selectedValue == "selectCard")
                {
                    alert("Please select a product type");
                }                

                //Calculates cost based on what product is selected
                var e = document.getElementById("productName");
                var valGranite = e.options[e.selectedIndex].value;
                var quantitySelected = document.getElementById("productQuantity").value.replace('$', '');
                var graniteCost = valGranite * quantitySelected;
                
                //Calculates cost of edges
                var quantityEdges = document.getElementById("linFt").value.replace('$', '');
                var edgeSelect = document.getElementById("edgesOption");
                var valEdges = edgeSelect.options[edgeSelect.selectedIndex].value;
                var edgesCost = valEdges * quantityEdges;
                var row1Cost = graniteCost + edgesCost;

                //Calculates cost of sink labor cutouts
                //var cutoutSelect = document.getElementById("laborOption");
                //var valCutout = cutoutSelect.options[cutoutSelect.selectedIndex].value;
                //var cutoutCost = valCutout * 1;

                var totalCost = row1Cost;



                //ROW 2 CALCULATIONS:     
                if ($('#pricingContainer2').is(':visible'))
                {

                    var ddl = document.getElementById("productType2");
                    var selectedValue = ddl.options[ddl.selectedIndex].value;
                        if (selectedValue == "selectCard")
                    {
                        alert("Please select a product type for Row 2");
                    }        

                    //Calculates cost based on what product is selected
                    var e = document.getElementById("productName2");
                    var valGranite2 = e.options[e.selectedIndex].value;
                    var quantitySelected2 = document.getElementById("productQuantity2").value.replace('$', '');
                    var graniteCost2 = valGranite2 * quantitySelected2;
                    
                    //Calculates cost of edges
                    var quantityEdges2 = document.getElementById("linFt2").value.replace('$', '');
                    var edgeSelect2 = document.getElementById("edgesOption2");
                    var valEdges2 = edgeSelect2.options[edgeSelect2.selectedIndex].value;
                    var edgesCost2 = valEdges2 * quantityEdges2;

                    

                    var row2Cost = graniteCost2 + edgesCost2;
                    totalCost = totalCost + row2Cost; //+ cutoutCost;
                    postSecondRowCost(row2Cost);

                }

                if ($('#pricingContainer3').is(':visible'))
                {

                    var ddl = document.getElementById("productType3");
                    var selectedValue = ddl.options[ddl.selectedIndex].value;
                        if (selectedValue == "selectCard")
                    {
                        alert("Please select a product type for Row 3");
                    }        

                    //Calculates cost based on what product is selected
                    var e = document.getElementById("productName3");
                    var valGranite3 = e.options[e.selectedIndex].value;
                    var quantitySelected3 = document.getElementById("productQuantity3").value.replace('$', '');
                    var graniteCost3 = valGranite3 * quantitySelected3;
                    
                    //Calculates cost of edges
                    var quantityEdges3 = document.getElementById("linFt3").value.replace('$', '');
                    var edgeSelect3 = document.getElementById("edgesOption3");
                    var valEdges3 = edgeSelect3.options[edgeSelect3.selectedIndex].value;
                    var edgesCost3 = valEdges3 * quantityEdges3;

                    

                    var row3Cost = graniteCost3 + edgesCost3;
                    totalCost = totalCost + row3Cost; //+ cutoutCost;
                    postThirdRowCost(row3Cost);

                }
                
                postRowCost(row1Cost);
                postPayments(totalCost);
            };

            var btnPrint = document.getElementById("printButton");
            btnPrint.onclick = function() {
                btn.click();
                window.print();
            }
            
            /*var btn2 = document.getElementById("btnAddLine");
            btn2.onclick = function() {
            //document.getElementById('welcomeDiv').style.display = "block";

            var itm = document.getElementById("pricingElement");
            var cln = itm.cloneNode(true);
            document.getElementById("pricingContainer").appendChild(cln);

            var para = document.createElement("div");
            //var node = document.createTextNode("This is new.");
            para.appendChild(node);
            var element = document.getElementById("welcomeDiv");
            element.appendChild(para);
                }

            var btn3 = document.getElementById("btnRemoveLine");
            btn3.onclick = function() {
            //document.getElementById('welcomeDiv').style.display = "";
            //var para = document.createElement("p");
            //var node = document.createTextNode("This is new.");
            //para.removeChild(node);
            //var element = document.getElementById("welcomeDiv");
            //element.removeChild(para);
            
                }*/