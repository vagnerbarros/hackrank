package implementation;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PickingNumbers {
	
	public static int pickingNumbers(List<Integer> a){
		
		int max = 0;
		int [] frequence = new int[100];
		for(int i = 0; i < a.size(); i++) {
			frequence[a.get(i)]++;
		}
		
		for(int j = 2; j < 100; j++) {
			int sequence = frequence[j] + frequence[j - 1];
			if(max < sequence) {
				max = sequence;
			}
		}
		return max;
	}

	public static <BufferedWriter> void main(String[] args) {

//		int [] arr = {4, 6, 5, 3, 3, 1};
//		int [] arr = {1, 2, 2, 3, 1, 2};
		int [] arr = {1, 1, 2, 2, 4, 4, 5, 5, 5};
		List<Integer> a = new ArrayList<Integer>();
		for(int elem : arr) {
			a.add(elem);
		}
		int result = pickingNumbers(a);
		System.out.println(result);
	}
}
