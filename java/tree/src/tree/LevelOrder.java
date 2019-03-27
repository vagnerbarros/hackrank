package tree;

//import java.util.ArrayList;
//import java.util.Comparator;
//import java.util.List;
import java.util.Scanner;

class Element{
	
	int data;
	int level;
	
	Element(int data, int level) {
		this.data = data;
		this.level = level;
	}
}

public class LevelOrder {
	
	static int level = 0;
	static String elements = "";
	
	public static void levelOrder(Node root) {
	      
	    if(root != null) {
	    	
	    	elements = elements + root.data + "," + level + " ";
	    	if(root.left != null) {
	    		++level;
	    		levelOrder(root.left);
	    	}
	    	
	    	if(root.right != null) {
	    		++level;
	    		levelOrder(root.right);
	    	}
	    	
	    	--level;
	    }
	    
	    if(level < 0) {	    	
	    	String [] pairs = elements.split(" ");
	    	java.util.List<Element> elements = new java.util.ArrayList<Element>();
	    	for(String pair : pairs) {
	    		String [] nodeOrder = pair.split(",");
	    		Element element = new Element(Integer.parseInt(nodeOrder[0]), Integer.parseInt(nodeOrder[1]));
	    		elements.add(element);
	    	}
	    	elements.sort(new java.util.Comparator<Element>() {
				@Override
				public int compare(Element e1, Element e2) {
					// TODO Auto-generated method stub
					return e1.level - e2.level;
				}
	    	});
	    	
	    	for(Element e : elements) {
	    		System.out.print(e.data + " ");
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
        levelOrder(root);
    }	
}
