package implementation;

import java.io.IOException;
import java.util.Scanner;

public class TaumBday {

	// Complete the taumBday function below.
    static long taumBday(long b, long w, long bc, long wc, long z) {

        long result = 0;
        if(bc > wc + z){
            result = ((w + b) * wc) + (b * z);
        }
        else if(wc > bc + z){
            result = ((b + w) * bc) + (w * z);
        }
        else{
            result = (b * bc) + (w * wc);
        }
        return result;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {

        long t = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int tItr = 0; tItr < t; tItr++) {
            String[] bw = scanner.nextLine().split(" ");

            long b = Long.parseLong(bw[0]);

            long w = Long.parseLong(bw[1]);

            String[] bcWcz = scanner.nextLine().split(" ");

            long bc = Long.parseLong(bcWcz[0]);

            long wc = Long.parseLong(bcWcz[1]);

            long z = Long.parseLong(bcWcz[2]);

            long result = taumBday(b, w, bc, wc, z);
            System.out.println(result);
        }


        scanner.close();
    }
}
