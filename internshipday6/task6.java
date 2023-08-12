class morning {
    void morning() {
        System.out.println("good morning");
    }
}

class afternoon extends morning {
    void afternonn() {
        System.out.println("good afternoon");
    }
}
class evening extends afternoon{
    void evening(){
        System.out.println("good evening");
    }
}
class night extends evening{
    void night(){
        System.out.println("good night");
    }
}
public class task6{
    public static void main(String[] args){
        night sleep=new night();
        sleep.night();
        sleep.evening();
        sleep.afternonn();
        sleep.morning();
    }
}