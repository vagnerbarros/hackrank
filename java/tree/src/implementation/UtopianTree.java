package implementation;

import java.io.IOException;
import java.util.Scanner;

public class UtopianTree {

	static int utopianTree(int n) {
		
		int size = 1;
		boolean duplicate = true;
		while(n > 0) {
			if(duplicate) {
				size *= 2;
			}
			else {
				size++;
			}
			duplicate = !duplicate;
			n--;
		}
		
		return size;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        

        int t = scanner.nextInt();

        for (int tItr = 0; tItr < t; tItr++) {
            int n = scanner.nextInt();

            int result = utopianTree(n);
            System.out.println(result);
        }

        scanner.close();
    }
}
