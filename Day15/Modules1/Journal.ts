class Journal {
    private entries: string[] = [];

    private static count: number = 0;

    public AddEntry(text: string): number {
        this.entries.push(`${Journal.count++}: ${text}`);
        return Journal.count; // memento pattern!
    }

    public RemoveEntry(index: number): void {
        delete this.entries[index];
    }

    public ToString(): string {
        return this.entries.toString();
    }

    // breaks single responsibility principle
    public SavetoFile(): void {

    }



}

export {Journal};