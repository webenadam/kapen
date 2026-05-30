<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="he"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="he"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="he"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="he">
<!--<![endif]-->

<head>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script> 
<script src="https://kapen.co.il/wp-content/themes/Kapen/js/jquery.bxslider.min.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function(){  
$('.bxslider').bxSlider({
	auto: true,
	pager: false,
	autoDirection: 'prev',
	pause: 4000
});
  });
</script>
<script type="text/javascript">
$(window).scroll(function (event) {
    var windowTop = $(this).scrollTop();        
    if (windowTop >= $("#footer").offset().top) {
        $("div#fixedSome").addClass("footerFixed");
    } else {
        $("div##fixedSome").removeClass("footerFixed");
    }
});	
</script>		

<!-- Basic Page Needs ================================================== 
================================================== -->

<meta charset="utf-8">

<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

<!-- Mobile Specific Metas ================================================== 
================================================== -->

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">

<!-- CSS ==================================================
================================================== -->

<link rel="stylesheet" href="https://kapen.co.il/wp-content/themes/Kapen/css/base.css">
<link rel="stylesheet" href="https://kapen.co.il/wp-content/themes/Kapen/css/skeleton.css">
<link rel="stylesheet" href="https://kapen.co.il/wp-content/themes/Kapen/css/screen.css">
<link rel="stylesheet" href="https://kapen.co.il/wp-content/themes/Kapen/css/prettyPhoto.css" type="text/css" media="screen" />

<!-- Favicons ==================================================
================================================== -->

<link rel="shortcut icon" href="images/favicon.png">
<link rel="apple-touch-icon" href="https://kapen.co.il/wp-content/themes/Kapen/images/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="72x72" href="https://kapen.co.il/wp-content/themes/Kapen/images/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="114x114" href="https://kapen.co.il/wp-content/themes/Kapen/images/apple-touch-icon-114x114.png">

<!-- Google Fonts ==================================================
================================================== -->

<link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic" rel='stylesheet' type='text/css'>
<body>

<!-- Home - Content Part ==================================================
================================================== -->

    <!-- Header | Logo, Menu
		================================================== -->
<div id="header">
  <div class="container">
    <div class="logo">
      <a href="https://kapen.co.il"><img src="https://kapen.co.il/wp-content/themes/Kapen/images/logo.png" alt="קפן אדריכלים" /></a>
    </div>
  </div>
</div>
<div id="menu">
  <div class="container header"> 
  
      <header>
      <div class="mainmenu">
        <div id="mainmenu">
          <ul class="sf-menu">
            <li><a href="https://kapen.co.il" id="visited">דף הבית</a></li>
            <li><a href="https://kapen.co.il/תיק-עבודות/">תיק עבודות</a></li>
            <li><a href="https://kapen.co.il/מטבחים/">מטבחים</a></li>
            <li><a href="https://kapen.co.il/כתבות/">תמ"א 38</a></li>
            <li><a href="https://kapen.co.il/צרו-קשר/">צרו קשר</a></li>
          </ul>
        </div>
        
        <!-- Responsive Menu -->
        
        <form id="responsive-menu" action="#" method="post">
          <select>
            <option value="http://kapen.co.il">תפריט</option>
            <option value="index.html">דף הבית</option>
            <option value="http://kapen.co.il/תיק-עבודות/">תיק עבודות</option>
            <option value="http://kapen.co.il/מטבחים/">מטבחים</option>
            <option value="http://kapen.co.il/כתבות/">תמ"א 38</option>
            <option value="http://kapen.co.il/צרו-קשר/">צרו קשר</option>
          </select>
        </form>
      </div>
    </header>
  </div>
</div>
<div id="mightyWarper">
	<div id="primary" class="site-content">
		<div id="content" role="main">

			<article id="post-0" class="post error404 no-results not-found">
				<header class="entry-header">
					<h1 class="entry-title">זה קצת מביך, לא?</h1>
				</header>

				<div class="entry-content">
					<p>נראה שלא הצלחנו למצוא את מה שחיפשת. ייתכן שביצוע חיפוש יסייע.</p>
					<form role="search" method="get" id="searchform" class="searchform" action="https://kapen.co.il/">
				<div>
					<label class="screen-reader-text" for="s">חיפוש:</label>
					<input type="text" value="" name="s" id="s" />
					<input type="submit" id="searchsubmit" value="חיפוש" />
				</div>
			</form>				</div><!-- .entry-content -->
			</article><!-- #post-0 -->

		</div><!-- #content -->
	</div><!-- #primary -->

</div><!-- mightyWarper -->
<div class="blankSeparator1"></div>

