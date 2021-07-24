using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AnonymousTypes
{
    class Program
    {               

        static void Main()
        {
            //Implicityly typed variable
            var i = 10.0;

            // s is compiled as a string 
            var s = "Hello";

            // a is compiled as int[] 
            var a = new[] { 0, 1, 2 };

            var words = new[] { "aPPLE", "BlUeBeRrY", "cHeRry" };

            //linq - Language Integrated Query          
            // If a query produces a sequence of anonymous types,  
            // then use var in the foreach statement to access the properties. 
            var upperLowerWords =
                 from w in words
                 select new { Upper = w.ToUpper(), Lower = w.ToLower() };
                              

            // Execute the query 
            foreach (var ul in upperLowerWords)
            {
                Console.WriteLine("Uppercase: {0}, Lowercase: {1}", ul.Upper, ul.Lower);
            }
     

            Console.ReadLine();
        }

       
    }

}
