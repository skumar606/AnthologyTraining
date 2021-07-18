using System;

interface IDrive
{
    bool WillRun();
    int Refuel();
}

namespace Interface
{
    class CarDrive: IDrive
    {
        int PetrollLevel;

        public CarDrive()
        {
            PetrollLevel = 0;
        }
        bool IDrive.WillRun()
        {
            return PetrollLevel >= 2 ? true : false;
        }

        int IDrive.Refuel()
        {
            return ++PetrollLevel;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            CarDrive c1 = new CarDrive();
            IDrive d1 = c1;
            Console.WriteLine(d1.Refuel());
            Console.WriteLine(d1.WillRun());
            Console.WriteLine(d1.Refuel());
            Console.WriteLine(d1.Refuel());
            Console.WriteLine(d1.WillRun());
            Console.ReadLine();
        }
    }
}
