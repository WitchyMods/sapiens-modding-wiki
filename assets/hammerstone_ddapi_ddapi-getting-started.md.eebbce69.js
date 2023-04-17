import{_ as e,c as a,o as s,d as o}from"./app.474f198a.js";const u=JSON.parse('{"title":"Hammerstone Data-Driven-API","description":"","frontmatter":{},"headers":[{"level":3,"title":"Philosophy","slug":"philosophy","link":"#philosophy","children":[]},{"level":3,"title":"Config Types","slug":"config-types","link":"#config-types","children":[]}],"relativePath":"hammerstone/ddapi/ddapi-getting-started.md","lastUpdated":1681766837000}'),n={name:"hammerstone/ddapi/ddapi-getting-started.md"},t=o(`<h1 id="hammerstone-data-driven-api" tabindex="-1">Hammerstone Data-Driven-API <a class="header-anchor" href="#hammerstone-data-driven-api" aria-hidden="true">#</a></h1><p>The &#39;DDAPI&#39; is a data-driven API for creating Hammerstone mods.</p><h3 id="philosophy" tabindex="-1">Philosophy <a class="header-anchor" href="#philosophy" aria-hidden="true">#</a></h3><p>In the base game of Sapiens, the data and logic for a &quot;feature&quot; is often spread across multiple files. For example, to create an apple, you might need the following:</p><ul><li><code>gameObject.lua</code> - Define the apple object</li><li><code>resource.lua</code> - Give it a &#39;resource&#39; definition for storage/crafting</li><li><code>evolvingObject.lua</code> - Allow the apple to &#39;rot&#39; away, or into a rotten variant</li><li><code>storage.lua</code> - Allow the apple to be carried and stored in storage areas</li><li>... and more!</li></ul><p>With Hammerstone, we reverse this relationship. We believe you should be able to define your data in a single place, with a well-defined API. To create an apple in Hammerstone, you would only need to create <code>apple.json</code>.</p><p>Inside this apple file, you define &quot;components&quot; describing the apple. For example, this component allows the apple to &#39;rot&#39; into a rotten apple after some time:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hs_evolving_object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">min_time</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rot</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">transform_to</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rotten_apple</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="config-types" tabindex="-1">Config Types <a class="header-anchor" href="#config-types" aria-hidden="true">#</a></h3><p>At it&#39;s core, Hammerstone is a <em>json based API</em>. The reason we chose json is because it&#39;s a data-exchange format. That means there are a lot of tools like json schemas which we can leverage. If you use our schemas you can get in-editor autocomplete, documentation, tool-tips, and linting.</p><p>However json isn&#39;t the best for complex items, which might require some programmatic-handling. In these cases you can also define your items in lua. We will read these lua files and evaluate them as such.</p><h1 id="getting-started-with-ddapi" tabindex="-1">Getting Started with DDAPI <a class="header-anchor" href="#getting-started-with-ddapi" aria-hidden="true">#</a></h1><p>To get started, you need a live copy of Hammerstone beta, and a text editor like VSCode. Then create a folder structure like this:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mod-name</span></span>
<span class="line"><span style="color:#A6ACCD;">	modInfo.lua</span></span>
<span class="line"><span style="color:#A6ACCD;">	hammerstone</span></span>
<span class="line"><span style="color:#A6ACCD;">		objects</span></span>
<span class="line"><span style="color:#A6ACCD;">			my_object.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),l=[t];function p(r,i,c,d,h,y){return s(),a("div",null,l)}const m=e(n,[["render",p]]);export{u as __pageData,m as default};
