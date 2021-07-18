using System;

namespace ReferenceType
{
    class SampleClass
    {
        public int value;
    }
    class Program
    {
        static void Main(string[] args)
        {
            SampleClass testRef1 = new SampleClass();
            SampleClass testRef2 = new SampleClass();
            testRef2.value = 10;
            testRef2 = testRef1;
            testRef1.value = 20;

            Console.WriteLine(" The value in testRef1 is " + testRef1.value);
            Console.WriteLine(" The value in testRef1 is " + testRef2.value);
            Console.ReadLine();

        }
    }
}
