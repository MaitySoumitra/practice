class Music{
    public void playMusic(){
        System.out.println("Play Music...");
    }
    public String buyPen(int cost){
        if(cost>=30)
            return "Buy a pen";

        return "Nothing";
    }
}
public class fourth{
    public static void main(String args[]){
        Music mc=new Music();
        mc.playMusic();
        String str=mc.buyPen(20);
        System.out.println(str);
    }
}