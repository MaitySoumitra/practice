//Example of Encapsulation

class Demo{
    private String name;
    private int marks;
    public void setData(String name, int marks){
        this.name=name;
        this.marks=marks;
    }
    public void getData(){
        System.out.println(name + " : " + marks);
    }
}

public class Encapsulation {
    public static void main(String a[]){
        Demo obj=new Demo();
        obj.setData("Soumitra", 33);
        obj.getData();
        
    }
}
