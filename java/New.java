
// class A implements Runnable{
//     public void run(){
//        for(int i=0; i<=5; i++){
//         System.out.println("Hi");
//          try {
//             Thread.sleep(10);
//         } catch (InterruptedException e) {e.printStackTrace();}
//        }
//     }
// }
// class B implements Runnable {
//     public void run(){
//        for(int i=0; i<=5; i++){
//         System.out.println("Hello");
//         try {
//             Thread.sleep(10);
//         } catch (InterruptedException e) {e.printStackTrace();}
//        }
//     }
// }

public class New {
    public static void main(String[] args) {
        Runnable obj =()-> {
                for (int i = 0; i <= 5; i++) {
                    System.out.println("Hi");
                    try {
                        Thread.sleep(1);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
        };
        Runnable obj1 = ()-> {
                for (int i = 0; i <= 5; i++) {
                    System.out.println("Hello");
                    try {
                        Thread.sleep(1);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            
        };
        Thread t1 = new Thread(obj);
        Thread t2 = new Thread(obj1);
        t1.start();
        t2.start();
    }
}
