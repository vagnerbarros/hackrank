package tree;

import java.util.Scanner;

public class TopView {
	
	static Node [] tops = new Node[500];
	static int heigth = 0;
	static int width = 0;
	static int maxHeight = 0;
	static int maxWidth = 0;
	static int minWidth = 100;
	static String data = "";
	
	public static void topViewAux(Node root) {
		
		if(root != null) {
            
            if(root.left != null) {
            	--width;
            	++heigth;
            	topViewAux(root.left);
            	--heigth;
            	++width;
            }
            
            data += root.data + "," + heigth + "," + width + " ";
            if(maxHeight < heigth) {
            	maxHeight = heigth;
            }
            if(maxWidth < width) {
            	maxWidth = width;
            }
            if(minWidth > width) {
            	minWidth = width;
            }
            
            if(root.right != null) {
            	++width;
            	++heigth;
            	topViewAux(root.right);
            	--heigth;
            	--width;
            }
        }
	}
	
	public static void topView(Node root) {
      
        topViewAux(root);
        
        String [] nodes = data.split(" ");
        int level = maxHeight;
        for(int wl = minWidth; wl <= maxWidth; wl++) {
        	
        	for(String node : nodes) {
    			String [] nodeInfo = node.split(",");
    			if(Integer.parseInt(nodeInfo[2]) == wl && Integer.parseInt(nodeInfo[1]) == level) {
    				System.out.println(nodeInfo[0] + " " + nodeInfo[1] + "|" + level + " " + nodeInfo[2]);
    			}
    		}
        	if(level > 0) {
				level--;
        	}
        	else {
        		level++;
        	}
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
        scan.close();
        topView(root);
    }	
}
