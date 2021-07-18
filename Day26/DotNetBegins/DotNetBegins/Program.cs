using System;
using TeacherDetails;
using StudentDetails;

/*namespace DotNetBegins
{
	class Program
	{
		static void Main(string[] args)
		{
			var name = Console.ReadLine();
			Console.WriteLine("Hello " + name);
		}
	}
}*/

namespace TeacherDetails
{
	class Teacher
    {
		public void Teach()
        {
			Console.WriteLine("Teachers are teaching!");
        }
    }
}

namespace StudentDetails
{
	class Student
    {
		public void Learn()
        {
			Console.WriteLine("Students are learning!");
        }
    }
}


namespace LearnNamespaces
{
	class CallingProgram
    {
		static void Main(string[] args)
        {
			Teacher t1 = new Teacher();
			Student s1 = new Student();
			t1.Teach();
			s1.Learn();
        }
    }
}