$('i[rel="pre"]').replaceWith(function() { return $('<pre><code>' + $(this).html() + '</code></pre>'); });

/*! Syntax */
$(function() {
    $('pre code').each(function() {
        var list = "(true|false|null|main|in|endif|if|endfor|for|while|finally|var|new|function|do|return|void|else|break|catch|instanceof|with|throw|case|default|try|this|switch|continue|typeof|delete)",
            rep1 = new RegExp(list + " ", "ig"),
            rep2 = new RegExp(list + "( ?)<span", "ig"),
            $this = $(this);
        $this.html($this.html().replace(/(<br>|\n)$/ig, "").replace(/(\t)/ig, "    ").replace(/&quot;/ig, "\"").replace(/&#(0|#)39;|&apos;/ig, "\'").replace(/(.?)'(.*?)'/g, "$1<span class='str'>\'$2\'</span>").replace(/(.?)"(.*?)"/g, "$1<span class='str'>\"$2\"</span>").replace(/(.?)(""|'')/g, "$1<span class='value'>$2</span>").replace(/(#[A-F0-9]{3,6})/ig, "<span class='hex'>$1</span>").replace(/(\d+(?!(.*&lt;)))/g, "<span class='num'>$1</span>").replace(/((#|\.)[\-_A-Z0-9]+)/ig, "<span class='selector'>$1</span>").replace(/(\{|\}|\(|\)|\[|\])/g, "<span class='bracket'>$1</span>").replace(/&lt;(.*?)&gt;/g, "<span class='tag'>&lt;$1&gt;</span>").replace(/&lt;!--([\s\S]*?)--&gt;/gm, "<span class='comment'>&lt;!--$1--&gt;</span>").replace(/\/\*([\s\S]*?)\*\//gm, "<span class='comment'>/*$1*/</span>").replace(/\/\/([^(ftp|file|mailto|http(s?):)].*)/g, "<span class='comment'>//$1</span>").replace(/<\/span>\/(.*)\/([gim]+),( ?)<span class='str'>/g, "</span><span class='regexp'>/$1/$2</span>, <span class='str'>").replace(rep1, "<span class='keyword'>$1</span> ").replace(rep2, "<span class='keyword'>$1</span>$2<span").replace(/function<\/span> (.[^<]*)<span/g, "function</span> <span class='name'>$1</span><span").replace(/([\-_A-Z]+)(?=(\s+|)):(.(?!\{)*)/ig, "<span class='attribute'>$1</span>:$2$3").replace(/h<span class='num'>([1-6])<\/span>/ig, "h$1").replace(/!important/ig, "<mark class='important'>!important</mark>").replace(/&lt;!(doctype)(.*)&gt;/ig, "<span class='doctype'>&lt;!$1$2&gt;</span>").replace(/@<span class='attribute'>(import|page|media|charset|keyframes|font-face)<\/span>/ig, "@$1").replace(/(@(import|page|media|charset|keyframes|font-face))/ig, "<span class='keyword'>$1</span>").replace(/<span class='bracket'>\[<\/span>(.*)<span class='bracket'>\]<\/span>/ig, "<span class='array'>[$1]</span>")).find('.str span, .regexp span, .comment span, .doctype span, .hex span, .array span, .url span').contents().unwrap();
        $this.wrapInner('<div class="selectable"></div>').append('<div class="the-num"></div>');

        // Insert the line number
        var num = $this.html().split(/\n|<br>/).length,
            count = 0;
        for (var i = 0; i < num; ++i) {
            count = count + 1;
            $this.find('.the-num').append(count + '.<br/>');
        }
        $this.css('padding-left', $this.find('.the-num').outerWidth() + 14);
    }).attr('title', 'Klik ganda untuk menyeleksi semua kode!').find('.selectable').on("dblclick", function() {
        var refNode = $(this)[0];
        if ($.browser.msie) {
            var range = document.body.createTextRange();
            range.moveToElementText(refNode);
            range.select();
        } else if ($.browser.mozilla || $.browser.opera || $.browser.webkit) {
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(refNode);
            selection.removeAllRanges();
            selection.addRange(range);
        } else if ($.browser.safari) {
            var selection = window.getSelection();
            selection.setBaseAndExtent(refNode, 0, refNode, 1);
        }
    });
});
