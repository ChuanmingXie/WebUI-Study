<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>

<%
dim username,content
username=Request.QueryString("username")
content=Request.QueryString("content")

Response.ContentType="application/xml"
Response.Charset="utf-8" 
Response.Write("<?xml version=""1.0"" encoding=""utf-8""?>")
response.Write("<comments>")
response.Write("<comment username='"&username&"'>")
response.Write("<content>"&content&"</content>")
response.Write("</comment>")
response.write ("</comments>")

%>