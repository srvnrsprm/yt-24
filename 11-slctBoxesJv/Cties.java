import java.util.*; 
import java.awt.*;
import java.awt.event.*; 

class Cties extends Frame implements ItemListener {
	java.awt.List cntriesLst, ctiesLst;
	MyCanvas cc;
	static HashMap<String,String[]> hm;

	public void makeCtyMap( ) {
		hm = new HashMap<String, String[]>();
		String cties[] = { "Sydney", "Melbourne", "Canberra", "Perth", "Brisbane" };
		hm.put( "Australia", cties );
		String cties1[] = { "Paris", "Lyons", "Nice", "Brisbane" };
		hm.put( "France", cties1 );
		String cties2[] = { "Tokyo", "Kyoto", "Osaka", "Nara" };
		hm.put( "Japan", cties2 );
		String cties3[] = { "Auckland", "Wellington", "Christchurch", "Dunedin", "Queenstown" };
		hm.put( "New Zealand", cties3 );
	}

	public void itemStateChanged( ItemEvent ie ) {
		if( ie.getSource() == cntriesLst ) {
			ctiesLst.removeAll();
			String cntry = cntriesLst.getSelectedItem();
			String cties[] = hm.get( cntry );
			for( String cty: cties )
				ctiesLst.add( cty );	
		} else {
			System.out.format( "%30s, %s\n", "The selected country is ", cntriesLst.getSelectedItem() );
			System.out.format( "%30s, %s\n", "The selected city is ", ctiesLst.getSelectedItem() );
		}
		cc.repaint();
	}

	public Cties() {
		setSize( 300, 300 );
		setVisible( true );
		setLocation( 200, 200 );
		addWindowListener( new WindowAdapter() {
				public void windowClosing( WindowEvent e ) {
					System.exit( 0 );
				}
		});
		makeCtyMap( );
		Set<String>cntries = hm.keySet();
		cntriesLst = new java.awt.List();
		ctiesLst = new java.awt.List();
		for( String s : cntries ) 
			cntriesLst.add( s );
		setLayout( new GridLayout(3,1) );
		cc = new MyCanvas();
		add( cntriesLst );
		add( ctiesLst );
		add( cc );
		cntriesLst.addItemListener( this );
		ctiesLst.addItemListener( this );
	}

	class MyCanvas extends Canvas {
		public MyCanvas() {
			setSize( 100, 100 );
		}

		public void paint( Graphics g ) {
			g.drawString( "The selected country is " + cntriesLst.getSelectedItem(), 10, 20 );
			g.drawString( "The selected city is " + ctiesLst.getSelectedItem(), 10, 40 );
		}
	}

	public static void main( String args[] ) throws Exception {
	   	new Cties();	
	}
}
