enum Status{
    Running, Failed, Pending, Success
}

public class Enum {
    public static void main(String[] args) {
        Status s=Status.Success;
        switch (s) {
            case Pending:
                System.out.println("processing");
                break;
            case Running:
                System.out.println("almost completed");
                break;
            case Failed:
                System.out.println("failed");
                break;
        
            default:
                System.out.println("done");
                break;
        }
        
    }
}
