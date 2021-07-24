using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StackExample
{
    class Program
    {
        static void Main(string[] args)
        {
            var stack1 = new Stack<string>();
            stack1.Push("c#");
            stack1.Push("javascript");
            stack1.Push("typescript");
            stack1.Push("dot net");

            var stack2 = new Stack<string>();
            stack2.Push("List");
            stack2.Push("Array");
            stack2.Push("Stack");
            stack2.Push("Dictonary");

            Console.WriteLine("Number of elements in stack1 = {0}", stack1.Count);

            while(stack1.Count > 0)
            {
                Console.WriteLine(stack1.Pop());
            }
            Console.WriteLine("Number of elements in stack1 = {0}", stack1.Count);

            Console.WriteLine("Number of elements in stack2 = {0}", stack2.Count);
            Console.WriteLine(stack2.Peek());
            Console.WriteLine("Number of elements in stack2 = {0}", stack2.Count);

            Console.ReadLine();
        }
    }
}
