using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InheritanceSample
{
    class Box
    {
        public int Length { get; set; }
        public int Breadth { get; set; }

        public int Width { get; set; }

        public string Color { get; set; }

        public void Display()
        {
            Console.WriteLine("Length -{0}, Breadth -{1}, " +
                "Width{2}, Color {3}", Length, Breadth, Width, Color);
        }
    }

    class BlueBox : Box
    {
        public BlueBox()
        {
            this.Color = "Blue";
        }
    }

    class RedBox : Box
    {
        public RedBox()
        {
            this.Color = "Red";
        }
    }

}
