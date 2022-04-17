<%@LANGUAGE="javascript" CODEPAGE="65001"%>
<%
var username=Request.Form('username')
var content=Request.Form('content')

Response.Write ("{\"username\":\""+username+"\",\"content\":\""+content+"\"}")
%>