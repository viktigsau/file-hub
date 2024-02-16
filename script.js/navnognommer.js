const navnognommer = [
    {navn: "bob", nommer: "33004"},
    {navn: "stuart", nommer: "33005"},
    {navn: "kevin", nommer: "33014"},
    {navn: "tina", nommer: "33030"},
    {navn: "kyle", nommer: "33032"},
    {navn: "gru", nommer: "33038"},
    {navn: "herb", nommer: "33060"},
    {navn: "walter", nommer: "33050"},
    {navn: "sumo", nommer: "33037"},
    {navn: "walter jr", nommer: "33029"}
];

function calcNam(num) {
    for (i=0;i<navnognommer.length;i++) {
        if (navnognommer[i].nommer == num) {
            return navnognommer[i];
        };
    };

    return null;
};

function calcNum(nam) {
    for (i=0;i<navnognommer.length;i++) {
        if (navnognommer[i].navn == nam) {
            return navnognommer[i];
        };
    };

    return null;
};

function checkAndUpdate(type) {
    if (type == 1) {
        const nam = calcNam(document.getElementById("nommer").value)
        if (nam) {
            document.getElementById("navnognommeroutput").innerHTML = nam.navn + " = " + nam.nommer;
            document.getElementById("nommer").value = "";
            return;
        };
        document.getElementById("navnognommeroutput").innerHTML = "beklager finner ikke " + document.getElementById("nommer").value; 
    };
    if (type == 0) {
        const num = calcNum(document.getElementById("navn").value)
        if (num) {
            document.getElementById("navnognommeroutput").innerHTML = num.navn + " = " + num.nommer;
            document.getElementById("navn").value = "";
            return;
        };
        document.getElementById("navnognommeroutput").innerHTML = "beklager finner ikke " + document.getElementById("navn").value; 
    };
};