(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{8867:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authors",function(){return o(9417)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,u=o(7273).Z,a=r(o(7294)),l=o(6273),f=o(2725),c=o(3462),i=o(1018),s=o(7190),d=o(1210),p=o(8684),h="undefined"!==typeof a.default.useTransition,v={};function y(e,t,o,n){if(e&&l.isLocalURL(t)){e.prefetch(t,o,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;v[t+"%"+o+(r?"%"+r:"")]=!0}}var _=a.default.forwardRef((function(e,t){var o,r=e.href,_=e.as,x=e.children,C=e.prefetch,b=e.passHref,m=e.replace,L=e.soft,j=e.shallow,R=e.scroll,g=e.locale,E=e.onClick,M=e.onMouseEnter,P=e.onTouchStart,w=e.legacyBehavior,O=void 0===w?!0!==Boolean(!1):w,T=u(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=x,!O||"string"!==typeof o&&"number"!==typeof o||(o=a.default.createElement("a",null,o));var k=!1!==C,N=n(h?a.default.useTransition():[],2)[1],S=a.default.useContext(c.RouterContext),U=a.default.useContext(i.AppRouterContext);U&&(S=U);var A,B=a.default.useMemo((function(){var e=n(l.resolveHref(S,r,!0),2),t=e[0],o=e[1];return{href:t,as:_?l.resolveHref(S,_):o||t}}),[S,r,_]),D=B.href,H=B.as,K=a.default.useRef(D),Z=a.default.useRef(H);O&&(A=a.default.Children.only(o));var G=O?A&&"object"===typeof A&&A.ref:t,X=n(s.useIntersection({rootMargin:"200px"}),3),F=X[0],I=X[1],q=X[2],z=a.default.useCallback((function(e){Z.current===H&&K.current===D||(q(),Z.current=H,K.current=D),F(e),G&&("function"===typeof G?G(e):"object"===typeof G&&(G.current=e))}),[H,G,D,q,F]);a.default.useEffect((function(){var e=I&&k&&l.isLocalURL(D),t="undefined"!==typeof g?g:S&&S.locale,o=v[D+"%"+H+(t?"%"+t:"")];e&&!o&&y(S,D,H,{locale:t})}),[H,D,I,g,k,S]);var J={ref:z,onClick:function(e){O||"function"!==typeof E||E(e),O&&A.props&&"function"===typeof A.props.onClick&&A.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,u,a,f,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(o)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?r?"softReplace":"softPush":r?"replace":"push"](o):t[r?"replace":"push"](o,n,{shallow:a,locale:c,scroll:f})};i?i(s):s()}}(e,S,D,H,m,L,j,R,g,U?N:void 0)},onMouseEnter:function(e){O||"function"!==typeof M||M(e),O&&A.props&&"function"===typeof A.props.onMouseEnter&&A.props.onMouseEnter(e),l.isLocalURL(D)&&y(S,D,H,{priority:!0})},onTouchStart:function(e){O||"function"!==typeof P||P(e),O&&A.props&&"function"===typeof A.props.onTouchStart&&A.props.onTouchStart(e),l.isLocalURL(D)&&y(S,D,H,{priority:!0})}};if(!O||b||"a"===A.type&&!("href"in A.props)){var Q="undefined"!==typeof g?g:S&&S.locale,V=S&&S.isLocaleDomain&&d.getDomainLocale(H,Q,S.locales,S.domainLocales);J.href=V||p.addBasePath(f.addLocale(H,Q,S&&S.defaultLocale))}return O?a.default.cloneElement(A,J):a.default.createElement("a",Object.assign({},T,J),o)}));t.default=_,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var u=n.default.createContext(null);t.LayoutRouterContext=u;var a=n.default.createContext(null);t.GlobalLayoutRouterContext=a},9417:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return a},default:function(){return l}});var n=o(5893),r=(o(5675),o(1664)),u=o.n(r),a=!0;function l(e){var t=e.authors;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"font-medium leading-tight text-5xl mt-5 mb-5 text-center font-bold",children:"Auteurs"}),(0,n.jsx)("ul",{children:t.map((function(e){var t=e.slug,o=e.frontmatter;return(0,n.jsx)("li",{children:(0,n.jsx)(u(),{href:"/authors/".concat(t),children:(0,n.jsx)("a",{children:o.name})})})}))})]})}},1664:function(e,t,o){e.exports=o(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=8867,e(e.s=t);var t}));var t=e.O();_N_E=t}]);