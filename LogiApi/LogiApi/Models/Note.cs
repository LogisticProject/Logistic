//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LogiApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Note
    {
        public int ID { get; set; }
        public string Note1 { get; set; }
        public Nullable<int> ProviderID { get; set; }
    
        public virtual Provider Provider { get; set; }
    }
}
