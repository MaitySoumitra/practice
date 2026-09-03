public class Palindrome {
    public static void main(String[] args) {
        int arr[]={1,2,3,2,1};
        for(int i=0; i<arr.length; i++){
            for(int j=arr.length-1;j<0; j++){
                int temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
        System.err.println(arr);
    }
}
