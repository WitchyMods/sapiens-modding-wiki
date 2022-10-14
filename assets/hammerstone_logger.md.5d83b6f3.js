import{_ as s,c as a,o as n,d as e}from"./app.e92a6bf3.js";const C=JSON.parse('{"title":"Logger","description":"","frontmatter":{},"headers":[{"level":2,"title":"Including","slug":"including","link":"#including","children":[]},{"level":2,"title":"Using","slug":"using","link":"#using","children":[]}],"relativePath":"hammerstone/logger.md","lastUpdated":1663807037000}'),l={name:"hammerstone/logger.md"},o=e(`<h1 id="logger" tabindex="-1">Logger <a class="header-anchor" href="#logger" aria-hidden="true">#</a></h1><p>The logger is very simple, it merely adds a level of distinction to your log messages.</p><h2 id="including" tabindex="-1">Including <a class="header-anchor" href="#including" aria-hidden="true">#</a></h2><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> logger </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mjrequire</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hammerstone/logging</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="using" tabindex="-1">Using <a class="header-anchor" href="#using" aria-hidden="true">#</a></h2><p>Log message:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre><code><span class="line"><span style="color:#FFCB6B;">logger</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Example Message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>Warn message:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre><code><span class="line"><span style="color:#FFCB6B;">logger</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">warn</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Example Message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>Error message:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre><code><span class="line"><span style="color:#FFCB6B;">logger</span><span style="color:#A6ACCD;">:</span><span style="color:#82AAFF;">error</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Example Message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,11),p=[o];function t(r,c,i,g,d,u){return n(),a("div",null,p)}const D=s(l,[["render",t]]);export{C as __pageData,D as default};