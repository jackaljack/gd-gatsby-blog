(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(t,n,e){"use strict";e.r(n),e.d(n,"pageQuery",function(){return S}),e(79),e(50);var a=e(12),r=e.n(a),i=e(153),o=e.n(i),u=e(0),c=e.n(u),s=e(171),l=e.n(s),m=e(154),f=e(156),p=e(174),d=e.n(p),g=e(168),h=e(170),b=e(155);function y(){var t=o()(["\n  margin: 2px;\n  padding: 0.25em;\n  background-color: #d3d3d3;\n"]);return y=function(){return t},t}function v(){var t=o()(["\n  display: 'flex';\n  flex-wrap: 'wrap';\n  justify-content: 'space-between';\n  list-style: 'none';\n  padding: 0;\n"]);return v=function(){return t},t}function w(){var t=o()(["\n  margin-bottom: ",";\n  margin-top: ",";\n  /* fontSize and lineHeight come from scale() */\n  font-size: ",";\n  line-height: ",";\n"]);return w=function(){return t},t}function E(){var t=o()(["\n  margin-bottom: ",";\n"]);return E=function(){return t},t}var x=m.a.hr(E(),function(t){return t.marginBottom}),j=m.a.p(w(),function(t){return t.marginBottom},function(t){return t.marginTop},function(t){return t.fontSize},function(t){return t.lineHeight}),k=(m.a.ul(v()),m.a.li(y())),O=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t=this.props.data.markdownRemark,n=t.frontmatter.tags||[],e=d()(this.props,"data.site.siteMetadata.title"),a=d()(this,"props.data.site.siteMetadata.description"),r=this.props.pageContext,i=r.previous,o=r.next;return c.a.createElement(h.a,{location:this.props.location},c.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:t.frontmatter.title+" | "+e}),c.a.createElement("h1",null,t.frontmatter.title),c.a.createElement(j,Object.assign({marginTop:Object(b.a)(-1),marginBottom:Object(b.a)(1)},Object(b.b)(-.2)),t.frontmatter.date+" | "+t.timeToRead+" min Read"),c.a.createElement("ul",{style:{listStyle:"none",display:"inline-flex"}},n.map(function(t){return c.a.createElement(k,null,t)})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),c.a.createElement("ul",{style:{listStyle:"none",display:"inline-flex"}},n.map(function(t){return c.a.createElement(k,null,t)})),c.a.createElement(x,{marginBottom:Object(b.a)(1)}),c.a.createElement(g.a,null),c.a.createElement("ul",{style:{listStyle:"none"}},i&&c.a.createElement("li",null,c.a.createElement(f.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),o&&c.a.createElement("li",null,c.a.createElement(f.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},n}(c.a.Component);n.default=O;var S="3509818066"},155:function(t,n,e){"use strict";e.d(n,"a",function(){return c}),e.d(n,"b",function(){return s});var a=e(180),r=e.n(a),i=e(181),o=e.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var u=new r.a(o.a),c=u.rhythm,s=u.scale},156:function(t,n,e){"use strict";e.r(n),e.d(n,"graphql",function(){return d}),e.d(n,"StaticQueryContext",function(){return f}),e.d(n,"StaticQuery",function(){return p});var a=e(0),r=e.n(a),i=e(8),o=e.n(i),u=e(152),c=e.n(u);e.d(n,"Link",function(){return c.a}),e.d(n,"withPrefix",function(){return u.withPrefix}),e.d(n,"navigate",function(){return u.navigate}),e.d(n,"push",function(){return u.push}),e.d(n,"replace",function(){return u.replace}),e.d(n,"navigateTo",function(){return u.navigateTo});var s=e(158),l=e.n(s);e.d(n,"PageRenderer",function(){return l.a});var m=e(33);e.d(n,"parsePath",function(){return m.a});var f=r.a.createContext({}),p=function(t){return r.a.createElement(f.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(t,n){(function(n){t.exports={siteMetadata:{title:"Giacomo Debidda",author:"Giacomo Debidda",github:"jackdbd",twitter:"jackdbd",description:"Giacomo Debidda's Personal Blog",siteUrl:"https://www.giacomodebidda.com",rssFeed:"https://www.giacomodebidda.com/rss.xml"},plugins:[{resolve:"gatsby-source-filesystem",options:{path:n+"/src/pages",name:"pages"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:590}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},{resolve:"gatsby-remark-prismjs",options:{classPrefix:"language-"}},"gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},"gatsby-transformer-sharp","gatsby-plugin-sharp","gatsby-plugin-feed",{resolve:"gatsby-plugin-manifest",options:{name:"Giacomo Debidda",short_name:"giacomodebidda",start_url:"/",background_color:"#ffffff",theme_color:"#663399",display:"minimal-ui"}},"gatsby-plugin-offline","gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography"}},"gatsby-plugin-twitter"]}}).call(this,"/")},158:function(t,n,e){var a;t.exports=(a=e(163))&&a.default||a},163:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(8),o=e.n(i),u=e(47),c=e(1),s=function(t){var n=t.location,e=c.a.getResourcesForPathname(n.pathname);return r.a.createElement(u.a,{location:n,pageResources:e})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=s},168:function(t,n,e){"use strict";var a=e(153),r=e.n(a),i=e(0),o=e.n(i),u=e(154),c=(e(178),e(179),e(169)),s=e.n(c),l=e(155),m=e(157);function f(){var t=r()(["\n  margin-bottom: ",";\n"]);return f=function(){return t},t}function p(){var t=r()(["\n  display: flex;\n  margin-bottom: 0;\n"]);return p=function(){return t},t}var d=u.a.div(p()),g=u.a.p(f(),function(t){return t.marginBottom});n.a=function(){var t="https://twitter.com/"+m.siteMetadata.twitter,n="https://github.com/"+m.siteMetadata.github;return o.a.createElement(d,null,o.a.createElement(g,{marginBottom:Object(l.a)(.5)},o.a.createElement("img",{src:s.a,alt:m.siteMetadata.author,style:{float:"left",marginRight:Object(l.a)(.25),marginBottom:0,width:Object(l.a)(2),height:Object(l.a)(2)}}),"Written by ",o.a.createElement("strong",null,m.siteMetadata.author),", Pythonista & JS lover (D3, React). You can find me on ",o.a.createElement("a",{href:t},"Twitter")," &"," ",o.a.createElement("a",{href:n},"Github")))}},169:function(t,n,e){t.exports=e.p+"static/profile-pic-a463b5971c9f7ac211fbe7bf4adb4a51.jpg"},170:function(t,n,e){"use strict";e(50);var a=e(12),r=e.n(a),i=e(153),o=e.n(i),u=e(0),c=e.n(u),s=e(154),l=e(156),m=e(155),f=e(157);function p(){var t=o()(["\n  margin-right: ",";\n  margin-left: ",";\n  max-width: ",";\n  padding: ",";\n"]);return p=function(){return t},t}function d(){var t=o()(["\n  margin-top: ",";\n  margin-bottom: ",";\n  font-family: ",";\n  /* fontSize and lineHeight come from scale() */\n  font-size: ",";\n  line-height: ",";\n"]);return d=function(){return t},t}function g(){var t=o()(["\n  margin-top: ",";\n  margin-bottom: ",";\n  font-family: ",";\n  /* fontSize and lineHeight come from scale() */\n  font-size: ",";\n  line-height: ",";\n"]);return g=function(){return t},t}e(182),s.a.span(g(),function(t){return t.marginTop},function(t){return t.marginBottom},function(t){return t.fontFamily},function(t){return t.fontSize},function(t){return t.lineHeight});var h=s.a.h3(d(),function(t){return t.marginTop},function(t){return t.marginBottom},function(t){return t.fontFamily},function(t){return t.fontSize},function(t){return t.lineHeight}),b=s.a.div(p(),function(t){return t.marginRight},function(t){return t.marginLeft},function(t){return t.maxWidth},function(t){return t.padding}),y={boxShadow:"none",textDecoration:"none",color:"inherit"},v=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t,n=f.siteMetadata.title,e=this.props,a=e.location,r=e.children;return t="/"===a.pathname?c.a.createElement(h,Object.assign({fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(m.a)(1.5)},Object(m.b)(1.5)),c.a.createElement(l.Link,{to:"/",style:y},n)):c.a.createElement(h,Object.assign({fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(m.a)(-1.5)},Object(m.b)(.25)),c.a.createElement(l.Link,{to:"/",style:y},n)),c.a.createElement(b,{marginLeft:"auto",marginRight:"auto",maxWidth:Object(m.a)(24),padding:Object(m.a)(1.5)+" "+Object(m.a)(.75)},t,r)},n}(c.a.Component);n.a=v}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a812c577ee5676859fd0.js.map