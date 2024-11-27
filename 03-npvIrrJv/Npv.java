import java.io.*;

class Npv {
    public static void main( String args[] ) throws Exception {
        String prompts[] = {
            "Initial cash investment? ",
            "Year one cash inflow? ",
            "Incremental cash flow? ",
            "Project lifetime? ",
            "Rate of return? "
        };
        float arry[] = new float[5];
        float c0, c1, d, n, r, npv;
        
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
        System.out.format( "The projects' npv value is %f\n", npv );
    }
}
