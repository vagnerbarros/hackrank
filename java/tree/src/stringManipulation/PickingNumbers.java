package stringManipulation;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PickingNumbers {

	public static int pickingNumbers(List<Integer> a) {
		
		// Write your code here
		int size = 1;
		while(size < a.size()) {
			for(int start = 0; start <= size; start++) {
				System.out.print(a.get(start) + ", ");
			}
			size++;
			System.out.println();
		}
		
		return 0;
	}
	
	public static boolean isSequence(List<Integer> a) {
		
		boolean result = true;
		int last = a.get(0);
		for(int i = 1; i < a.size(); i++) {
			if(Math.abs(a.get(i) - last) > 1) {
				result = false;
			}
		}
		return result;
	}

	public static <BufferedWriter> void main(String[] args) {

		int [] arr = {4, 6, 5, 3, 3, 1};
		List<Integer> a = new ArrayList<Integer>();
		for(int elem : arr) {
			a.add(elem);
		}
		int result = pickingNumbers(a);
		System.out.println(result);
	}
}
