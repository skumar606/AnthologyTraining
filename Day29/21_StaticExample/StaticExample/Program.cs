using System;
namespace StaticVarApplication
{
     class StaticVar
    {
        public static int num  = 0 ;
        public void count()
        {
            num++;
        }
        public static int getNum()
        {
            return num;
        }
    }
    class StaticTester
    {
        static void Main(string[] args)
        {
            StaticVar s = new StaticVar();
            StaticVar s1 = new StaticVar();

            s.count();
            s1.count();
            
            Console.WriteLine("Variable num: {0}", StaticVar.getNum());
            Console.ReadKey();
        }
    }
}