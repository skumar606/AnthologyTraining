
import {Journal} from './Journal'
 class Persistence
{
    public SaveToFile(Journal journal, string filename, bool overwrite = false): void
    {
        if (overwrite || !File.Exists(filename))
            File.WriteAllText(filename, journal.ToString());
    }
}