using System;

namespace StaticClass
{
    class Converter
    {
        public static double ConvertInchToCentimeters(double len)
        {
            return 2.54 * len;
        }
        public static double ConvertCentimeterstoInch(double len)
        {
            return len / 2.54;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("150 cm = {0} inch", Converter.ConvertCentimeterstoInch(150.00));
            Console.WriteLine("10 inch = {0} cm", Converter.ConvertInchToCentimeters(10.00));
            Console.ReadLine();
        }
    }
}
