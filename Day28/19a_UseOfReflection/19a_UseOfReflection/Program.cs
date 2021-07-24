using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace UseOfReflection
{
    public interface IShape
    {
        void Draw();
    }

    public class Square : IShape
    {
        public void Draw()
        {
            Console.WriteLine(" _ \n|_|");
        }
    }

    public class Circle : IShape
    {
        public void Draw()
        {
            Console.WriteLine("O");
        }
    }

    public static class ShapeFactory
    {
        public static IShape GetShape(string shapeName)
        {
            Assembly currentAssembly = Assembly.GetExecutingAssembly();
            var currentType = currentAssembly.GetTypes().SingleOrDefault(t => t.Name == shapeName);
            return (IShape)Activator.CreateInstance(currentType);
        }
        public static void Main(string[] args)
        {
            IShape s = GetShape("Circle");
            s.Draw();

            IShape sq = GetShape("Square");
            sq.Draw();
            Console.Read();
        }
    }

}
