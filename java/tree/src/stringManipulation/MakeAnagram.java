package stringManipulation;

import java.io.IOException;
import java.util.Scanner;

public class MakeAnagram {

	static int makeAnagram(String a, String b) {
		
		StringBuilder stringA = new StringBuilder(a);
		StringBuilder stringB = new StringBuilder(b);
		
		boolean done = false;
		while(!done) {
			done = true;
			for(int i = 0; i < stringA.length(); i++) {
				for(int j = 0; j < stringB.length(); j++) {
					if(stringA.charAt(i) == stringB.charAt(j)) {
						stringA.deleteCharAt(i);
						stringB.deleteCharAt(j);
						done = false;
						break;
					}
				}
			}
		}
		return stringA.length() + stringB.length();
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        
        String a = scanner.nextLine();
        String b = scanner.nextLine();

        int res = makeAnagram(a, b);
        System.out.println(res);
        
        scanner.close();
    }
}
