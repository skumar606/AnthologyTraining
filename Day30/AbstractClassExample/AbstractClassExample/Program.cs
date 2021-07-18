using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbstractClassExample
{
    public abstract class BaseCalculator<T>
    {
        public abstract T Add(T arg1, T arg2);
        public abstract T Subtract(T arg1, T arg2);
        public abstract T Divide(T arg1, T arg2);
        public abstract T Multiply(T arg1, T arg2);
    }

    public class MyCalculator : BaseCalculator<int>
    {
        public override int Add(int arg1, int arg2)
        {
            return arg1 + arg2;
        }
        public override int Subtract(int arg1, int arg2)
        {
            return arg1 - arg2;
        }
        public override int Divide(int arg1, int arg2)
        {
            return arg1 / arg2;
        }
        public override int Multiply(int arg1, int arg2)
        {
            return arg1 * arg2;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            MyCalculator cal = new MyCalculator();
            Console.WriteLine("2 + 3 = {0}", cal.Add(2, 3));
            Console.WriteLine("10 - 3 = {0}", cal.Subtract(10, 3));
            Console.WriteLine("10 / 2 = {0}", cal.Divide(10, 2));
            Console.WriteLine("2 * 3 = {0}", cal.Multiply(2, 3));
            Console.ReadLine();
        }
    }
}
