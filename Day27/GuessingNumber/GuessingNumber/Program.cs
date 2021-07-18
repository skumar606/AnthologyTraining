using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GuessingNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Enter a number from 0 to 9: ");
            //string input = Console.ReadLine();
            //switch(input)
            //{
            //    case "0":
            //    case "1":
            //    case "2":
            //    case "3":
            //    case "4":
            //    case "5":
            //    case "6":
            //    case "7":
            //    case "8":
            //    case "9":
            //        Console.WriteLine("You entered " + input);
            //        break;
            //    default:
            //        Console.WriteLine("Not allowed");
            //        break;
            //}
            //Console.ReadLine();

            //for(int i=1; i<=7; i++)
            //{
            //    for(int j=1; j<=i; j++)
            //    {
            //        Console.Write(j);
            //    }
            //    for(int j=i+1; j<=7; j++)
            //    {
            //        Console.Write("*");
            //    }
            //    Console.Write("\n");
            //}
            //Console.ReadLine();

            //////string s1 = "dotnet";
            //////int i = 0, j = s1.Length - 1;
            //////while(i < j)
            //////{
            //////    char c1 = s1[i];
            //////    char t = c1;
            //////    s1[i] = s1[j];

            //////}

            string[] arr = new string[3];
            arr[0] = "first";
            arr[1] = "second";
            arr[2] = "third";

            arr[1] = "changed";
        }
    }
}
