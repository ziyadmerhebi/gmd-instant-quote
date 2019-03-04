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
 

 //var selectedProduct = document.getElementById("productType");
 function validate()
 {
 var ddl = document.getElementById("productType");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
 if (selectedValue == "selectCard")
     {
         alert("Please select a product type");
     }
 }

 //Define json list
 var jsonList = {"GraniteTable" : [{"price" : "45","name" : "Black Pearl"},
                        {"price" : "65","name" : "Avalon White"},
                        {"price" : "45","name" : "Ganache"},
                        {"price" : "55","name" : "Grey Nuevo"},
                        {"price" : "65","name" : "Bianco Antique"}],
                        "QuartzTable" : [{"price": "55", "name" : "Frost White"},
                        {"price": "55", "name" : "Iced Gray"},
                        {"price": "55", "name" : "Sparkling White"},
                        {"price": "59", "name" : "Alpine"},
                        {"price": "59", "name" : "Arctic White"},
                        {"price": "59", "name" : "Meridian Gray White"}],
                        "MarbleTable" : [{"price": "55", "name" : "Fantasy Brown"},
                            {"price": "65", "name" : "Blue Persia"}]}
        

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
});

//Define labor list
var laborList = {"LaborTable" : [{"price" : "0","name" : "No Cut Out"},
                        {"price" : "200","name" : "Undermount Sink Cut & Polish"},
                        {"price" : "100","name" : "Drop In Sink/Cooktop Cut Out"},
                        {"price" : "45","name" : "Outlet Cut Out"},
                        {"price" : "50","name" : "Vessel Bowl Cut Out"}]}
        
            $(document).ready(function(){
            /*var listItems= "";
            for (var i = 0; i < laborList.LaborTable.length; i++){
                listItems+= "<option value='" + laborList.LaborTable[i].price + "'>" + laborList.LaborTable[i].name + "</option>";
            }
            $("#laborOption").html(listItems);*/
            });    



            //
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

                totalCost = totalCost.toLocaleString('en', 2); 
                //parseFloat(totalCost).toFixed(2).toLocaleString('en');                      
                htmlEl.innerText = "$" + totalCost;
            }
            var btn = document.getElementById("btnCalculate");
            btn.onclick = function() {

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
                var quantitySelected = document.getElementById("inDown").value.replace('$', '');
                var graniteCost = valGranite * quantitySelected;
                
                //Calculates cost of edges
                var quantityEdges = document.getElementById("linFt").value.replace('$', '');
                var edgeSelect = document.getElementById("edgesOption");
                var valEdges = edgeSelect.options[edgeSelect.selectedIndex].value;
                var edgesCost = valEdges * quantityEdges;

                //Calculates cost of sink labor cutouts
                //var cutoutSelect = document.getElementById("laborOption");
                //var valCutout = cutoutSelect.options[cutoutSelect.selectedIndex].value;
                //var cutoutCost = valCutout * 1;

                

                var totalCost = graniteCost + edgesCost; //+ cutoutCost;
                console.log(totalCost);
                postPayments(totalCost);
            };
            
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