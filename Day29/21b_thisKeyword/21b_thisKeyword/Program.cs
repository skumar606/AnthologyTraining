using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _21b_thisKeyword
{
	// C# program for using 'this' keyword to 
	// refer current class instance members 
	using System;
	namespace geeksforgeeks
	{
		class Geeks
		{
			// instance member 
			public string Name;

			public string GetName()
			{
				return Name;
			}

			public void SetName(string Name)
			{
				// referring to current instance 
				//"this.Name" refers to class member 
			this.Name = Name;
			}
		}

		class program
		{

			// Main Method 
			public static void Main()
			{
				Geeks obj = new Geeks();
				obj.SetName(".Net Hexaware");
				Console.WriteLine(obj.GetName());
				Console.ReadLine();
			}
		}
	}

}
