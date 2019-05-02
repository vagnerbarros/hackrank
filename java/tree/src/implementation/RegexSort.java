package implementation;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

class Person{
	
	String firstName;
	String email;
	
	public Person(String firstName, String email) {
		this.firstName = firstName;
		this.email = email;
	}
	
	public boolean isGmail() {
		if(this.email.matches("^[a-z0-9._%+-]+@gmail.com$")) {
			return true;
		}
		else {
			return false;
		}
	}
}

public class RegexSort {

	public static void printSorted(List<Person> people) {
		
		List<String> names = new ArrayList<String>();
		for(Person p : people) {
			if(p.isGmail()) {				
				names.add(p.firstName);
			}
		}
		Collections.sort(names);
		for(String name : names) {
			System.out.println(name);
		}
	}
	
	private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int N = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        List<Person> people = new ArrayList<Person>();
        for (int NItr = 0; NItr < N; NItr++) {
            String[] firstNameEmailID = scanner.nextLine().split(" ");

            String firstName = firstNameEmailID[0];
            String emailID = firstNameEmailID[1];
            
            Person p = new Person(firstName, emailID);
            people.add(p);
        }
        
        printSorted(people);

        scanner.close();
    }
}
