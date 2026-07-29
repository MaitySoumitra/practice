class Casting{
        int i=100;
        byte b=(byte) i;
        byte by=10;
        int in=by;
    
}

class AddTwoNumber{
    int a=10;
    int b=20;
    int result=a+b;
}

public class test{
public static void main(String args[]){
    Casting c=new Casting();
    AddTwoNumber ad=new AddTwoNumber();
        System.out.println(c.b);
        System.out.println(ad.result);
    }
}
