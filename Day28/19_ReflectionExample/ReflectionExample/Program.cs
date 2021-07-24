using System;
using System.Reflection;

namespace ReflectionExample
{
    public class MyClass
    {
        public int AddNumb(int numb1, int numb2)
        {
            int result = numb1 + numb2;
            return result;
        }

    }

    class MyMainClass
    {
        public static int Main()
        {
            Console.WriteLine("\nReflection.MethodInfo");
            // Create MyClass object
            MyClass myClassObj = new MyClass();
            // Get the Type information.
            Type myTypeObj = myClassObj.GetType();
            // Get Method Information.
            MethodInfo myMethodInfo = myTypeObj.GetMethod("AddNumb");
            object[] mParam = new object[] { 5, 10 };
            // Get and display the Invoke method.
            Console.Write("\nFirst method - " + myTypeObj.FullName + " returns " +
                                 myMethodInfo.Invoke(myClassObj, mParam) + "\n");

           

            Type type1 = typeof(MyClass);
            //Create an instance of the type
            object obj = Activator.CreateInstance(type1);
            object[] mParam1 = new object[] { 5, 10 };
            //invoke AddNumb, passing in two parameters
            int res = (int)type1.InvokeMember("AddNumb", BindingFlags.InvokeMethod,
                                               null, obj, mParam1);
            Console.Write("Result: {0} \n", res);

            Console.ReadKey();

            return 0;
        }
    }
}
