using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;

namespace WebForms
{
    public partial class FromUsuario : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            PortServe.InnerText = inputPortServe.Value;
        }

        protected void Button2_Click(object sender, EventArgs e)
        {

            string PortaServe = inputPortServe.Value;

            string varsPOST = "title=GETALL";
            varsPOST = varsPOST + "&body=envio de post";
            varsPOST = varsPOST + "&userId=1";
            var Vars = System.Text.Encoding.UTF8.GetBytes(varsPOST);

            //string URI = "http://localhost:8000/api/WEBuserID/" + IDGetUser.Value;
            string URI = "http://localhost:" + PortaServe.ToString() + "/api/WEBuserID/" + IDGetUser.Value;

            var httpRequetWebFrom = WebRequest.CreateHttp(URI);
            httpRequetWebFrom.Method = "POST";
            httpRequetWebFrom.ContentType = "application/x-www-form-urlencoded";
            httpRequetWebFrom.ContentLength = varsPOST.Length;
            httpRequetWebFrom.UserAgent = "RequisicaoWebDemo";


            //escrevendo dados stream
            using (var stream = httpRequetWebFrom.GetRequestStream())
            {
                stream.Write(Vars, 0, Vars.Length);
                stream.Close();
            }

            //Resposta
            using (var resposta = httpRequetWebFrom.GetResponse())
            {
                var streamDadosResposta = resposta.GetResponseStream();
                StreamReader reader = new StreamReader(streamDadosResposta);
                object objResponse = reader.ReadToEnd();
                //nesta linha pode ser trocado o tipo do retorno do objeto do back
                var post = JsonConvert.DeserializeObject<Objetos.PostUsuario>(objResponse.ToString());
                ListaUser.InnerText = post.NOME.ToString();


                streamDadosResposta.Close();
                resposta.Close();
            }
        }

        protected void Button3_Click(object sender, EventArgs e)
        {
            ListaUser.InnerText = IDGetUser.Value;
            string PortaServe = inputPortServe.Value;

            string varsPOST = "title=GETALL";
            varsPOST = varsPOST + "&body=envio de post";
            varsPOST = varsPOST + "&userId=1";
            var Vars = System.Text.Encoding.UTF8.GetBytes(varsPOST);

            //string URI = "http://localhost:8000/api/WEBuserID/" + IDGetUser.Value;
            string URI = "http://localhost:"+ PortaServe.ToString() + "/api/WEBuserID/" + IDGetUser.Value;  

            var httpRequetWebFrom = WebRequest.CreateHttp(URI);
            httpRequetWebFrom.Method = "POST";
            httpRequetWebFrom.ContentType = "application/x-www-form-urlencoded";
            httpRequetWebFrom.ContentLength = varsPOST.Length;
            httpRequetWebFrom.UserAgent = "RequisicaoWebDemo";


            //escrevendo dados stream
            using (var stream = httpRequetWebFrom.GetRequestStream())
            {
                stream.Write(Vars, 0, Vars.Length);
                stream.Close();
            }

            //Resposta
            using (var resposta = httpRequetWebFrom.GetResponse())
            {
                var streamDadosResposta = resposta.GetResponseStream();
                StreamReader reader = new StreamReader(streamDadosResposta);
                object objResponse = reader.ReadToEnd();
                //nesta linha pode ser trocado o tipo do retorno do objeto do back
                var post = JsonConvert.DeserializeObject<Objetos.PostUsuario>(objResponse.ToString());
                ListaUser.InnerText = post.NOME.ToString();


                streamDadosResposta.Close();
                resposta.Close();
            }



        }
    }
}