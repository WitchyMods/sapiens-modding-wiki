import{_ as e,c as a,o,a as t}from"./app.4c03ac92.js";const g=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Software and Installation","slug":"software-and-installation"},{"level":2,"title":"Creating the mod","slug":"creating-the-mod"},{"level":3,"title":"Mod Types","slug":"mod-types"},{"level":2,"title":"What to do from here?","slug":"what-to-do-from-here"}],"relativePath":"guide/getting-started.md","lastUpdated":1658816274000}'),s={name:"guide/getting-started.md"},n=t(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>Hey, and welcome to the Sapiens Modding Wiki! Please note that this guide <em>only</em> covers modding in Sapiens, not Lua or the basics of asset creation.</p><h2 id="software-and-installation" tabindex="-1">Software and Installation <a class="header-anchor" href="#software-and-installation" aria-hidden="true">#</a></h2><p>To get started modding Sapiens you should install a suitable code editor. We suggest <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> from Microsoft to get started. Additionally, install the <a href="https://marketplace.visualstudio.com/items?itemName=yinfei.luahelper" target="_blank" rel="noopener noreferrer">Lua</a> plugin and use <a href="https://cdn.discordapp.com/attachments/983298485942112296/997846637449838592/settings.json" target="_blank" rel="noopener noreferrer">this</a> config.</p><h2 id="creating-the-mod" tabindex="-1">Creating the mod <a class="header-anchor" href="#creating-the-mod" aria-hidden="true">#</a></h2><p>To create a mod, create a folder in one of these locations:</p><ul><li>Windows (offical platform): <code>C:\\Program Files (x86)\\Steam\\steamapps\\common\\Sapiens\\GameResources\\mods</code></li><li>Proton (unoffical): <code>~/.steam/steam/steamapps/compatdata/1060230/pfx/drive_c/users/steamuser/AppData/Roaming/majicjungle/sapiens/mods/</code></li></ul><p>Next, create a <code>modInfo.lua</code>. This contains most of the important information about your mod. Example <code>modInfo.lua</code>, copy and change as necessary:</p><div class="language-lua"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> modInfo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">My Example Mod Name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  description </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A super-duper groovy mod that does... stuff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">, </span><span style="color:#676E95;font-style:italic;">-- We&#39;ll get back to this</span></span>
<span class="line"><span style="color:#A6ACCD;">  developer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Me</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> modInfo</span></span>
<span class="line"></span></code></pre></div><h3 id="mod-types" tabindex="-1">Mod Types <a class="header-anchor" href="#mod-types" aria-hidden="true">#</a></h3><p>As you can see above, we have yet to fill the <code>type</code> parameter of our <code>modInfo.lua</code>. This is because it changes depending on the type of mod we want to make.</p><ul><li><strong>World</strong> mods are the &#39;standard&#39; type of mod. They are run both on the client and the server, and are very useful when trying to add any sort of content.</li><li><strong>App</strong> mods are mods that affect the whole game. They are run on the client, and are useful for things like <a href="https://github.com/Majic-Jungle/sapiens-mod-creation/wiki/Localizations#creating-a-translation-mod" target="_blank" rel="noopener noreferrer">Localization</a></li></ul><p>Depending on the type of mod you&#39;d like to create, <code>type</code> is either <code>world</code> (for World mods) or <code>app</code> (for App mods).</p><h2 id="what-to-do-from-here" tabindex="-1">What to do from here? <a class="header-anchor" href="#what-to-do-from-here" aria-hidden="true">#</a></h2><p>This guide just sets up a mod for you, nothing more. To make the game do what you want to do, look over on the sidebar and read up on how it works before trying to implement it. Some topics I suggest checking out:</p><ul><li><a href="/sapiens-modding-wiki/guide/shadowing.html">Shadowing</a> - Further your knowledge on how shadowing works so you don&#39;t run into weird issues later.</li><li><a href="/sapiens-modding-wiki/docs/mod-types.html">Mod Types</a> - Understand what each type of mod does and how to develop them properly.</li><li><a href="/sapiens-modding-wiki/hammerstone/introduction.html">Hammerstone Framework</a> - Hammerstone Framework is a library that&#39;s designed to help modders and provide a level of &#39;protection&#39; from the Sapiens codebase.</li></ul>`,16),r=[n];function l(i,d,p,c,h,m){return o(),a("div",null,r)}var f=e(s,[["render",l]]);export{g as __pageData,f as default};