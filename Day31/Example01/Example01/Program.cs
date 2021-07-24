using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example01
{
    class Student
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            
            var s1 = new Student { FirstName = "Shree", LastName = "Kant", StudentId = 1 };
            var s2 = new Student { FirstName = "Sachin", LastName = "Kumar", StudentId = 2 };
            var s3 = new Student { FirstName = "Tarun", LastName = "Singh", StudentId = 3 };

            var students = new List<Student> { s1, s2, s3};

            students.Remove(s3);

            foreach(Student student in students)
            {
                Console.WriteLine(student.FirstName + " " + student.LastName + " " + student.StudentId);
            }
            Console.ReadLine();
        }
    }
}
