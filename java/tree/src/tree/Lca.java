package tree;

import java.util.Scanner;

public class Lca {

	static Node [] parents = new Node[25];
	static int top = 0;
	static boolean found = false;
	
	public static void lacAux(Node root, int value) {
		
		if(root != null) {
			if(root.data == value) {
				if(!found) {
					parents[top] = root;
					++top;
					found = true;
				}
			}
			
			if(root.left != null || root.right != null) {					
				if(!found) {					
					parents[top] = root;
					++top;
				}
			}
			
			if(root.left != null) {
				lacAux(root.left, value);
			}
			
			if(root.right != null) {
				lacAux(root.right, value);
			}
			
			if(root.left != null || root.right != null) {					
				if(!found) {					
					--top;
				}
			}
		}
	}
	
	public static Node lca(Node root, int v1, int v2) {
		
      	// Write your code here.
		lacAux(root, v1);
		Node [] parents1 = parents;
		int top1 = top;
		
		parents = new Node[25];
		top = 0;
		found = false;
		
		lacAux(root, v2);
		Node [] parents2 = parents;
		int top2 = top;
		
		Node min = null;
		if(top1 == 0 || top2 == 0) {
			if(top1 > 0) {
				min = parents1[0];
			}
			else if(top2 > 0) {
				min = parents2[0];
			}
			return min;
		}
		else {
			
			int level = -1;
			for(int i = top1 - 1; i >= 0; i--) {
				Node node1 = parents1[i];
				boolean exist = false;
				for(int j = top2 - 1; j >= 0; j--) {
					Node node2 = parents2[j];
					if(node1.data == node2.data) {
						exist = true;
						break;
					}
				}
				if(exist) {
					if(min == null) {
						min = node1;
						break;
					}
				}
			}
			
			return min;
		}		
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
