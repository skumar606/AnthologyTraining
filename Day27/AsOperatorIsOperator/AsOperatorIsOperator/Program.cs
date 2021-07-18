using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AsOperatorIsOperator
{
    class Apples
    { 

    }

    class Oranges
    {

    }
    class Program
    {
        static void Main(string[] args)
        {
            object[] objArray = new object[6];
            objArray[0] = new Apples();
            objArray[1] = new Oranges();
            objArray[2] = "hello";
            objArray[3] = 123;
            objArray[4] = 123.4;
            objArray[5] = null;

            for (int i = 0; i < objArray.Length; ++i)
            {
                string s = objArray[i] as string;
                Console.Write("{0}:", i);
                if (s != null)
                {
                    Console.WriteLine("'" + s + "'");
                }
                else
                {
                    Console.WriteLine("not a string");
                }
            }

            object testApples = new Apples();

            if (testApples is Apples)
            {
                Console.WriteLine(" The object is of type Apples");
            }
        }
    }
}
