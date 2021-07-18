using System;

namespace TypeCast
{
    class Holiday
    {
        public bool isHoliday()
        {
            return true;
        }
    }

    class Christmas:Holiday
    {

    }

    class NewYear: Holiday
    {

    }
    class Program
    {
        static void Main(string[] args)
        {
            Holiday h1 = new Holiday();
            // Christmas c1 = (Christmas)h1;
            Christmas c2 = h1 as Christmas;
            if(c2 == null)
            {
                Console.WriteLine("c2 is not Chritmas");
                Console.ReadLine();
            }
        }
    }
}
