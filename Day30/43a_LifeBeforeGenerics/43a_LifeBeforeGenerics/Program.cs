using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LifeBeforeGenerics
{
    public class MyStack
    {
        readonly int m_Size;
        int m_StackPointer = 0;
        object[] m_Items;
        public MyStack()
            : this(100)
        { }
        public MyStack(int size)
        {
            m_Size = size;
            m_Items = new object[m_Size];
        }
        public void Push(object item)
        {
            if (m_StackPointer >= m_Size)
                throw new StackOverflowException();
            m_Items[m_StackPointer] = item;
            m_StackPointer++;
        }
        public object Pop()
        {
            m_StackPointer--;
            if (m_StackPointer >= 0)
            {
                return m_Items[m_StackPointer];
            }
            else
            {
                m_StackPointer = 0;
                throw new InvalidOperationException("Cannot pop an empty stack");
            }
        }

        static void Main(string[] args)
        {
            MyStack stackBefore = new MyStack();

            int i = 5;
            stackBefore.Push(i);

            //string str = "hello";
            //stackBefore.Push(str);

            int j = (int) stackBefore.Pop();

            Console.WriteLine("The value popped out is " + j);
            Console.ReadLine();
        }
    }

}
