//<![CDATA[
    var disqus_loaded = false;
    function load_disqus() {

        // SIMPAN KODE JAVASCRIPT DISQUS DI BAWAH INI
(function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/blogger_item.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
            disqus_loaded = true;
    };
    window.onscroll = function(e) {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 800)) {
            //hit bottom of page
            if (disqus_loaded==false)
                load_disqus()
        }
    };
//]]>
