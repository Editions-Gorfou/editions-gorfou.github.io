(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{2240:function(e){"use strict";e.exports=function(e){e.inline.ruler.before("emphasis","centertext",function(e,t){var n,r=e.posMax,s=e.pos,o=e.src.charCodeAt(s);if(s+1>r||t)return!1;if(45===o&&62===e.src.charCodeAt(s+1))e.scanDelims(e.pos,!0),(n=e.push("text","",0)).content="->",e.delimiters.push({marker:n.content,jump:0,token:e.tokens.length-1,level:e.level,end:-1,open:!0,close:!1});else{if(60!==o||45!==e.src.charCodeAt(s+1))return!1;e.scanDelims(e.pos,!0),(n=e.push("text","",0)).content="<-",e.delimiters.push({marker:n.content,jump:0,token:e.tokens.length-1,level:e.level,end:-1,open:!1,close:!0})}return e.pos+=2,!0}),e.inline.ruler2.before("emphasis","centertext",function(e){var t,n,r,s=!1,o=!1,c=e.delimiters,i=e.delimiters.length;for(t=0;t<i;t++)"->"===(n=c[t]).marker?s=!0:"<-"===n.marker&&(o=!0);if(s&&o)for(t=0;t<i;t++)"->"===(n=c[t]).marker?(s=!0,(r=e.tokens[n.token]).type="centertext_open",r.tag="div",r.nesting=1,r.markup="->",r.content="",r.attrs=[["class","text-align-center"]]):"<-"===n.marker&&s&&((r=e.tokens[n.token]).type="centertext_close",r.tag="div",r.nesting=-1,r.markup="<-",r.content="")})}},2306:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return n(2849)}])},2849:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return l}});var r=n(5893),s=n(9980),o=n.n(s),c=n(2240),i=n.n(c),u=!0;function l(e){var t=e.frontmatter,n=e.content;return(0,r.jsxs)("div",{className:"prose mx-auto",children:[(0,r.jsx)("h1",{className:"mt-5",children:t.title}),(0,r.jsx)("div",{className:"post-content",dangerouslySetInnerHTML:{__html:o()().use(i()).render(n)}})]})}}},function(e){e.O(0,[980,774,888,179],function(){return e(e.s=2306)}),_N_E=e.O()}]);