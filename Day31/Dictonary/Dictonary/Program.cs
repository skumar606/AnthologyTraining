using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dictonary
{
    class Student
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Course { get; set; }

    }
    class Program
    {
        static void Main(string[] args)
        {
            var students = new Dictionary<int, Student>();

            students.Add(1, new Student { StudentId = 1, FirstName = "Sachin", LastName = "Kumar", Course = "Dot Net" });
            students.Add(2, new Student { StudentId = 2, FirstName = "Vikram", LastName = "Punia", Course = "C#" });
            students.Add(3, new Student { StudentId = 3, FirstName = "John", LastName = "Doe", Course = "Javascript" });

            if(students.ContainsKey(3))
            {
                students[3].Course = "Typescript";
            }

            for(var i=0; i<students.Count(); i++)
            {
                Console.WriteLine("Key = {0}, Value = {1}", students.ElementAt(i).Key, students.ElementAt(i).Value.Course);
            }
            Console.WriteLine();

            if (students.ContainsKey(3))
            {
                students.Remove(3);
            }

            foreach(var kvp in students)
            {
                Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, kvp.Value.Course);
            }
            Console.ReadLine();
        }
    }
}
