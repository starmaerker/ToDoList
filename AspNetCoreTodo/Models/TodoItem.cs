using System;
using System.ComponentModel.DataAnnotations;

namespace AspNetCoreTodo.Models
{
    public enum UrgencyList { very, normal, less }

    public class TodoItem
    {
        
        public Guid Id { get; set; }

        public bool IsDone { get; set; }

        [Required]
        public string Title { get; set; }
        
        public UrgencyList? Urgency { get; set; }

        public DateTimeOffset? DueAt { get; set; }
    }
}