import{_ as e,c as t,o as a,d as i}from"./app.474f198a.js";const m=JSON.parse(`{"title":"Troubleshooting the DDAPI","description":"","frontmatter":{},"headers":[{"level":2,"title":"Debug Boolean","slug":"debug-boolean","link":"#debug-boolean","children":[]},{"level":2,"title":"Problems","slug":"problems","link":"#problems","children":[{"level":3,"title":"Buildable Doesn't start Building","slug":"buildable-doesn-t-start-building","link":"#buildable-doesn-t-start-building","children":[]},{"level":3,"title":"Buildable Doesn't Complete","slug":"buildable-doesn-t-complete","link":"#buildable-doesn-t-complete","children":[]},{"level":3,"title":"Object Crashes when I Click On It","slug":"object-crashes-when-i-click-on-it","link":"#object-crashes-when-i-click-on-it","children":[]},{"level":3,"title":"Object Crashes when a Sapien Picks it Up","slug":"object-crashes-when-a-sapien-picks-it-up","link":"#object-crashes-when-a-sapien-picks-it-up","children":[]}]}],"relativePath":"hammerstone/ddapi/troubleshooting.md","lastUpdated":1681765670000}`),o={name:"hammerstone/ddapi/troubleshooting.md"},n=i('<h1 id="troubleshooting-the-ddapi" tabindex="-1">Troubleshooting the DDAPI <a class="header-anchor" href="#troubleshooting-the-ddapi" aria-hidden="true">#</a></h1><p>Modding in Sapiens is error prone, and although Hammerstone improves this in some ways, in other ways it can make it more confusing: Rather than working with the games code directly, you&#39;re instead authoring a &quot;config&quot; format, which Hammerstone interprets. This opens the doors to additional bugs to sneak in! This section will explain some common issues and their solutions. Happy modding!</p><h2 id="debug-boolean" tabindex="-1">Debug Boolean <a class="header-anchor" href="#debug-boolean" aria-hidden="true">#</a></h2><p>Simply set <code>&quot;debug&quot;: true</code> at the top of the config file, and Hammerstone will print additional information about the object.</p><h2 id="problems" tabindex="-1">Problems <a class="header-anchor" href="#problems" aria-hidden="true">#</a></h2><p>A list of problems, and solutions</p><h3 id="buildable-doesn-t-start-building" tabindex="-1">Buildable Doesn&#39;t start Building <a class="header-anchor" href="#buildable-doesn-t-start-building" aria-hidden="true">#</a></h3><p>If you notice that sapiens will gather the resources for a buildable but not start building it, this could be caused by the &quot;requirements&quot; being ill-matched. For example the &#39;tool&#39; or &#39;skill&#39; being defined in a weird or unexpected way.</p><h3 id="buildable-doesn-t-complete" tabindex="-1">Buildable Doesn&#39;t Complete <a class="header-anchor" href="#buildable-doesn-t-complete" aria-hidden="true">#</a></h3><p>If the buildable is finished, but never &quot;completed&quot;, this could be caused by an incorrect &#39;action_sequence&#39;. For example the sequence created from <code>createStandardBuildSequence</code> doesn&#39;t work for buildables.</p><h3 id="object-crashes-when-i-click-on-it" tabindex="-1">Object Crashes when I Click On It <a class="header-anchor" href="#object-crashes-when-i-click-on-it" aria-hidden="true">#</a></h3><p>Objects in Sapiens need the &quot;plans&quot; to be added. Resources have their own plans. Harvestables have their own plans. You can also add plans custom. But if you don&#39;t do any of this, the object will crash when you click on it.</p><h3 id="object-crashes-when-a-sapien-picks-it-up" tabindex="-1">Object Crashes when a Sapien Picks it Up <a class="header-anchor" href="#object-crashes-when-a-sapien-picks-it-up" aria-hidden="true">#</a></h3><p>Probably a storage issue</p>',14),s=[n];function l(r,d,h,c,u,b){return a(),t("div",null,s)}const g=e(o,[["render",l]]);export{m as __pageData,g as default};
