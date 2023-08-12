/*public class task11 {
    public static void main(String[] args) {
        int number= 12345;
        int reverse = 0;
        int remainder;
        while(number!=0){
            remainder=number%10;
            reverse=reverse*10+remainder;
            number=number/10;
        }
        System.out.println(reverse);

    }
}
*/
public class task11 {
    public static void main(String[] args) {
        String input = "123.45";
        String output = reverseDecimal(input);
        System.out.println("Input : " + input);
        System.out.println("Output: " + output);
    }

    public static String reverseDecimal(String input) {
        String[] parts = input.split("\\.");

        if (parts.length != 2) {
            return "Invalid input";
        }

        String integerPart = parts[0];
        String fractionalPart = parts[1];

        String reversedIntegerPart = new StringBuilder(integerPart).reverse().toString();
        System.out.println(reversedIntegerPart);
        String reversedOutput = fractionalPart + "." + reversedIntegerPart;

        return reversedOutput;
    }
}
