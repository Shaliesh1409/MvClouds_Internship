interface Backend {

  public void connectServer();
}

class Frontend {

  public void responsive(String str) {
    System.out.println(str + " can also be used as frontend.");
  }
}

class task12 extends Frontend implements Backend {

  String language = "Java";
  public void connectServer() {
    System.out.println(language + " can be used as backend language.");
  }

  public static void main(String[] args) {

    task12 java = new task12();

    java.connectServer();

    java.responsive(java.language);
  }

}