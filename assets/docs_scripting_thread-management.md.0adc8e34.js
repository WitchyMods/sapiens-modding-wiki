import{_ as e,o as a,c as t,U as o}from"./chunks/framework.1eef7d9b.js";const g=JSON.parse('{"title":"Thread Management","description":"","frontmatter":{},"headers":[],"relativePath":"docs/scripting/thread-management.md","filePath":"docs/scripting/thread-management.md","lastUpdated":1690231452000}'),r={name:"docs/scripting/thread-management.md"},n=o('<h1 id="thread-management" tabindex="-1">Thread Management <a class="header-anchor" href="#thread-management" aria-label="Permalink to &quot;Thread Management&quot;">​</a></h1><p>Sapiens uses multiple threads to manage tasks. These threads are more or less reflected in the folder structure of the Lua code. For example, code nested within <code>server</code> will only be executed on the server, and so forth.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Although Sapiens is currently singleplayer, the actual game is programmed as a multiplayer experience, where the server thread is intended to run on a dedicated server box, with clients connecting.</p></div><h2 id="threads-explained" tabindex="-1">Threads Explained <a class="header-anchor" href="#threads-explained" aria-label="Permalink to &quot;Threads Explained&quot;">​</a></h2><p>Each thread has its own separate lua enviornment, so you can&#39;t just call functions directly in other threads or anything like that. It is resource heavy for sure, but I decided it was the best solution. There are 4 Lua enviornments. The server, the main thread, the logic thread, and the globe thread, which is only used to render the globe in the main menu, so a max of 3 running at once.</p><h2 id="available-threads" tabindex="-1">Available Threads <a class="header-anchor" href="#available-threads" aria-label="Permalink to &quot;Available Threads&quot;">​</a></h2><p>Here is a quick explanation of all threads.</p><h3 id="mainthread" tabindex="-1">mainThread <a class="header-anchor" href="#mainthread" aria-label="Permalink to &quot;mainThread&quot;">​</a></h3><p>The <code>mainThread</code> does the rendering, handles UI, player movement, anything that needs immediate feedback to the user. You can think of the <code>mainThread</code> as the client. Lua scripts that only run on the main thread can be found in <code>scripts/mainThread</code></p><h3 id="logicthread" tabindex="-1">logicThread <a class="header-anchor" href="#logicthread" aria-label="Permalink to &quot;logicThread&quot;">​</a></h3><p>The <code>logicThread</code> is a secondary client-side thread, which handles handles everything else on the client, generating terrain, updating buffers for rendering, updating animations, communications with the server. Lua scripts that only run on the logic thread can be found <code>scripts/logicThread</code></p><h3 id="server" tabindex="-1">server <a class="header-anchor" href="#server" aria-label="Permalink to &quot;server&quot;">​</a></h3><p>The <code>server</code> thread runs the client-agnostic logic. It may help to think of Sapiens is a multiplayer game, where multiple clients can attach to the same server.</p><p>For example, if a client digs out a section of the world, this will need to be communicated to all clients. This will be done via the server.</p><p>Lua scripts that only run on the server can be found in <code>scripts/server</code></p><h3 id="globethread" tabindex="-1">globeThread <a class="header-anchor" href="#globethread" aria-label="Permalink to &quot;globeThread&quot;">​</a></h3><p>The <code>globe</code> thread is only used to render the globe in the main menu, so not relevant for gameplay code. Lua scripts that will only run on the globe thread can be found in <code>scripts/globeThread</code>.</p><h3 id="common-folder" tabindex="-1">Common Folder <a class="header-anchor" href="#common-folder" aria-label="Permalink to &quot;Common Folder&quot;">​</a></h3><p>The &#39;common&#39; folder in Sapiens contains a collection of files that can be accessed from multiple threads. These are usually shared stateful systems which need to be synced across multiple threads.</p><h2 id="thread-communication" tabindex="-1">Thread Communication <a class="header-anchor" href="#thread-communication" aria-label="Permalink to &quot;Thread Communication&quot;">​</a></h2><p>Sapiens has an RPC-like structure for elevating client calls to the server, and for server calls to be multicast to the clients. The only supported way to communicate between threads is the callMainThreadFunction/registerMainThreadFunction types of methods.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You can only send one param at once! Use a table if you must process multiple pieces of information at once.</p></div><h3 id="client-to-server" tabindex="-1">Client to Server <a class="header-anchor" href="#client-to-server" aria-label="Permalink to &quot;Client to Server&quot;">​</a></h3><p>To communicate for the client to the server, you will need to register a new net function (at startup), then call it.</p><ul><li><code>server:registerNetFunction</code> can be called on the <code>server</code> to make a server function available to the <code>mainThread</code>.</li><li><code>logicInterface:callServerFunction</code> can be called on the <code>mainThread</code> to fire a function on the <code>server</code>, assuming <code>registerNetFunction</code> is setup.</li></ul><h3 id="server-to-client" tabindex="-1">Server to Client <a class="header-anchor" href="#server-to-client" aria-label="Permalink to &quot;Server to Client&quot;">​</a></h3><p>To communicate from the Server to the Client, you will need to do a bit of setup. Unless I am mistaken, the path is: Server -&gt; Logic -&gt; MainThread</p><ul><li><code>logic:registerLogicThreadNetFunction</code> can be used to register a <code>logic</code> thread function as callable on the server.</li><li><code>logicInterface:registerMainThreadFunction</code> can be used to register a <code>mainThread</code> function as callable on the logic thread.</li></ul><p>And then finally, you can use:</p><ul><li><code>server:callClientFunction</code> can be called on the <code>server</code> to propagate a server call to the <code>mainThread</code>, via the <code>logic</code> thread.</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Lua objects need to be serialized/unserialized when those methods are called, and that can be a performance bottleneck if abused too much</p></div>',31),i=[n];function c(l,d,s,h,u,m){return a(),t("div",null,i)}const b=e(r,[["render",c]]);export{g as __pageData,b as default};
