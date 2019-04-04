package implementation;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class ClimbingLeaderboard {

	// Complete the climbingLeaderboard function below.
    static int[] climbingLeaderboard(int[] scores, int[] alice) {

    	int position = 1;
    	int [] ranking = new int[scores.length + 1];
    	ranking[position] = scores[0];
    	for(int i = 1; i < scores.length; i++) {
    		if(scores[i] < ranking[position]) {
    			position++;
    			ranking[position] = scores[i];
    		}
    	}
    	
    	int [] result = new int[alice.length];
    	for(int i = 0; i < alice.length; i++) {    		
    		for(int j = position; j > 0; j--) {
    			if(alice[i] <= ranking[j]) {
    				if(alice[i] < ranking[j]) {    					
    					result[i] = j + 1;
    				}
    				else {
    					result[i] = j;
    					if(i + 1 < alice.length && alice[i + 1] > alice[i]) {                    
                            position = j;
                        }
    				}
    				break;
    			}
    			else {
    				if(j == 1) {
    					result[i] = 1;
    				}
    			}
    		}
    	}
    	
    	return result;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        
//    	int [] scores = {100, 100, 50, 40, 40, 20, 10};
//    	int [] alice = {5, 25, 50, 120};
    	
//    	int [] scores = {100, 90, 90, 80, 75, 60};
//    	int [] alice = {50, 65, 77, 90, 102};
    	
//    	int [] scores = {100, 100, 50, 40, 40, 20, 10};
//    	int [] alice = {5, 25, 50, 120};
    	
    	int [] scores = {100, 90, 90, 80, 75, 60};
    	int [] alice = {50, 65, 77, 90, 102};
    	
//    	int [] scores = {1};
//    	int [] alice = {1, 1};

        int[] result = climbingLeaderboard(scores, alice);
        for(int r : result) {        	
        	System.out.print(result + " ");
        }
    }
}
