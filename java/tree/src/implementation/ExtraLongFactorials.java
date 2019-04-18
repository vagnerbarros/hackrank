package implementation;

import java.math.BigInteger;
import java.util.Scanner;

public class ExtraLongFactorials {

	// Complete the extraLongFactorials function below.
    static void extraLongFactorials(int n) {

    	BigInteger result = new BigInteger("1");
    	for(int i = n; i > 1; i--) {
    		result = result.multiply(BigInteger.valueOf(i));
    	}
    	System.out.println(result);
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        extraLongFactorials(n);

        scanner.close();
    }
}
