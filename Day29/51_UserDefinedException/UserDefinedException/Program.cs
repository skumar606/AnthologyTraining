using System;
namespace UserDefinedException
{
    class TestTemperature
    {
        static void Main(string[] args)
        {
            Temperature temp = new Temperature();
            try
            {
                temp.showTemp();
            }
            catch (TempIsZeroException e)
            {
                Console.WriteLine("TempIsZeroException: {0}", e.Message);
            }
            catch(Exception e)
            {
                //throw ex will clear stack trace so use throw instead
                throw;
            }
            finally
            {
                Console.WriteLine("Execution of finally ");
            }
            
            Console.ReadKey();
        }
    }
}
public class TempIsZeroException : ApplicationException
{
    public TempIsZeroException(string message)
        : base(message)
    {
    }
}
public class Temperature
{
    int temperature = 4;
    public void showTemp()
    {
        if (temperature == 0)
        {
            throw (new TempIsZeroException("Zero Temperature found"));
            
        }
        if (temperature <0)
        {
            throw (new TempIsZeroException("Second Temperature found"));
        }
        else
        {
            Console.WriteLine("Temperature: {0}", temperature);
        }
    }
}