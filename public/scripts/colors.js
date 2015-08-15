var percentage1 = document.getElementById("percentage1");
var percentage2 = document.getElementById("percentage2");
var percentage3 = document.getElementById("percentage3");
var percentage4 = document.getElementById("percentage4");
var percentage5 = document.getElementById("percentage5");
if (#{percentage1} <= 50) {
    
    percentage1.style.backgroundColor = "IndianRed";
} else if (#{percentage1} >= 80) {
    
    percentage1.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage1.style.backgroundColor = "CornflowerBlue";
}

if (#{percentage2} <= 50) {
    
    percentage1.style.backgroundColor = "IndianRed";
} else if (#{percentage2} >= 80) {
    
    percentage1.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage1.style.backgroundColor = "CornflowerBlue";
}
if (#{percentage3} <= 50) {
    
    percentage1.style.backgroundColor = "IndianRed";
} else if (#{percentage3} >= 80) {
    
    percentage1.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage1.style.backgroundColor = "CornflowerBlue";
}
if (#{percentage4} <= 50) {
    
    percentage1.style.backgroundColor = "IndianRed";
} else if (#{percentage4} >= 80) {
    
    percentage1.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage1.style.backgroundColor = "CornflowerBlue";
}

if (#{percentage5} <= 50) {
    
    percentage5.style.backgroundColor = "IndianRed";
} else if (#{percentage5} >= 80) {
    
    percentage5.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage5.style.backgroundColor = "CornflowerBlue";
}




var percentage1 = document.getElementById("percentage1");
var percentage2 = document.getElementById("percentage2");
var percentage3 = document.getElementById("percentage3");
var percentage4 = document.getElementById("percentage4");
var percentage5 = document.getElementById("percentage5");
if (#{percentage1} <= 50) {
    
    percentage1.style.backgroundColor = "IndianRed";
} else if (#{percentage1} >= 80) {
    
    percentage1.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage1.style.backgroundColor = "CornflowerBlue";
}

if (#{percentage2} <= 50) {
    
    percentage1.style.backgroundColor = "IndianRed";
} else if (#{percentage2} >= 80) {
    
    percentage1.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage1.style.backgroundColor = "CornflowerBlue";
}
if (#{percentage3} <= 50) {
    
    percentage1.style.backgroundColor = "IndianRed";
} else if (#{percentage3} >= 80) {
    
    percentage1.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage1.style.backgroundColor = "CornflowerBlue";
}
if (#{percentage4} <= 50) {
    
    percentage1.style.backgroundColor = "IndianRed";
} else if (#{percentage4} >= 80) {
    
    percentage1.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage1.style.backgroundColor = "CornflowerBlue";
}

if (#{percentage5} <= 50) {
    
    percentage5.style.backgroundColor = "IndianRed";
} else if (#{percentage5} >= 80) {
    
    percentage5.style.backgroundColor = "MediumSeaGreen";
} else {
    
    percentage5.style.backgroundColor = "CornflowerBlue";
}

function validateRate1() {
    var x = document.forms["rating"]["rating1"].value;
    var y = document.forms["rating"]["comment1"];
    if (x >= 8 || x <= 5) {
        y.required = true;
    } else {
        y.required = false;
    }
}
function validateRate2() {
    var x = document.forms["rating"]["rating2"].value;
    var y = document.forms["rating"]["comment2"];
    if (x >= 8 || x <= 5) {
        y.required = true;
    } else {
        y.required = false;
    }
}
function validateRate3() {
    var x = document.forms["rating"]["rating3"].value;
    var y = document.forms["rating"]["comment3"];
    if (x >= 8 || x <= 5) {
        y.required = true;
    } else {
        y.required = false;
    }
}
function validateRate4() {
    var x = document.forms["rating"]["rating4"].value;
    var y = document.forms["rating"]["comment4"];
    if (x >= 8 || x <= 5) {
        y.required = true;
    } else {
        y.required = false;
    }
}
function validateRate5() {
    var x = document.forms["rating"]["rating5"].value;
    var y = document.forms["rating"]["comment5"];
    if (x >= 8 || x <= 5) {
        y.required = true;
    } else {
        y.required = false;
    }
}