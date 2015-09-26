document.write("<table border='1' cellspacing ='0' > ");
for(var i=1;i<10;i++){
	document.write("<tr>");
	for(var j=1;j<=i;j++){
		document.write("<td>&nbsp;");
		document.write(j+"*"+i+"="+i*j);
		document.write("&nbsp;</td>");
	}
	document.write("</tr>");
}
document.write("</table>");
