import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Students{
    int age;
    String name;
    public Students(int age, String name) {
        this.age = age;
        this.name = name;
    }
    public String toString() {
        return "students [age=" + age + ", name=" + name + ", toString()=" + super.toString() + "]";
    }
}

public class Demo5{
    public static void main(String[] args) {

    Comparator<Students> comp=(i,j)->(i.age>j.age)? 1:-1;
    
       List<Students> stds=new ArrayList<>();
       stds.add(new Students(17, "Subrata"));
       stds.add(new Students(12, "Raju"));
       stds.add(new Students(23, "Paresh"));
       stds.add(new Students(19, "Paresh"));

        Collections.sort(stds, comp);
       for(Students s:stds){
         System.out.println(s);
       }
      
    }
}