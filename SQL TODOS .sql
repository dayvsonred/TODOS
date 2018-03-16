
-- LOG TBL USUARIOS 
USE Todos
  GO
CREATE TRIGGER  logUsuario
   ON  usuario
   AFTER UPDATE AS 
BEGIN
	DECLARE @ID_USUARIO INT ;
	
	SELECT @ID_USUARIO = ID_USUARIO FROM inserted

	INSERT INTO operacao_usuario  (  DT_LOG, ID_USUARIO ) VALUES ( getdate(), @ID_USUARIO)

END

------------------------------------------------------
-- procedure criar usuario 

USE Todos
  GO
CREATE PROCEDURE INSERIR_USUARIO
         @LOGIN AS VARCHAR(50),
         @NOME AS VARCHAR(50),
         @EMAIL AS VARCHAR(9),
         @SENHA AS VARCHAR(50),
         @ATIVO AS INT
  AS
  BEGIN
         INSERT INTO dbo.usuario (LOGIN,NOME,EMAIL,SENHA,ATIVO,DT_INCLUSAO) 
         VALUES (@LOGIN, @NOME, @EMAIL , @SENHA, @ATIVO, getdate())
  END

--------------------------------------------------------
-- selecionar usuario
USE Todos
  GO
   
  CREATE PROCEDURE SELECIONAR_USUARIO
         @ID AS INT
  AS
  BEGIN
         SELECT * FROM dbo.usuario WHERE usuario.ID_USUARIO =@ID 
  END  
  
----------------------------------------------------------
  -- atualizar usuario 
USE Todos
  GO
CREATE PROCEDURE ATUALIZAR_USUARIO
		 @ID AS INT,
         @LOGIN AS VARCHAR(50),
         @NOME AS VARCHAR(50),
         @EMAIL AS VARCHAR(9),
         @SENHA AS VARCHAR(50),
         @ATIVO AS INT
  AS
  BEGIN
		 UPDATE dbo.usuario SET LOGIN=@LOGIN,NOME=@NOME,EMAIL=@EMAIL,SENHA=@SENHA,ATIVO=@ATIVO
		 WHERE dbo.usuario.ID_USUARIO = @ID
        
  END
-------------------------------------------------------------------------
-- deletar usuario 
  USE Todos
  GO

 CREATE PROCEDURE EXCLUIR_USUARIO
         @ID AS INT
  AS
  BEGIN
         DELETE FROM dbo.usuario WHERE dbo.usuario.ID_USUARIO =@ID
  END
  
-----------------------------------------------------------------------------------------
	-- query para lista todos os usuarios ativos com mais de 5 alteraçoes 
  select u.NOME, u.LOGIN, u.EMAIL
  from dbo.usuario as u
  where (select COUNT(op.ID_USUARIO) from dbo.operacao_usuario as op where op.ID_USUARIO = u.ID_USUARIO  ) > 5
  AND u.ATIVO = 1















  
  