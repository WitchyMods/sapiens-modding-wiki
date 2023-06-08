import{_ as e,c as s,o as a,d as o}from"./app.289883e3.js";const u=JSON.parse('{"title":"Creating Objects in DDAPI","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hello World Example","slug":"hello-world-example","link":"#hello-world-example","children":[]},{"level":2,"title":"Game Objects Vs. Resources","slug":"game-objects-vs-resources","link":"#game-objects-vs-resources","children":[{"level":3,"title":"Game Object","slug":"game-object","link":"#game-object","children":[]},{"level":3,"title":"Resource","slug":"resource","link":"#resource","children":[]}]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"relativePath":"hammerstone/ddapi/ddapi-objects.md","lastUpdated":1681115294000}'),n={name:"hammerstone/ddapi/ddapi-objects.md"},t=o(`<h1 id="creating-objects-in-ddapi" tabindex="-1">Creating Objects in DDAPI <a class="header-anchor" href="#creating-objects-in-ddapi" aria-hidden="true">#</a></h1><p>Objects can be created by defining a config file in <code>mod/hammerstone/objects/&lt;name&gt;.json</code></p><h2 id="hello-world-example" tabindex="-1">Hello World Example <a class="header-anchor" href="#hello-world-example" aria-hidden="true">#</a></h2><p>Here is a simple example which creates a linked <code>resource</code> and <code>object</code>. It references base-game models, so you can safely copy/paste.</p><p>This will create a new item called <code>coconut_2</code>, which you can spawn and decorate with. It can be picked up and stored with the other coconuts (link to storage), but it has no other behaviors (cannot be eaten, or rot, or crafted with).</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">hammerstone:object_definition</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coconut_2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">hs_object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coconut</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">hs_resource</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">link_to_storage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coconut</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="game-objects-vs-resources" tabindex="-1">Game Objects Vs. Resources <a class="header-anchor" href="#game-objects-vs-resources" aria-hidden="true">#</a></h2><p>There are two main lists of items in Sapiens, with huge crossover:</p><ul><li><code>gameObject.lua</code> defines a <em>list of distinct objects</em> such as <code>apple</code> and <code>birchBranch</code> and <code>pineBranch</code></li><li><code>resource.lua</code> defines <em>object categories</em> such as <code>apple</code> or <code>branch</code></li></ul><p>The general rule is that game objects are <em>linked</em> to resources. i.e., every branch in Sapiens is part of the <code>branch</code> resource. For simple objects, like <code>coconut</code>, it&#39;s fully expected that it will be defined as both a <code>gameObject</code> and a <code>resource</code>.</p><p>Here is a quick refresher:</p><h3 id="game-object" tabindex="-1">Game Object <a class="header-anchor" href="#game-object" aria-hidden="true">#</a></h3><ul><li>Can be spawned <code>spawn(...)</code></li><li>Exists physically in the world (has a model)</li><li>Contains properties like physics, model scale</li><li>How object transforms when eaten (i.e., meat -&gt; bone)</li></ul><h3 id="resource" tabindex="-1">Resource <a class="header-anchor" href="#resource" aria-hidden="true">#</a></h3><ul><li>Defines how the object is stored/carried (i.e., all branches have same storage definition)</li><li>Defines food nutrition</li><li>Can be crafted with (i.e., you don&#39;t craft with a <code>birchBranch</code> you craft with a <code>branch</code> -the game figures the rest out)</li></ul><h1 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-hidden="true">#</a></h1><p>Here is a list of components, valid for the <code>object</code> config type:</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,18),l=[t];function c(p,r,i,d,D,h){return a(),s("div",null,l)}const y=e(n,[["render",c]]);export{u as __pageData,y as default};