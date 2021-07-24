using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LifeWithGenerics
{
    public class MyStack<T>
    {
        readonly int m_Size;
        int m_StackPointer = 0;
        T[] m_Items;
        public MyStack()
            : this(100)
        { }
        public MyStack(int size)
        {
            m_Size = size;
            m_Items = new T[m_Size];
        }
        public void Push(T item)
        {
            if (m_StackPointer >= m_Size)
                throw new StackOverflowException();
            m_Items[m_StackPointer] = item;
            m_StackPointer++;
        }
        public T Pop()
        {
            m_StackPointer--;
            if (m_StackPointer >= 0)
            {
                return m_Items[m_StackPointer];
            }
            else
            {
                m_StackPointer = 0;
               // return default(T);
                throw new InvalidOperationException("Cannot pop an empty stack");
            }
        }

       
    }

    class Test
    {
        static void Main(string[] args)
        {
            MyStack<int> newStack = new MyStack<int>();
            newStack.Push(1);

            int j = newStack.Pop();

            Console.WriteLine("The popped value is " + j);

            

            MyStack<string> newStringStack = new MyStack<string>();
            newStringStack.Push("hello");

            string str = newStringStack.Pop();
            Console.WriteLine("The popped value is " + str);

            Console.ReadLine();
        }
    }
}
