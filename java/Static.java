//static keyword

class Human{
    String brand;
    int price;
    //default 
    static String name;

    public void showData(){
        System.out.println(brand + " : "+ price+ ":"+ name);
    }
    public static void showData1(String brand, int price){
        System.out.println(brand + " : "+ price+ " : "+ name);
    }

}

public class Static {
    public static void main(String[] args) {
        Human obj=new Human();
        obj.brand="Apple";
        obj.price=1600;
        Human.name="Mobile";
        obj.showData();
        Human obj1=new Human();
        obj1.brand="Samsung";
        obj1.price=1200;
        Human.name="Mobile";
        Human.showData1(obj1.brand, obj1.price);
    }
}
