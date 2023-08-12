import java.util.Scanner;

public class task92 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        System.out.print("Enter an index: ");
        int indexInput = scanner.nextInt();

        scanner.close();

        String[] words = inputString.split(" ");

        if (indexInput >= 0 && indexInput < words.length) {
            String wordAtIndex = words[indexInput];
            System.out.println("Word at index " + indexInput + ": " + wordAtIndex);
        } else {
            System.out.println("Invalid index.");
        }
    }
}
