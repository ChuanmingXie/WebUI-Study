<%@LANGUAGE="javascript" CODEPAGE="65001"%>

<%
var username,content;
username=Request.Form("username");
content=Request.Form("content");

Response.ContentType="application/xml"
Response.Charset="utf-8" 
Response.Write("<?xml version='1.0' encoding='utf-8'?>")
Response.Write(createXML());

function createXML(){
    var doc=new ActiveXObject("Microsoft.XMLDOM");

    var Root=doc.createElement("comments");
    doc.appendChild(Root);

    var commentname=doc.createElement("comment");
    Root.appendChild(commentname);
    commentname.setAttribute("username",username);

    var commentcontent=doc.createElement("content");
    commentname.appendChild(commentcontent);    

    var contentinfo=doc.createTextNode(content);
    commentcontent.appendChild(contentinfo);

    return doc.xml;
}
%>