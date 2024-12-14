var ctiesMp = {
  Australia : [ "Sydney", "melbourne", "Canberra", "Perth", "Brisbane" ],
  France : [ "Paris", "Lyons", "Nice", "Dijon" ],
  Japan : [ "Tokyo", "Kyoto", "Osaka", "Nara" ],
  Newzealand : [ "Auckland", "Wellington", "Christchurch", "Dunedin", "Queenstown" ]
};

var cntrySlct = document.forms[0].cntry;
var ctySlct = document.forms[0].cty;
var dlgBox = document.getElementById( "dlg" );

// new Option( optionText, optionValue )
function addOptions( ctiesLst ) {
  for( var i=0;i<ctySlct.options.length; i++ )
    ctySlct.options[i] = null;
  for( var i=0; i<ctiesLst.length; i++ )
    ctySlct.options[i] = new Option( ctiesLst[i], ctiesLst[i] );
}

function shwDlg() {
  dlgBox.insertAdjacentHTML( "afterbegin", `Voila! you are visiting <b>${ctySlct.value}</b> in <b>${cntrySlct.value}</b><br/>` );
  dlgBox.showModal();
}

var cntriesLst =Object.keys( ctiesMp );
for( var i=0; i<cntriesLst.length; i++ )
  cntrySlct.options[i] = new Option( cntriesLst[i], cntriesLst[i] );
addOptions( ctiesMp[ cntrySlct.value ] );
