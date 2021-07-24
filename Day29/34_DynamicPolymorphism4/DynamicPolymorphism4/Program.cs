using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DynamicPolymorphism4
{
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
                Console.WriteLine("Employee working");
            }

            public virtual int WorkStatus
            {
                get { return 0; }
            }
        }
        public class Accountant : Employee
        {
            public  override void DoWork()
            {

                Console.WriteLine("Working as Accountant");
            }
            public override int WorkStatus
            {
                get { return 0; }
            }

        }

        public class SpecialAccountant : Accountant
        {
           
            public override int WorkStatus
            {
                get { return 1; }
            }
            public override void DoWork()
            {

                Console.WriteLine("Working as Special Accountant");
            }
        }

        public class TestVirtual
        {
            static void Main(string[] args)
            {
                Accountant accountant1 = new Accountant();
                accountant1.DoWork();

                Employee emp1 = accountant1;
               // Employee emp1 = new Employee();
                emp1.DoWork();

                SpecialAccountant specAccountant1 = new SpecialAccountant();
                specAccountant1.DoWork();

                Console.ReadLine();

            }



        }

    }

}
