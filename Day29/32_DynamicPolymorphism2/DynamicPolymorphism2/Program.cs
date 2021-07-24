using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicPolymorphism2
{
   public class Employee
   {
       public virtual void DoWork()
       {

       }

       public virtual int WorkStatus
       {
           get { return 0; }
       }
   }
    public class Accountant : Employee
    {
        public override void DoWork()
        {

            Console.WriteLine("Working as Accountant");
        }
        public override int WorkStatus
        {
            get { return 3; }
        }

    }

    public class TestVirtual
    {
        static void Main(string[] args)
        {
            Accountant accountant1 = new Accountant();
            accountant1.DoWork();

            //Employee emp1 = new Employee();
            Employee emp1 = new Accountant();
            emp1.DoWork();

            Console.ReadLine();

        }
        
        

    }
        
}
