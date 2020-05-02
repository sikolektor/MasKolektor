    var disqus_loaded = false;
    function load_disqus() {

        // SIMPAN KODE JAVASCRIPT DISQUS DI BAWAH INI
(function() {
  var bloggerjs = document.createElement('script');
  bloggerjs.type = 'text/javascript'
  bloggerjs.async = true;
  bloggerjs.src = '//'+disqus_shortname+'.disqus.com/blogger_item.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bloggerjs);
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
