(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{10:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(4),i=n.n(r),o=(n(10),n(11),n(12),n(13),n(2)),s=(n(14),["peach-gradient","aqua-gradient","warm-flame-gradient","young-passion-gradient","rainy-ashville-gradient","sunny-morning-gradient","blue-gradient"]);var d=function(){var e=Object(c.useState)("blue-gradient"),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),d=Object(o.a)(i,2),u=d[0],l=d[1],h=Object(c.useState)(""),b=Object(o.a)(h,2),j=b[0],m=b[1];Object(c.useEffect)((function(){f()}),[]);var f=function(){var e=Math.floor(102*Math.random()),t=Math.floor(6*Math.random());console.log(t),fetch("https://gist.githubusercontent.com/yusufcmlt/721a1680752d7409997d70a666a710ac/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json").then((function(e){return e.json()})).then((function(n){l(n[e].quote),m(n[e].author),r(s[t])})).catch((function(e){console.log(e)}))};return Object(a.jsx)("div",{id:"dis-container",className:n+" container-fluid vh-100",children:Object(a.jsx)("div",{id:"quote-container",className:"row justify-content-center h-100",children:Object(a.jsxs)("div",{id:"quote-box",className:"col-sm-6 text-center my-auto h-25",children:[Object(a.jsx)("div",{id:"text",className:"row text-dark h2 justify-content-center",children:Object(a.jsx)("p",{children:u})}),Object(a.jsx)("div",{id:"author",className:"row text-dark h4 justify-content-end",children:Object(a.jsx)("p",{children:"- "+j})}),Object(a.jsxs)("div",{id:"buttons-container",className:"row align-items-center justify-content-between mt-5",children:[Object(a.jsx)("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+u+"-"+j,target:"_blank",rel:"noopener noreferrer",className:"btn btn-lg peach-gradient btn-manu",children:"Tweet"}),Object(a.jsx)("button",{id:"new-quote",className:"btn btn-lg purple-gradient btn-manu",onClick:f,children:"New Quote"})]}),Object(a.jsx)("div",{className:"link-container",children:Object(a.jsx)("a",{className:"github-link",href:"https://github.com/yusufcmlt/random-quote-machine",target:"_blank",rel:"noopener noreferrer",children:""})})]})})})};i.a.render(Object(a.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.189de95d.chunk.js.map