using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InheritanceSample
{
    class Program
    {
        static void Main(string[] args)
        {
            BlueBox bluebox = new BlueBox();
            bluebox.Breadth = 10;
            bluebox.Length = 12;
            bluebox.Width = 10;

            bluebox.Display();

            Console.ReadLine();
        }
    }
}
