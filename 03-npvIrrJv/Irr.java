import java.io.*;

class Irr {
    public static void main( String args[] ) throws Exception {
        String prompts[] = {
            "Initial cash investment? ",
            "Year one cash inflow? ",
            "Incremental cash flow? ",
            "Project lifetime? ",
        };
        float arry[] = new float[5];
        float c0, c1, d, n, r=0.18f, npv, step, lstNpv, irr;
        
        BufferedReader br = new BufferedReader( new InputStreamReader( System.in ) );
        for( int i=0; i<prompts.length; i++ ) {
            System.out.println( prompts[i] );
            arry[i] = Float.parseFloat( br.readLine() );
        }
        c0 = arry[ 0 ]; c1 = arry[ 1 ]; d = arry[ 2 ];
        n = arry[ 3 ]; r = arry[ 4 ];

        npv = -c0;
        for( int i=1; i<=n; i++ ) {
            npv += (c1 + (i-1)*d ) / Math.pow( 1+r, i );
        }
        step = npv < 0 ? -.01f: .01f;
        lstNpv = 0;

        /* Xor of two numbers is positive means the two numbers are of 
           same signature */
        while( ( (int) npv ^ (int) (lstNpv) ) >= 0 ) {
            r += step;
            lstNpv = npv;
            npv = -c0;
             for( int i=1; i<=n; i++ ) {
                 npv += (c1 + (i-1)*d ) / Math.pow( 1+r, i );
             }
        }
        irr = (Math.abs(npv) > Math.abs( lstNpv ) ? r-step : r ) * 100;

        System.out.println( "The project's internal rate of return is " + irr );
    }
}
