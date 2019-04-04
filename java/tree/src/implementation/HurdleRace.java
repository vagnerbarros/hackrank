package implementation;

public class HurdleRace {

	// Complete the hurdleRace function below.
	static int hurdleRace(int k, int[] height) {

		int max = 0;
		for(int i = 0; i < height.length; i++) {
			if(max < height[i]) {
				max = height[i];
			}
		}
		
		if(max > k) {
			return max - k;
		}
		else {
			return 0;
		}
	}


	public static void main(String[] args) {


//		int k = 4;
//		int [] height = {1, 6, 3, 5, 2};
		
//		int k = 7;
//		int [] height = {2, 5, 4, 5, 2};
		
		int k = 1;
		int [] height = {1, 2, 3, 3, 2};
		
		
		int result = hurdleRace(k, height);
		System.out.println(result);
	}
}
