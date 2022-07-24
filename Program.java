package static_nonstatic;

public class Program {
	
	public int num1=10;
	public static int num2 = 20;

	public static void main(String[] args) {

		//System.out.println("Num1 : "+num1); //NOT OK Give error
		System.out.println("Num2 : "+num2);
		
		//• Using instance, we can use non static members inside static method.
		Program p=new Program();
		
		System.out.println("Num1 : "+p.num1); 
	}

}
