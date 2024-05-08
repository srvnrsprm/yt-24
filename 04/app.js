var vtsMp = localStorage.getItem( "vtsMp" );
vtsMp = vtsMp ? JSON.parse(vtsMp) :{
    "Selva Ganapaty(DMK)" : 5,
    "Vignesh(ADMK)" : 7,
    "Annadurai(BJP)" : 3,
    "Someone(NTK)" : 2
};
var cnddtsLst = Object.keys( vtsMp );
var frm = document.forms[0];
var tbl = document.querySelector( "tbody" );
for( var i=0; i<cnddtsLst.length; i++ ) {
    frm.insertAdjacentHTML( "afterBegin", `<label for=${cnddtsLst[i]}>${cnddtsLst[i]}</label><br/>` );
    frm.insertAdjacentHTML( "afterBegin", `<input id=${cnddtsLst[i]} value=${cnddtsLst[i]} name="prty" type="radio"/>` );
}

function putVote() {
    vtsMp[ frm.prty.value ]++;
    localStorage.setItem( "vtsMp", JSON.stringify(vtsMp) );
    drawBars();
}

var prtyRgx = /\((.*)\)/;
function drawBars() {
    var ttlVts = 0;
    for( var i=0; i<cnddtsLst.length; i++ ) {
        ttlVts += vtsMp[ cnddtsLst[i] ];
    }
    var trows = document.querySelectorAll( "tbody tr" );
    for( var i=0; i<trows.length; i++ ) {
        trows[i].remove();
    }
    for( var i=0; i<cnddtsLst.length; i++ ) {
        var color = Math.round( Math.random() * 0xffffff ).toString(16).padEnd( 6, '0' );
        var wdth = Math.round( vtsMp[ cnddtsLst[i] ] / ttlVts * 100 );
        var prtyNm = prtyRgx.test( cnddtsLst[i] ) ? RegExp.$1: cnddtsLst[i];
        tbl.insertAdjacentHTML( "afterBegin", `<tr><td>${prtyNm}</td><td><div style="background-color:${color};width:${wdth};height:20px;"></div></td><td>${vtsMp[cnddtsLst[i]]}</td></tr>` );
    }
}
    
drawBars();


