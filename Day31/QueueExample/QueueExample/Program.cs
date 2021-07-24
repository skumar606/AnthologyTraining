using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QueueExample
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
            var q = new Queue<Student>();
            q.Enqueue(new Student { StudentId = 1, FirstName = "S", LastName = "Kumar"});
            q.Enqueue(new Student { StudentId = 2, FirstName = "JK", LastName = "Tiwari" });
            q.Enqueue(new Student { StudentId = 3, FirstName = "Shree", LastName = "Kant" });

            foreach(var student in q)
            {
                Console.WriteLine(student.FirstName + " " + student.LastName);
            }

            q.Dequeue();

            Console.WriteLine("Count after dequeue = " + q.Count);

            Console.ReadLine();
        }
    }
}
