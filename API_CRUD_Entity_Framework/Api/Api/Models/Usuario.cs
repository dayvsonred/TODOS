using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Api.Models
{
    public class Usuario
    {
        [Key]
        public int ID_USUARIO { get; set; }
        public string LOGIN { get; set; }
        public string NOME { get; set; }
        public string EMAIL { get; set; }
        public string SENHA { get; set; }
        public int ATIVO { get; set; }
        public DateTime DT_INCLUSAO { get; set; }
    }
}