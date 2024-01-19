var firstElt = document.getElementById( "first" );
var lastElt = document.getElementById( "last" );
var errorElt = document.getElementById( "error" );
var tableElt = document.getElementById( "table" );

function deleteRow() {
  tableElt.deleteRow( event.target.getAttribute( "data-id" ) );
}

function insertRow() {
  if( firstElt.value && lastElt.value ) {
    errorElt.style.display = "none";
    var rowNmbr = tableElt.rows.length;
    tableElt.insertRow( rowNmbr );
    for( var i=0; i<3; i++ ) tableElt.rows[ rowNmbr ].insertCell( i );
    tableElt.rows[ rowNmbr ].cells[ 0 ].innerHTML = firstElt.value;
    tableElt.rows[ rowNmbr ].cells[ 1 ].innerHTML = lastElt.value;
    tableElt.rows[ rowNmbr ].cells[ 2 ].innerHTML = `<img src="trash.svg" data-id=${rowNmbr} onclick="deleteRow()"></img>`;
    firstElt.value = "";
    lastElt.value = "";
  } else {
    errorElt.style.display = "block";
  }
}
