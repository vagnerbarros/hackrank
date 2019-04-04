package implementation;

public class DesignerPdfViewer {

	static int designerPdfViewer(int[] h, String word) {

		char [] w = word.toCharArray();
		
		int max = 0;
		for(int i = 0; i < w.length; i++) {
			int code = (int) w[i];
			int position  = code - 97;
			if(max < h[position]) {
				max = h[position];
			}
		}
		
		return max * word.length();
    }
	
	public static void main(String[] args) {
		
		int [] h = {1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7};
		String w = "zaba";
		
		int area = designerPdfViewer(h, w);
		System.out.println(area);
	}
}