<!--Footer ==================================================
================================================== -->
<div id="fixedSome" class="footerFixed">
<div id="footerBulb"></div>
<div id="footer">
  <div class="container footer">
    <div class="one_fourth">
    <div class="footerIcns" id ="phoneicn"></div>
     <h4>טלפון :09-7749599</h4>
     <span class="footerDivider"></span>
    </div>
    <div class="one_fourth">
    <div class="footerIcns" id ="iphoneicn"></div>
    <h4>נייד: 050-8507335/6</h4>
    <span class="footerDivider"></span>
    </div>
    <div class="one_fourth">
    <div class="footerIcns" id ="faxicn"></div>
     <h4>פקס: 09-7749599</h4>
    <span class="footerDivider"></span>
    </div>
    <div class="one_fourth lastcolumn">
    <div class="footerIcns" id ="mailicn"></div>
     <h4>דואר: צרו קשר</h4>
    </div>
  </div>
  <!-- container ends here -->

</div>
</div>
<!-- footer ends here -->
<!-- Copyright ==================================================
================================================== -->
<div id="copyright">
  <div class="container">
      <p>
בניית אתר על-ידי <a href="http://www.benadam.co.il">בנאדם</a>.</p>
    </div>
    </div>
  </div>
  <!-- container ends here -->
</div>
<!-- copyright ends here -->
<!-- End Document
================================================== -->
<!-- Scripts ==================================================
================================================== -->

<!-- Main js files -->
<script src="https://kapen.co.il/wp-content/themes/Kapen/js/screen.js" type="text/javascript"></script>
<!-- Tooltip -->
<script src="https://kapen.co.il/wp-content/themes/Kapen/js/poshytip-1.0/src/jquery.poshytip.min.js" type="text/javascript"></script>
<!-- Tabs -->
<script src="https://kapen.co.il/wp-content/themes/Kapen/js/tabs.js" type="text/javascript"></script>
<!-- Tweets -->
<script src="https://kapen.co.il/wp-content/themes/Kapen/js/jquery.tweetable.js" type="text/javascript"></script>
<!-- Include prettyPhoto -->
<script src="https://kapen.co.il/wp-content/themes/Kapen/js/jquery.prettyPhoto.js" type="text/javascript"></script>
<!-- Include Superfish -->
<script src="https://kapen.co.il/wp-content/themes/Kapen/js/superfish.js" type="text/javascript"></script>
<script src="https://kapen.co.il/wp-content/themes/Kapen/js/hoverIntent.js" type="text/javascript"></script>

<script src="https://kapen.co.il/wp-content/themes/Kapen/js/respond.min.js" type="text/javascript"></script>
<script src="https://kapen.co.il/wp-content/themes/Kapen/js/css3-mediaqueries.js" type="text/javascript"></script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37387503-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

<meta name='robots' content='noindex, follow' />

	<!-- This site is optimized with the Yoast SEO plugin v27.7 - https://yoast.com/product/yoast-seo-wordpress/ -->
	<title>הדף לא נמצא - קפן</title>
	<meta property="og:locale" content="he_IL" />
	<meta property="og:title" content="הדף לא נמצא - קפן" />
	<meta property="og:site_name" content="קפן" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https:\/\/schema.org","@graph":[{"@type":"WebSite","@id":"https:\/\/kapen.co.il\/#website","url":"https:\/\/kapen.co.il\/","name":"קפן","description":"אדריכלים","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https:\/\/kapen.co.il\/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"he-IL"}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel="alternate" type="application/rss+xml" title="קפן &laquo; פיד‏" href="https://kapen.co.il/feed/" />
