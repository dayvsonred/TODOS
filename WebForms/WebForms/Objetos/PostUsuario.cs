using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebForms.Objetos
{
    public class PostUsuario
    {
        public int ID_USUARIO { get; set; }
        public string LOGIN { get; set; }
        public string NOME { get; set; }
        public string EMAIL { get; set; }
        public string SENHA { get; set; }
        public int ATIVO { get; set; }
        public DateTime DT_INCLUSAO { get; set; }
    }
}