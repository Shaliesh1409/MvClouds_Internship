import java.util.Scanner;
class task7{
    public static void main(String[]args){
        Scanner input=new Scanner(System.in);
        System.out.println("enter the value of a : ");
        int a=input.nextInt();
        Scanner input2=new Scanner(System.in);
        System.out.println("enter the value of b : ");
        int b=input2.nextInt();
        a=a+b;
        b=a-b;
        a=a-b;
        System.out.println("a : "+a);
        System.out.println("b : "+b);

    }
}