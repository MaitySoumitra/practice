class Fifth{
    public int add(int n1, int n2, int n3){
        return n1+n2 +n3;
    }
    public int add(int n1, int n2){
        return n1+n2;
    }
    public double add(double n1, int n2){
        return n1+n2;
    }
}
public class Demon{
    public static void main(String a[]){
        Fifth fth=new Fifth();
        int result=fth.add(3, 4);
        System.out.println(result);
        int result1=fth.add(34, 2);
        System.out.println(result1);

    }
}
