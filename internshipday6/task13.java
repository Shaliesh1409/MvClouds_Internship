public class task13 {
    public static void main(String[] args) {
  
      StringBuffer str = new StringBuffer();
  
      str.append("Java");
      str.append(" is");
      str.append(" popular.");
      System.out.println("StringBuffer: " + str);

      StringBuffer str2 = new StringBuffer();
      str2.append("Java");
      str2.append(" is");
      str2.append(" awesome.");
      System.out.println("StringBuffer2: " + str2);

      StringBuffer str3 = new StringBuffer();

      str3.append("Java");
      str3.append(" is");
      str3.append(" wide");
      System.out.println("StringBuffer: " + str3);
  
  
     str.delete(0, str.length());
      System.out.println("Updated StringBuffer: " + str);

      str2.setLength(0);
      System.out.println("Updated StringBuffer2: " + str2);

      str3 = new StringBuffer();
      System.out.println("Updated StringBuffer: " + str3);
  
  
    }
  }
    
