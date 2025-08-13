namespace TypescriptExample.Models
{
    public class Fruit
    {
        public string? Color { get; set; } 

        public string? Name { get; set; }

        public bool IsRipe { get; set; } = false;

        public string? SendToEmailAddress { get; set; }
    }
}
