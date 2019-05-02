package implementation;

import java.util.Scanner;

public class CheckPrime {

	public static boolean checkPrime(int n){

        if(n < 2) {
        	return false;
        }
        if(n == 2 || n == 3) {
        	return true;
        }
        if(n % 2 == 0 || n % 3 == 0) {
        	return false;
        }
        long sqrt = (long) Math.sqrt(n) + 1;
        for(long i = 6L; i <= sqrt; i += 6) {
        	if(n % (i - 1) == 0 || n% (i + 1) == 0) {
        		return false;
        	}
        }
        return true;
    }
	
	private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        /* Enter your code here. */
        
    	long t = scanner.nextInt();

        for (int line = 0; line < t; line++) {
        	
            int n = scanner.nextInt();
            boolean isPrime = checkPrime(n);
            if(isPrime) {
            	System.out.println("Prime");
            }
            else {
            	System.out.println("Not prime");
            }
        }

        scanner.close();
    }
}
