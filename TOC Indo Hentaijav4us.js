/*!
 * Advanced Blogger TOC Script by Taufik Nurrohman
 * URL: https://plus.google.com/108949996304093815163/about
 */
var loadToc,loadCategories,_toc={init:function(){var e={homePage:"http://"+window.location.hostname,maxResults:30,numChars:270,thumbWidth:80,navText:"Berikutnya",resetToc:"Kembali ke Awal",noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",loading:"<span class='button disabled'>Memuat...</span>",counting:"<div class='dte_search-description-message'>Menghitung artikel...</div>",searching:"<span class='button disabled'>Mencari...</span>"},t=document,a=function(e){return t.getElementById(e)},n={a:a("dte_toc-feed-order"),b:a("dte_toc-label-sorter").parentNode,c:a("dte_toc-feed-searcher"),d:a("dte_toc-feed-searcher-text"),e:a("dte_toc-result-description"),f:a("dte_toc-feed-container"),g:a("dte_toc-feed-nav"),h:t.getElementsByTagName("head")[0],i:0,j:null,k:"published",l:0,m:""},r={a:function(e){var t=a(e);t.parentNode.removeChild(t)},b:function(e,i){var s=t.createElement("script");s.type="text/javascript",s.id=i,s.src=e,a(i)&&r.a(i),n.h.appendChild(s)},c:function(t,a,i){n.i++,n.e.innerHTML=e.counting,n.g.innerHTML=e[1==t?"searching":"loading"],0===t?r.b(null!==a?e.homePage+"/feeds/posts/summary/-/"+a+"?alt=json-in-script&start-index="+(n.i*e.maxResults+1)+"&max-results="+e.maxResults+"&orderby="+i+"&callback=loadToc":e.homePage+"/feeds/posts/summary?alt=json-in-script&start-index="+(n.i*e.maxResults+1)+"&max-results="+e.maxResults+"&orderby="+i+"&callback=loadToc","dte_temporer-script-1"):1==t&&r.b(e.homePage+"/feeds/posts/summary?alt=json-in-script&start-index="+(n.i*e.maxResults+1)+"&max-results="+e.maxResults+"&q="+a+"&orderby="+i+"&callback=loadToc","dte_temporer-script-1"),n.j=null!==a?a:null,n.l=t,n.a.disabled=!0,n.b.children[0].disabled=!0},d:function(a){var i;if(n.g.innerHTML="",n.e.innerHTML=1==n.l?'<div class="dte_search-description-message">Hasil penelusuran untuk kata kunci <strong>&#8220;'+n.m+"&#8221;</strong> ("+a.feed.openSearch$totalResults.$t+" Temuan)</div>":'<div class="dte_search-description-message">Total: '+a.feed.openSearch$totalResults.$t+" Artikel</div>","entry"in a.feed){for(var s,o,l,c,d=a.feed.entry,u="0 Komentar",p=0;p<e.maxResults&&p!=d.length;p++){s=d[p].title.$t,l="summary"in d[p]?d[p].summary.$t.replace(/<br ?\/?>/gi," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,e.numChars):"",c="media$thumbnail"in d[p]?d[p].media$thumbnail.url.replace(/\/s[0-9]+\-c/,"/s"+e.thumbWidth+"-c"):e.noImage.replace(/\/s[0-9]+\-c/,"/s"+e.thumbWidth+"-c");for(var f=0,h=d[p].link.length;h>f;f++)if("alternate"==d[p].link[f].rel){o=d[p].link[f].href;break}for(var m=0,g=d[p].link.length;g>m;m++)if("replies"==d[p].link[m].rel&&"text/html"==d[p].link[m].type){u=d[p].link[m].title;break}i=t.createElement("li"),i.innerHTML='<div class="dte_toc-inner cf"><img style="width:'+e.thumbWidth+"px!important;height:"+e.thumbWidth+'px!important;max-width:none!important;max-height:none!important;" src="'+c+'" alt="'+s+'" class="dte_toc-thumbnail"><a class="dte_toc-title" href="'+o+'" target="_blank">'+s+"</a><strong> - ("+u+')</strong><br><div class="dte_toc-summary">'+l+"&hellip;</div></div>",n.f.appendChild(i)}i=t.createElement("a"),i.className="button",i.href="#load-more",i.innerHTML=e.navText,i.onclick=function(){return r.c(n.l,n.j,n.k),!1}}else i=t.createElement("a"),i.className="button",i.href="#reset-content",i.innerHTML=e.resetToc,i.onclick=function(){return n.i=-1,n.e.innerHTML=e.counting,n.f.innerHTML="",r.c(0,null,"published"),n.a.innerHTML=n.a.innerHTML,n.b.children[0].innerHTML=n.b.children[0].innerHTML,!1};n.g.appendChild(i),n.a.disabled=!1,n.b.children[0].disabled=!1},e:function(t){for(var a=t.feed.category,i='<select id="dte_toc-label-sorter"><option value="" selected disabled>Kategori...</option>',s=0,o=a.length;o>s;s++)i+='<option value="'+encodeURIComponent(a[s].term)+'">'+a[s].term+"</option>";i+="</select>",n.b.innerHTML=i,n.b.children[0].onchange=function(){n.i=-1,n.f.innerHTML="",n.g.innerHTML=e.loading,r.c(0,this.value,n.k)}}};loadToc=r.d,loadCategories=r.e,r.b(e.homePage+"/feeds/posts/summary?alt=json-in-script&start-index="+(n.i+1)+"&max-results="+e.maxResults+"&orderby=published&callback=loadToc","dte_temporer-script-1"),r.b(e.homePage+"/feeds/posts/summary?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories","dte_temporer-script-2"),n.a.onchange=function(){n.i=-1,n.f.innerHTML="",n.g.innerHTML=e.counting,n.b.children[0].innerHTML=n.b.children[0].innerHTML,r.c(0,null,this.value),n.k=this.value},n.c.onsubmit=function(){return n.i=-1,n.f.innerHTML="",n.m=n.d.value,r.c(1,n.d.value,n.k),!1}}};_toc.init();