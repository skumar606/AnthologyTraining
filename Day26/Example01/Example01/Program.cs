using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example01
{
    class Car
    {
        public string Make = "making";
        private int wheels = 4;
        public int Wheels
        {
            get { return wheels; }
            set { wheels = 2; }
        }
        protected int seats = 7;
        internal string horn = "yes";
        protected internal string wiper = "no";
    }

    class Program
    {
        static void Main(string[] args)
        {
        }
    }
}
