import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

	public static long optimizeCost(long b, long w, long x, long y, long z) {
		if (x == y) {
			return calcStraightCost(b, w, x, y);
		}

		if ((y + z) < x) {
			return (b * (y + z)) + (w * y);
		}

		if ((x + z) < y) {
			return (b * x) + (w * (x + z));
		}

		return calcStraightCost(b, w, x, y);
	}

	public static long calcStraightCost(long b, long w, long x, long y) {
		return (b * x) + (w * y);
	}

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int t;
		long cost;
		long b,w,x,y,z;
		t = in.nextInt();
		for (int i=0;i<t;i++) {
			b = in.nextLong();
			w = in.nextLong();
			x = in.nextLong();
			y = in.nextLong();
			z = in.nextLong();
			cost = optimizeCost(b, w, x, y, z);
			System.out.println(cost);
		}
	}
}