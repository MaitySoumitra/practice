
interface  A{
    public abstract void show();
}
class B implements A{
    public void show(){
        System.out.println("in abstract method");
    }
}
public class Abstaract {
    public static void main(String[] args) {
        A obj=new B();
        obj.show();
    }
}