<link rel="alternate" type="application/rss+xml" title="קפן &laquo; פיד תגובות‏" href="https://kapen.co.il/comments/feed/" />
<style id="wp-img-auto-sizes-contain-inline-css">
img:is([sizes=auto i],[sizes^="auto," i]){contain-intrinsic-size:3000px 1500px}
/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
</style>
<style id="wp-emoji-styles-inline-css">

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
/*# sourceURL=wp-emoji-styles-inline-css */
</style>
<style id="wp-block-library-inline-css">
:root{--wp-block-synced-color:#7a00df;--wp-block-synced-color--rgb:122,0,223;--wp-bound-block-color:var(--wp-block-synced-color);--wp-editor-canvas-background:#ddd;--wp-admin-theme-color:#007cba;--wp-admin-theme-color--rgb:0,124,186;--wp-admin-theme-color-darker-10:#006ba1;--wp-admin-theme-color-darker-10--rgb:0,107,160.5;--wp-admin-theme-color-darker-20:#005a87;--wp-admin-theme-color-darker-20--rgb:0,90,135;--wp-admin-border-width-focus:2px}@media (min-resolution:192dpi){:root{--wp-admin-border-width-focus:1.5px}}.wp-element-button{cursor:pointer}:root .has-very-light-gray-background-color{background-color:#eee}:root .has-very-dark-gray-background-color{background-color:#313131}:root .has-very-light-gray-color{color:#eee}:root .has-very-dark-gray-color{color:#313131}:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background{background:linear-gradient(135deg,#00d084,#0693e3)}:root .has-purple-crush-gradient-background{background:linear-gradient(135deg,#34e2e4,#4721fb 50%,#ab1dfe)}:root .has-hazy-dawn-gradient-background{background:linear-gradient(135deg,#faaca8,#dad0ec)}:root .has-subdued-olive-gradient-background{background:linear-gradient(135deg,#fafae1,#67a671)}:root .has-atomic-cream-gradient-background{background:linear-gradient(135deg,#fdd79a,#004a59)}:root .has-nightshade-gradient-background{background:linear-gradient(135deg,#330968,#31cdcf)}:root .has-midnight-gradient-background{background:linear-gradient(135deg,#020381,#2874fc)}:root{--wp--preset--font-size--normal:16px;--wp--preset--font-size--huge:42px}.has-regular-font-size{font-size:1em}.has-larger-font-size{font-size:2.625em}.has-normal-font-size{font-size:var(--wp--preset--font-size--normal)}.has-huge-font-size{font-size:var(--wp--preset--font-size--huge)}:root .has-text-align-center{text-align:center}:root .has-text-align-left{text-align:left}:root .has-text-align-right{text-align:right}.has-fit-text{white-space:nowrap!important}#end-resizable-editor-section{display:none}.aligncenter{clear:both}.items-justified-left{justify-content:flex-start}.items-justified-center{justify-content:center}.items-justified-right{justify-content:flex-end}.items-justified-space-between{justify-content:space-between}.screen-reader-text{word-wrap:normal!important;border:0;clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.screen-reader-text:focus{background-color:#ddd;clip-path:none;color:#444;display:block;font-size:1em;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}html :where(.has-border-color){border-style:solid}html :where([style*=border-color]){border-style:solid}html :where([style*=border-top-color]){border-top-style:solid}html :where([style*=border-right-color]){border-right-style:solid}html :where([style*=border-bottom-color]){border-bottom-style:solid}html :where([style*=border-left-color]){border-left-style:solid}html :where([style*=border-width]){border-style:solid}html :where([style*=border-top-width]){border-top-style:solid}html :where([style*=border-right-width]){border-right-style:solid}html :where([style*=border-bottom-width]){border-bottom-style:solid}html :where([style*=border-left-width]){border-left-style:solid}html :where(img[class*=wp-image-]){height:auto;max-width:100%}:where(figure){margin:0 0 1em}html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:var(--wp-admin--admin-bar--height,0px)}@media screen and (max-width:600px){html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:0px}}
/*wp_block_styles_on_demand_placeholder:6a19b0888b0ff*/
/*# sourceURL=wp-block-library-inline-css */
</style>
<style id="classic-theme-styles-inline-css">
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
/*# sourceURL=/wp-includes/css/classic-themes.min.css */
</style>
<style id="wp-block-styles-placeholder-inline-css">
:root { --wp-internal-comment: "Placeholder for wp_hoist_late_printed_styles() to replace with the block styles printed at wp_footer." }
/*# sourceURL=wp-block-styles-placeholder-inline-css */
</style>
<style id="wp-global-styles-placeholder-inline-css">
:root { --wp-internal-comment: "Placeholder for wp_hoist_late_printed_styles() to replace with the global-styles printed at wp_footer." }
/*# sourceURL=wp-global-styles-placeholder-inline-css */
</style>
<link rel='stylesheet' id='twentytwelve-style-css' href='https://kapen.co.il/wp-content/themes/Kapen/style.css?ver=7.0' media='all' />
<link rel='stylesheet' id='new-royalslider-core-css-css' href='https://kapen.co.il/wp-content/plugins/new-royalslider/lib/royalslider/royalslider.css?ver=3.0.84' media='all' />
<link rel='stylesheet' id='rsDefaultInv-css-css' href='https://kapen.co.il/wp-content/plugins/new-royalslider/lib/royalslider/skins/default-inverted/rs-default-inverted.css?ver=3.0.84' media='all' />
<script id="jquery-core-js" src="https://kapen.co.il/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"></script>
<script id="jquery-migrate-js" src="https://kapen.co.il/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"></script>
<link rel="https://api.w.org/" href="https://kapen.co.il/wp-json/" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://kapen.co.il/xmlrpc.php?rsd" />
<link rel="stylesheet" href="https://kapen.co.il/wp-content/themes/Kapen/rtl.css" media="screen" /><meta name="generator" content="WordPress 7.0" />
</head>

<script type="speculationrules">
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/Kapen/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
</script>
<script id="twentytwelve-navigation-js" src="https://kapen.co.il/wp-content/themes/Kapen/js/navigation.js?ver=1.0"></script>
<script id="new-royalslider-main-js-js" src="https://kapen.co.il/wp-content/plugins/new-royalslider/lib/royalslider/jquery.royalslider.min.js?ver=3.0.84"></script>
<script id="wp-emoji-settings" type="application/json">
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://kapen.co.il/wp-includes/js/wp-emoji-release.min.js?ver=7.0"}}
</script>
<script type="module">
/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://kapen.co.il/wp-includes/js/wp-emoji-loader.min.js
</script>


</body>
</html>
