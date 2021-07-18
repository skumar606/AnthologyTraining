using System;

namespace BoxingUnboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = 20;
            System.Collections.ArrayList list = new System.Collections.ArrayList();
            list.Add(n);

            n = (int)list[0];
            Console.WriteLine("Value of n is " + n);
            Console.ReadLine();
        }
    }
}
