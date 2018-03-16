<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FromUsuario.aspx.cs" Inherits="WebForms.FromUsuario" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <link rel="stylesheet" href="Content/bootstrap.min.css" />
</head>
<body>
    <div class="container">
        <form id="form1" runat="server" class="col-12">

            <div class="col-12">
                <p>
                    Formulario para CRUD WEB FORMS com Back externo
                </p>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-4">
                        <div class="form-group  ">
                            <label class="">Digite a porta do servidor localhost</label>
                            <input type="text" class="form-control " id="inputPortServe" runat="server" />
                        </div>
                    </div>

                    <div class="col-4">

                        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Buscar" />

                    </div>

                    <div class="col-4">
                        <p>localhost:<strong id="PortServe" runat="server">0000</strong>  </p>
                    </div>


                </div>
            </div>


            <div class="col-12">
                    <div class="col">
                        <div class="form-group  ">
                            <label class="">Get Usuarios</label>
                             <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="Buscar" />
                        </div>
                    </div>
            </div>

                <div class="col-12">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group  " id="ListaUser" runat="server">
                            
                        </div>
                    </div>

                 </div>
                 </div>

               <div class="col-12">
                <div class="row">
                    <div class="col-4">
                        <div class="form-group  " >
                            <label class="">Get Usuarios ID</label>
                            <input type="text" class="form-control " id="IDGetUser" runat="server" />
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group  " >
                           <label class="">Buscar</label>
                             <asp:Button ID="Button3"  runat="server" OnClick="Button3_Click" Text="Buscar" />
                        </div>
                    </div>

                 </div>
                 </div>


            

        </form>
    </div>

</body>
</html>
