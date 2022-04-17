<%@ language="javascript"  CODEPAGE="65001"%>
<%
var username=Request.Form("username")
var content=Request.Form("content")
Response.Write("<div class='comment'><h6>" + username +" :</h6><p class='param'>"+ content +" </p></div>")
Response.Write(username)
Response.Write("<br>")
Response.Write(content)

var d=new Date()
var h=d.getHours()

Response.Write("<p>")
Response.Write(d)
Response.Write("</p>")
if (h<12)
   {
   Response.Write("Good Morning!")
   }
else
   {
   Response.Write("Good day!")
   }
%>
