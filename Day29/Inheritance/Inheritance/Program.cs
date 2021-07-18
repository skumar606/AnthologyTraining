using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inheritance
{
    class Animal
    {
        public Animal()
        {
            Console.WriteLine("The Animal object is being created");
        }
    }

    class Bird: Animal
    {
        public Bird()
        {
            Console.WriteLine("The Bird object is being created");
        }
    }

    class Mammal : Animal
    {
        public Mammal()
        {
            Console.WriteLine("The Mammal object is being created");
        }
    }

    class Reptile: Animal
    {
        public Reptile()
        {
            Console.WriteLine("The Reptile object is being created");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Animal a1 = new Animal();
            Bird b1 = new Bird();
            Console.ReadLine();
        }
    }
}
