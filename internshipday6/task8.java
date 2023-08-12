import java.util.List;
import java.util.Arrays;

public class task8 {
    public static boolean containsonlyoddnumber(List<Integer> numbers) {
        for (int number : numbers) {
            if (number % 2 == 0) {
                return false;
            }
        }
            return true;
        }
    


    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(3, 5, 7,12, 9);
        boolean result = containsonlyoddnumber(numbers);
        if (result == true) {
            System.out.println("the list contains only odd numbers");
        } else {
            System.out.println("The list does not contain only odd numbers.");
        }
    }

}
