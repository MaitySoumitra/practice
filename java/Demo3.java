import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class Demo3 {
    public static void main(String[] args) {
        // Collection<Integer> nums=new ArrayList<Integer>();
        // List<Integer> nums=new ArrayList<Integer>();
        // Set<Integer> nums=new HashSet<Integer>();
        Set<Integer> nums=new TreeSet<Integer>();

        nums.add(64);
        nums.add(54);
        nums.add(24);
        nums.add(34);
        // for(int n: nums){
        //     System.out.println(n);
        // }
        
        Iterator<Integer> values=nums.iterator();
        while(values.hasNext()){
            System.out.println(values.next());
        }

    }
    
}
