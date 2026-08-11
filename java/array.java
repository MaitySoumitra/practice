public class array {
    public static void main(String a[]){
        int nums[]=new int[3];
        
        for(int i=0; i<nums.length;i++){
            nums[i]=(int)(Math.random()*10);
            
        }
        for(int n:nums){
            System.out.println(n);
        }
    }
}
