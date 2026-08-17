class A{
    public void show1(){
       
        System.out.println("A in show");
    }
}
class B extends A{
    public void show(){
        System.out.println("B in a show");
    }
}

public class Inheritance {
    public static void main(String[] args) {
        B obj=new B();
        obj.show();
        obj.show1();
    }
    
}
