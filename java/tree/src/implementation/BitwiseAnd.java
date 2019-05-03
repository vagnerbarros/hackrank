package implementation;

import java.util.Scanner;

public class BitwiseAnd {

	public static void maxAnd(int n, int k) {
		
		int max = 0;
		
		for(int a = 1; a <= n - 1; a++) {
			for(int b = a + 1; b <= n; b++) {
				int and = a & b;
				if(and < k) {
					if(max < and) {
						max = and;
					}
				}
			}
		}
		System.out.println(max);
	}
	
	private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int t = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int tItr = 0; tItr < t; tItr++) {
            String[] nk = scanner.nextLine().split(" ");

            int n = Integer.parseInt(nk[0]);
            int k = Integer.parseInt(nk[1]);
            
            maxAnd(n, k);
        }

        scanner.close();
    }
}
