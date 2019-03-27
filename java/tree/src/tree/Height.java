package tree;

import java.util.Scanner;

public class Height {

	static int h = 0;
	static int max = 0;
	
	public static int height(Node root) {
      	// Write your code here.
		
		if(h > max) {
			max = h;
		}
		
		if(root != null) {	
			if(root.left != null) {
				h++;
				height(root.left);
			}
			
			if(root.right != null) {
				h++;
				height(root.right);
			}
			
			--h;
		}
		return max;		
    }

	public static Node insert(Node root, int data) {
        if(root == null) {
            return new Node(data);
        } else {
            Node cur;
            if(data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();
        Node root = null;
        while(t-- > 0) {
            int data = scan.nextInt();
            root = insert(root, data);
        }
        scan.close();
        int height = height(root);
        System.out.println(height);
    }	
}
