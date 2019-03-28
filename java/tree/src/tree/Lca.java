package tree;

import java.util.Scanner;

public class Lca {

	static Node [] parents = new Node[25];
	static int top = 0;
	static boolean found1 = false;
	
	public static Node lca(Node root, int v1, int v2) {
      	// Write your code here.
		if(root != null) {
			int value = found1 ? v2 : v1;
			if(root.data == value) {
				if(!found1) {
					found1 = true;
				}
				else {
					return parents[top];
				}
			}
			
			if(root.left != null) {
				lca(root.left, v1, v2);
			}
			
			if(root.right != null) {
				lca(root.right, v1, v2);
			}
			
			if(found1) {
				parents[top] = root;
				++top;
			}
		}
		return root;
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
      	int v1 = scan.nextInt();
      	int v2 = scan.nextInt();
        scan.close();
        Node ans = lca(root,v1,v2);
        System.out.println(ans.data);
    }
}
