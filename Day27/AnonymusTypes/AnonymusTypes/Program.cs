using System;

using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnonymusTypes
{
    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        ////Implicityly typed variable
    //        //var i = 10.0;

    //        //// s is compiled as a string 
    //        //var s = "Hello";

    //        //// a is compiled as int[] 
    //        //var a = new[] { 0, 1, 2 };

    //        //var nums = new[] { 1, 2, 3, 4, 5, 6 };

    //        ////linq - Language Integrated Query          
    //        //// If a query produces a sequence of anonymous types,  
    //        //// then use var in the foreach statement to access the properties. 
    //        //var OddOrEven =
    //        //     from n in nums
    //        //     select new { isEven = n%2==0 };


    //        //// Execute the query 
    //        //foreach (var b in OddOrEven)
    //        //{
    //        //    if(b.isEven == true)
    //        //    {
    //        //        Console.WriteLine("Even");
    //        //    } else
    //        //    {
    //        //        Console.WriteLine("Odd");
    //        //    }
    //        //}


    //        //Console.ReadLine();




        


    //    }
    //}




    class TemperatureConverter
    {

        private double tempincel;
        private double tempinfahrenheit;

        public void setTempInCel(double temp)
        {
            tempincel = temp;
            tempinfahrenheit = (9 * temp / 5) + 32;
        }

        public void setTempInFarenheit(double temp)
        {
            tempinfahrenheit = temp;
            tempincel = (temp - 32) * 5 / 9;
        }

        public double ConverttoFahrenheit()
        {
            return tempinfahrenheit;
        }
        public double ConverttoCelsius()
        {
            return tempincel;
        }
    }

    class UnitConverter
    {
        private double pounds;
        public double kilograms
        {
            
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            TemperatureConverter tc = new TemperatureConverter();
            tc.setTempInCel(40);
            double t1 = tc.ConverttoFahrenheit();
            Console.WriteLine(t1);
            Console.ReadLine();
        }
    }
}
