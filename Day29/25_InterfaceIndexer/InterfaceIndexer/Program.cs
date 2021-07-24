﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Indexer on an interface: 
public interface ISomeInterface
{
    // Indexer declaration: 
     int this[int index]
    {
        get;
        set;
    }
 
}

// Implementing the interface. 
class IndexerClass : ISomeInterface
{
    private int[] arr = new int[100];
    public int this[int index]   // indexer declaration
    {
        get
        {
            
            return arr[index];
        }
        set
        {
            arr[index] = value;
        }
    }

   
}

class MainClass
{
    static void Main()
    {
        IndexerClass test = new IndexerClass();
        System.Random rand = new System.Random();
        // Call the indexer to initialize its elements. 
        for (int i = 0; i < 5; i++)
        {
            test[i] = rand.Next();
        }
        for (int i = 0; i < 5; i++)
        {
            System.Console.WriteLine("Element #{0} = {1}", i, test[i]);
        }

        // Keep the console window open in debug mode.
        System.Console.WriteLine("Press any key to exit.");
        System.Console.ReadKey();
    }
}

