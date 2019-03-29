package tree;

import java.util.Scanner;
import java.util.Stack;

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
        
        int topLeft = 0;
        int topRight = 0;
        int [] stackLeft = new int[500];
        int [] stackRight = new int[500];
        int rootValue = 0;
        
        String [] nodes = data.split(" ");
        for(int level = 0, wl = 0, wr = 0; level <= maxHeight; level++) {
        	boolean slotLeft = false;
        	boolean slotRight = false;
        	for(String node : nodes) {
    			String [] nodeInfo = node.split(",");
    			if(Integer.parseInt(nodeInfo[1]) == level && ( Integer.parseInt(nodeInfo[2]) == wl || Integer.parseInt(nodeInfo[2]) == wr)) {
    				if(level == 0) {
    					rootValue = Integer.parseInt(nodeInfo[0]);
    					slotLeft = true;
    					slotRight = true;
    					break;
    				}
    				else {
    					if(Integer.parseInt(nodeInfo[2]) == wl) {
    						slotLeft = true;
    						stackLeft[topLeft] = Integer.parseInt(nodeInfo[0]);
    						topLeft++;
    					}
    					if(Integer.parseInt(nodeInfo[2]) == wr) {
    						slotRight = true;
    						stackRight[topRight] = Integer.parseInt(nodeInfo[0]);
    						topRight++;
    					}
    				}
    			}
    		}
        	if(slotLeft) {        		
        		wl -= 1;
        	}
        	if(slotRight) {        		
        		wr += 1;
        	}
    	}
        
        for(int i = topLeft - 1; i >= 0; i--) {
        	System.out.print(stackLeft[i] + " ");
        }
        System.out.print(rootValue + " ");
        for(int j = 0; j <= topRight - 1; j++) {
        	System.out.print(stackRight[j] + " ");
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
