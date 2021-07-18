using System;

namespace ValueAndReferenceType
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 1;
            int j = 2;
            i = j;
            j += 3;
            Console.WriteLine("Value of i " + i);
            Console.WriteLine("Value of j " + j);
            Console.ReadLine();
        }
    }
}
