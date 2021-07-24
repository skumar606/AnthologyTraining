using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mammals
{
    interface iWalkable
    {
        bool canWalk();
    }
    class Cow:iWalkable
    {
        public int noOfLegs { get; set; }
        public string species { get; set; }

        public bool canWalk()
        {
            if (this.noOfLegs == 4)
                return true;
            else
                return false;

        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Cow whiteCow = new Cow();
            whiteCow.species = "White Dane";
            whiteCow.noOfLegs = 4;

            Console.WriteLine(" Can the animal walk ?" + whiteCow.canWalk());
            Console.ReadLine();
        }
    }
}
