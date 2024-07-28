var votesDB = JSON.parse( localStorage.getItem( "vtsCast" ) || '{ "TM Selvaganapaty (DMK)" : 4, "Vignesh (ADMK)" : 3, "Annadurai (PMK)" : 2, "ManojKumar (NMK)" :1, "NOTA" : 0  }' );


function bttnHndlr() {
    votesDB[ document.forms[0].mps.value ]++;
    localStorage.setItem( "vtsCast", JSON.stringify( votesDB ) );
    drawBars();
    document.querySelector( 'input[name="mps"]:checked' ).checked = false;
}

var cnddtsLst = Object.keys( votesDB );

function createRadio(value, name, parentElem, checked = false) {
    const elem = document.createElement('input');
    elem.type = 'radio';
    elem.name = name;
    elem.id = value;
    elem.value = value;
    elem.checked = checked;
    parentElem.appendChild(elem);
    const lbl =	document.createElement( "label" );
    lbl.innerText = value;
    lbl.htmlFor = value;
    parentElem.appendChild( lbl );
    parentElem.appendChild( document.createElement( "br" ) );
}

for( var i=0; i<cnddtsLst.length; i++ ) {
    createRadio( cnddtsLst[i], "mps", document.forms[0] );
}

var tbl = document.getElementsByTagName( "tbody" )[0];
var pat = /\((.*)\)/;

function drawBars() {
    var rows = document.querySelectorAll( "table tr" );
    for( var i=0; i<rows.length; i++ ) {
	rows[i].remove();
    }
    totalVts = 0;
    for( var i=0; i<cnddtsLst.length; i++ ) 
	totalVts += votesDB[ cnddtsLst[i]];

    for( var i=0; i<cnddtsLst.length; i++ ) {
	var prty = pat.test( cnddtsLst[i] ) ? RegExp.$1 : cnddtsLst[i];
	var rndmClr = Math.floor( Math.random() * 15658734 ).toString(16);
	var width = votesDB[ cnddtsLst[i] ] / totalVts * 100;
	tbl.insertAdjacentHTML( 'beforeend', `<tr><td>${prty}</td><td><div style="background-color:${rndmClr}; width: ${width}%; height:20px;"></div></td><td>${votesDB[cnddtsLst[i]]}</td></tr>` );
    }
}

drawBars();
