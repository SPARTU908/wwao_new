<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title inertia>{{ config('app.name', 'Laravel') }}</title>

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.bunny.net">
	<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

	<link rel="alternate" type="application/rss+xml" title="Charity Home &raquo; Feed" href="feed/index.html" />
	<link rel="alternate" type="application/rss+xml" title="Charity Home &raquo; Comments Feed" href="comments/feed/index.html" />
	<link rel="alternate" type="text/calendar" title="Charity Home &raquo; iCal Feed" href="events/indexedf3.html?ical=1" />
	<link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="wp-json/oembed/1.0/embedeaf5.json?url=https%3A%2F%2Ffastwpdemo.com%2Fdemo%2Fcharityhome%2F" />
	<link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="wp-json/oembed/1.0/embed45cc?url=https%3A%2F%2Ffastwpdemo.com%2Fdemo%2Fcharityhome%2F&amp;format=xml" />
	<style id='wp-img-auto-sizes-contain-inline-css' type='text/css'>
		img:is([sizes=auto i], [sizes^="auto," i]) {
			contain-intrinsic-size: 3000px 1500px
		}

		/*# sourceURL=wp-img-auto-sizes-contain-inline-css */
	</style>
	<link rel='stylesheet' id='elementor-icons-css' href='{{ asset("wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min192d.css?ver=5.23.0") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='elementor-common-css' href='{{ asset("wp-content/plugins/elementor/assets/css/common.min023e.css?ver=3.17.2") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='e-theme-ui-light-css' href='{{ asset("wp-content/plugins/elementor/assets/css/theme-light.min023e.css?ver=3.17.2") }}' type='text/css' media='all' />
	<style id='wp-emoji-styles-inline-css' type='text/css'>
		img.wp-smiley,
		img.emoji {
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
	<link rel='stylesheet' id='wp-block-library-css' href="{{ asset('wp-includes//css/dist/block-library/style.mind4d0.css?ver=6.9') }}" type='text/css' media='all' />
	<style id='global-styles-inline-css' type='text/css'>
		:root {
			--wp--preset--aspect-ratio--square: 1;
			--wp--preset--aspect-ratio--4-3: 4/3;
			--wp--preset--aspect-ratio--3-4: 3/4;
			--wp--preset--aspect-ratio--3-2: 3/2;
			--wp--preset--aspect-ratio--2-3: 2/3;
			--wp--preset--aspect-ratio--16-9: 16/9;
			--wp--preset--aspect-ratio--9-16: 9/16;
			--wp--preset--color--black: #000000;
			--wp--preset--color--cyan-bluish-gray: #abb8c3;
			--wp--preset--color--white: #ffffff;
			--wp--preset--color--pale-pink: #f78da7;
			--wp--preset--color--vivid-red: #cf2e2e;
			--wp--preset--color--luminous-vivid-orange: #ff6900;
			--wp--preset--color--luminous-vivid-amber: #fcb900;
			--wp--preset--color--light-green-cyan: #7bdcb5;
			--wp--preset--color--vivid-green-cyan: #00d084;
			--wp--preset--color--pale-cyan-blue: #8ed1fc;
			--wp--preset--color--vivid-cyan-blue: #0693e3;
			--wp--preset--color--vivid-purple: #9b51e0;
			--wp--preset--color--strong-yellow: #f7bd00;
			--wp--preset--color--strong-white: #fff;
			--wp--preset--color--light-black: #242424;
			--wp--preset--color--very-light-gray: #797979;
			--wp--preset--color--very-dark-black: #000000;
			--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%);
			--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
			--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgb(252, 185, 0) 0%, rgb(255, 105, 0) 100%);
			--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(207, 46, 46) 100%);
			--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
			--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
			--wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
			--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
			--wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
			--wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
			--wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
			--wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
			--wp--preset--font-size--small: 10px;
			--wp--preset--font-size--medium: 20px;
			--wp--preset--font-size--large: 24px;
			--wp--preset--font-size--x-large: 42px;
			--wp--preset--font-size--normal: 15px;
			--wp--preset--font-size--huge: 36px;
			--wp--preset--spacing--20: 0.44rem;
			--wp--preset--spacing--30: 0.67rem;
			--wp--preset--spacing--40: 1rem;
			--wp--preset--spacing--50: 1.5rem;
			--wp--preset--spacing--60: 2.25rem;
			--wp--preset--spacing--70: 3.38rem;
			--wp--preset--spacing--80: 5.06rem;
			--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
			--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
			--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
			--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);
			--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);
		}

		:where(.is-layout-flex) {
			gap: 0.5em;
		}

		:where(.is-layout-grid) {
			gap: 0.5em;
		}

		body .is-layout-flex {
			display: flex;
		}

		.is-layout-flex {
			flex-wrap: wrap;
			align-items: center;
		}

		.is-layout-flex> :is(*, div) {
			margin: 0;
		}

		body .is-layout-grid {
			display: grid;
		}

		.is-layout-grid> :is(*, div) {
			margin: 0;
		}

		:where(.wp-block-columns.is-layout-flex) {
			gap: 2em;
		}

		:where(.wp-block-columns.is-layout-grid) {
			gap: 2em;
		}

		:where(.wp-block-post-template.is-layout-flex) {
			gap: 1.25em;
		}

		:where(.wp-block-post-template.is-layout-grid) {
			gap: 1.25em;
		}

		.has-black-color {
			color: var(--wp--preset--color--black) !important;
		}

		.has-cyan-bluish-gray-color {
			color: var(--wp--preset--color--cyan-bluish-gray) !important;
		}

		.has-white-color {
			color: var(--wp--preset--color--white) !important;
		}

		.has-pale-pink-color {
			color: var(--wp--preset--color--pale-pink) !important;
		}

		.has-vivid-red-color {
			color: var(--wp--preset--color--vivid-red) !important;
		}

		.has-luminous-vivid-orange-color {
			color: var(--wp--preset--color--luminous-vivid-orange) !important;
		}

		.has-luminous-vivid-amber-color {
			color: var(--wp--preset--color--luminous-vivid-amber) !important;
		}

		.has-light-green-cyan-color {
			color: var(--wp--preset--color--light-green-cyan) !important;
		}

		.has-vivid-green-cyan-color {
			color: var(--wp--preset--color--vivid-green-cyan) !important;
		}

		.has-pale-cyan-blue-color {
			color: var(--wp--preset--color--pale-cyan-blue) !important;
		}

		.has-vivid-cyan-blue-color {
			color: var(--wp--preset--color--vivid-cyan-blue) !important;
		}

		.has-vivid-purple-color {
			color: var(--wp--preset--color--vivid-purple) !important;
		}

		.has-black-background-color {
			background-color: var(--wp--preset--color--black) !important;
		}

		.has-cyan-bluish-gray-background-color {
			background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
		}

		.has-white-background-color {
			background-color: var(--wp--preset--color--white) !important;
		}

		.has-pale-pink-background-color {
			background-color: var(--wp--preset--color--pale-pink) !important;
		}

		.has-vivid-red-background-color {
			background-color: var(--wp--preset--color--vivid-red) !important;
		}

		.has-luminous-vivid-orange-background-color {
			background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
		}

		.has-luminous-vivid-amber-background-color {
			background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
		}

		.has-light-green-cyan-background-color {
			background-color: var(--wp--preset--color--light-green-cyan) !important;
		}

		.has-vivid-green-cyan-background-color {
			background-color: var(--wp--preset--color--vivid-green-cyan) !important;
		}

		.has-pale-cyan-blue-background-color {
			background-color: var(--wp--preset--color--pale-cyan-blue) !important;
		}

		.has-vivid-cyan-blue-background-color {
			background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
		}

		.has-vivid-purple-background-color {
			background-color: var(--wp--preset--color--vivid-purple) !important;
		}

		.has-black-border-color {
			border-color: var(--wp--preset--color--black) !important;
		}

		.has-cyan-bluish-gray-border-color {
			border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
		}

		.has-white-border-color {
			border-color: var(--wp--preset--color--white) !important;
		}

		.has-pale-pink-border-color {
			border-color: var(--wp--preset--color--pale-pink) !important;
		}

		.has-vivid-red-border-color {
			border-color: var(--wp--preset--color--vivid-red) !important;
		}

		.has-luminous-vivid-orange-border-color {
			border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
		}

		.has-luminous-vivid-amber-border-color {
			border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
		}

		.has-light-green-cyan-border-color {
			border-color: var(--wp--preset--color--light-green-cyan) !important;
		}

		.has-vivid-green-cyan-border-color {
			border-color: var(--wp--preset--color--vivid-green-cyan) !important;
		}

		.has-pale-cyan-blue-border-color {
			border-color: var(--wp--preset--color--pale-cyan-blue) !important;
		}

		.has-vivid-cyan-blue-border-color {
			border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
		}

		.has-vivid-purple-border-color {
			border-color: var(--wp--preset--color--vivid-purple) !important;
		}

		.has-vivid-cyan-blue-to-vivid-purple-gradient-background {
			background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
		}

		.has-light-green-cyan-to-vivid-green-cyan-gradient-background {
			background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
		}

		.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
			background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
		}

		.has-luminous-vivid-orange-to-vivid-red-gradient-background {
			background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
		}

		.has-very-light-gray-to-cyan-bluish-gray-gradient-background {
			background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
		}

		.has-cool-to-warm-spectrum-gradient-background {
			background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
		}

		.has-blush-light-purple-gradient-background {
			background: var(--wp--preset--gradient--blush-light-purple) !important;
		}

		.has-blush-bordeaux-gradient-background {
			background: var(--wp--preset--gradient--blush-bordeaux) !important;
		}

		.has-luminous-dusk-gradient-background {
			background: var(--wp--preset--gradient--luminous-dusk) !important;
		}

		.has-pale-ocean-gradient-background {
			background: var(--wp--preset--gradient--pale-ocean) !important;
		}

		.has-electric-grass-gradient-background {
			background: var(--wp--preset--gradient--electric-grass) !important;
		}

		.has-midnight-gradient-background {
			background: var(--wp--preset--gradient--midnight) !important;
		}

		.has-small-font-size {
			font-size: var(--wp--preset--font-size--small) !important;
		}

		.has-medium-font-size {
			font-size: var(--wp--preset--font-size--medium) !important;
		}

		.has-large-font-size {
			font-size: var(--wp--preset--font-size--large) !important;
		}

		.has-x-large-font-size {
			font-size: var(--wp--preset--font-size--x-large) !important;
		}

		/*# sourceURL=global-styles-inline-css */
	</style>

	<style id='classic-theme-styles-inline-css' type='text/css'>
		/*! This file is auto-generated */
		.wp-block-button__link {
			color: #fff;
			background-color: #32373c;
			border-radius: 9999px;
			box-shadow: none;
			text-decoration: none;
			padding: calc(.667em + 2px) calc(1.333em + 2px);
			font-size: 1.125em
		}

		.wp-block-file__button {
			background: #32373c;
			color: #fff;
			text-decoration: none
		}
	</style>
	<link rel='stylesheet' id='contact-form-7-css' href='{{ asset("wp-content/plugins/contact-form-7/includes/css/styles080f.css?ver=5.8.2") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='charitable-styles-css' href='{{ asset("wp-content/plugins/charitable/assets/css/charitable.minf90a.css?ver=1.8.0.2") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='bootstrap-css' href='{{ asset("wp-content/themes/charityhome/assets/css/bootstrap.mind4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='fontawesome-all-css' href='{{ asset("wp-content/themes/charityhome/assets/css/font-awesome.mind4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='hover-css' href='{{ asset("wp-content/themes/charityhome/assets/css/hoverd4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='jquery-fancybox-css' href='{{ asset("wp-content/themes/charityhome/assets/css/jquery.fancyboxd4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='jquery-bxslider-css' href='{{ asset("wp-content/themes/charityhome/assets/css/jquery.bxsliderd4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='owl-carousel-css' href='{{ asset("wp-content/themes/charityhome/assets/css/owl.carouseld4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='owl-theme-default-min-css' href='{{ asset("wp-content/themes/charityhome/assets/css/owl.theme.default.mind4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='animate-min-css' href='{{ asset("wp-content/themes/charityhome/assets/css/animate.mind4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='flaticon-css' href='{{ asset("wp-content/themes/charityhome/assets/css/flaticond4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='jquery-ui-css' href='{{ asset("wp-content/themes/charityhome/assets/js/jquery-uid4d0.html?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='charityhome-main-css' href='{{ asset("wp-content/themes/charityhome/styled4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='charityhome-main-style-css' href='{{ asset("wp-content/themes/charityhome/assets/css/styled4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='charityhome-responsive-css' href='{{ asset("wp-content/themes/charityhome/assets/css/responsived4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='charityhome-custom-css' href='{{ asset("wp-content/themes/charityhome/assets/css/customd4d0.css?ver=6.9") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='charityhome-theme-fonts-css' href='https://fonts.googleapis.com/css?family=Poppins%3A300%2C400%2C500%2C600%2C700%7CRoboto+Condensed%3Awght%40400%2C700%26display%3Dswap&amp;subset=latin%2Clatin-ext' type='text/css' media='all' />
	<link rel='stylesheet' id='elementor-frontend-css' href='{{ asset("wp-content/plugins/elementor/assets/css/frontend-lite.min023e.css?ver=3.17.2") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='swiper-css' href='{{ asset("wp-content/plugins/elementor/assets/lib/swiper/css/swiper.min48f5.css?ver=5.3.6") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='elementor-post-9-css' href='{{ asset("wp-content/uploads/elementor/css/post-95dc2.css?ver=1698923881") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='elementor-global-css' href='{{ asset("wp-content/uploads/elementor/css/global5dc2.css?ver=1698923881") }}' type='text/css' media='all' />
	<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=auto&amp;ver=6.9' type='text/css' media='all' />
	<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/charitable/assets/js/libraries/js-cookie.min6b25.js?ver=2.1.4') }}" id="js-cookie-js"></script>
	<script type="text/javascript" id="charitable-sessions-js-extra">
		/* <![CDATA[ */
		var CHARITABLE_SESSION = {
			"ajaxurl": "https://fastwpdemo.com/demo/charityhome/wp-admin/admin-ajax.php",
			"id": "",
			"cookie_name": "charitable_session",
			"expiration": "86400",
			"expiration_variant": "82800",
			"secure": "",
			"cookie_path": "/demo/charityhome/",
			"cookie_domain": "",
			"generated_id": "84cd53ca0f135989cd282e042764dfa5",
			"disable_cookie": ""
		};
		//# sourceURL=charitable-sessions-js-extra
		/* ]]> */
	</script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/charitable/assets/js/charitable-session.minf90a.js?ver=1.8.0.2') }}" id="charitable-sessions-js"></script>
	<script type="text/javascript" id="jquery-core-js-extra">
		/* <![CDATA[ */
		var charityhome_data = {
			"ajaxurl": "https://fastwpdemo.com/demo/charityhome/wp-admin/admin-ajax.php",
			"nonce": "ef3e1e2f47"
		};
		//# sourceURL=jquery-core-js-extra
		/* ]]> */
	</script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/jquery/jquery.minf43b.js?ver=3.7.1') }}" id="jquery-core-js"></script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/jquery/jquery-migrate.min5589.js?ver=3.4.1') }}" id="jquery-migrate-js"></script>
	<link rel="https://api.w.org/" href="wp-json/index.html" />
	<link rel="alternate" title="JSON" type="application/json" href="wp-json/wp/v2/pages/12.json" />
	<link rel="EditURI" type="application/rsd+xml" title="RSD" href="xmlrpc0db0.html?rsd" />
	<meta name="generator" content="WordPress 6.9" />
	<link rel="canonical" href="index.html" />
	<link rel='shortlink' href='index.html' />
	<meta name="tec-api-version" content="v1">
	<meta name="tec-api-origin" content="https://fastwpdemo.com/demo/charityhome">
	<link rel="alternate" href="wp-json/tribe/events/v1/index.html" />
	<style id="charitable-highlight-colour-styles">
		.campaign-raised .amount,
		.campaign-figures .amount,
		.donors-count,
		.time-left,
		.charitable-form-field a:not(.button),
		.charitable-form-fields .charitable-fieldset a:not(.button),
		.charitable-notice,
		.charitable-notice .errors a {
			color: #f93213;
		}

		.campaign-progress-bar .bar,
		.donate-button,
		.charitable-donation-form .donation-amount.selected,
		.charitable-donation-amount-form .donation-amount.selected {
			background-color: #f93213;
		}

		.charitable-donation-form .donation-amount.selected,
		.charitable-donation-amount-form .donation-amount.selected,
		.charitable-notice,
		.charitable-drag-drop-images li:hover a.remove-image,
		.supports-drag-drop .charitable-drag-drop-dropzone.drag-over {
			border-color: #f93213;
		}
	</style>
	<meta name="generator" content="Elementor 3.17.2; features: e_dom_optimization, e_optimized_assets_loading, e_optimized_css_loading, additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-auto">
	<meta name="generator" content="Powered by Slider Revolution 6.5.17 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
	<script>
		function setREVStartSize(e) {
			//window.requestAnimationFrame(function() {
			window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
			window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
			try {
				var pw = document.getElementById(e.c).parentNode.offsetWidth,
					newh;
				pw = pw === 0 || isNaN(pw) ? window.RSIW : pw;
				e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
				e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
				e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
				e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
				e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
				e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
				e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
				if (e.layout === "fullscreen" || e.l === "fullscreen")
					newh = Math.max(e.mh, window.RSIH);
				else {
					e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
					for (var i in e.rl)
						if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
					e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
					e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
					for (var i in e.rl)
						if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

					var nl = new Array(e.rl.length),
						ix = 0,
						sl;
					e.tabw = e.tabhide >= pw ? 0 : e.tabw;
					e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
					e.tabh = e.tabhide >= pw ? 0 : e.tabh;
					e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
					for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
					sl = nl[0];
					for (var i in nl)
						if (sl > nl[i] && nl[i] > 0) {
							sl = nl[i];
							ix = i;
						}
					var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
					newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
				}
				var el = document.getElementById(e.c);
				if (el !== null && el) el.style.height = newh + "px";
				el = document.getElementById(e.c + "_wrapper");
				if (el !== null && el) {
					el.style.height = newh + "px";
					el.style.display = "block";
				}
			} catch (e) {
				console.log("Failure at Presize of Slider:" + e)
			}
			//});
		};
	</script>
	<link rel='stylesheet' id='rs-plugin-settings-css' href='{{ asset("wp-content/plugins/revslider/public/assets/css/rs6e861.css?ver=6.5.17") }}' type='text/css' media='all' />
	<style id='rs-plugin-settings-inline-css' type='text/css'>
		#rev_slider_1_1_wrapper .custom.tparrows {
			cursor: pointer;
			background: #000;
			background: rgba(0, 0, 0, 0.5);
			width: 40px;
			height: 40px;
			position: absolute;
			display: block;
			z-index: 1000
		}

		#rev_slider_1_1_wrapper .custom.tparrows.rs-touchhover {
			background: #000
		}

		#rev_slider_1_1_wrapper .custom.tparrows:before {
			font-family: 'revicons';
			font-size: 15px;
			color: #fff;
			display: block;
			line-height: 40px;
			text-align: center
		}

		#rev_slider_1_1_wrapper .custom.tparrows.tp-leftarrow:before {
			content: '\e824'
		}

		#rev_slider_1_1_wrapper .custom.tparrows.tp-rightarrow:before {
			content: '\e825'
		}

		#rev_slider_1_1_wrapper .hesperiden.tp-bullets {}

		#rev_slider_1_1_wrapper .hesperiden.tp-bullets:before {
			content: ' ';
			position: absolute;
			width: 100%;
			height: 100%;
			background: transparent;
			padding: 10px;
			margin-left: -10px;
			margin-top: -10px;
			box-sizing: content-box;
			border-radius: 8px
		}

		#rev_slider_1_1_wrapper .hesperiden .tp-bullet {
			width: 12px;
			height: 12px;
			position: absolute;
			background: #999999;
			background: -moz-linear-gradient(top, #999999 0%, #e1e1e1 100%);
			background: -webkit-linear-gradient(top, #999999 0%, #e1e1e1 100%);
			background: -o-linear-gradient(top, #999999 0%, #e1e1e1 100%);
			background: -ms-linear-gradient(top, #999999 0%, #e1e1e1 100%);
			background: linear-gradient(to bottom, #999999 0%, #e1e1e1 100%);
			filter: progid:dximagetransform.microsoft.gradient(startcolorstr='#999999', endcolorstr='#e1e1e1', gradienttype=0);
			border: 3px solid #e5e5e5;
			border-radius: 50%;
			cursor: pointer;
			box-sizing: content-box
		}

		#rev_slider_1_1_wrapper .hesperiden .tp-bullet.rs-touchhover,
		#rev_slider_1_1_wrapper .hesperiden .tp-bullet.selected {
			background: #666666
		}

		#rev_slider_1_1_wrapper .hesperiden .tp-bullet-image {}

		#rev_slider_1_1_wrapper .hesperiden .tp-bullet-title {}

		/*# sourceURL=rs-plugin-settings-inline-css */
	</style>

	<!-- Scripts -->
	@routes
	@viteReactRefresh
	@vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
	@inertiaHead
</head>

<body class="font-sans antialiased">
	@inertia

	<script>
		window.RS_MODULES = window.RS_MODULES || {};
		window.RS_MODULES.modules = window.RS_MODULES.modules || {};
		window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
		window.RS_MODULES.defered = true;
		window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
		window.RS_MODULES.type = 'compiled';
	</script>
	<script type="speculationrules">
		{
  "prefetch": [
    {
      "source": "document",
      "where": {
        "and": [
          { "href_matches": "/demo/charityhome/*" },
          {
            "not": {
              "href_matches": [
                "/demo/charityhome/wp-*.php",
                "/demo/charityhome/wp-admin/*",
                "/demo/charityhome/wp-content/uploads/*",
                "/demo/charityhome/wp-content/*",
                "/demo/charityhome/wp-content/plugins/*",
                "/demo/charityhome/wp-content/themes/charityhome/*",
                "/demo/charityhome/*\\?(.+)"
              ]
            }
          },
          {
            "not": { "selector_matches": "a[rel~='nofollow']" }
          },
          {
            "not": { "selector_matches": ".no-prefetch, .no-prefetch a" }
          }
        ]
      },
      "eagerness": "conservative"
    }
  ]
}
</script>

	<script>
		(function(body) {
			'use strict';
			body.className = body.className.replace(/\btribe-no-js\b/, 'tribe-js');
		})(document.body);
	</script>
	<script>
		/* <![CDATA[ */
		var tribe_l10n_datatables = {
			"aria": {
				"sort_ascending": ": activate to sort column ascending",
				"sort_descending": ": activate to sort column descending"
			},
			"length_menu": "Show _MENU_ entries",
			"empty_table": "No data available in table",
			"info": "Showing _START_ to _END_ of _TOTAL_ entries",
			"info_empty": "Showing 0 to 0 of 0 entries",
			"info_filtered": "(filtered from _MAX_ total entries)",
			"zero_records": "No matching records found",
			"search": "Search:",
			"all_selected_text": "All items on this page were selected. ",
			"select_all_link": "Select all pages",
			"clear_selection": "Clear Selection.",
			"pagination": {
				"all": "All",
				"next": "Next",
				"previous": "Previous"
			},
			"select": {
				"rows": {
					"0": "",
					"_": ": Selected %d rows",
					"1": ": Selected 1 row"
				}
			},
			"datepicker": {
				"dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				"dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				"dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
				"monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				"monthNamesShort": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				"monthNamesMin": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				"nextText": "Next",
				"prevText": "Prev",
				"currentText": "Today",
				"closeText": "Done",
				"today": "Today",
				"clear": "Clear"
			}
		}; /* ]]> */
	</script>
	<script type="text/template" id="tmpl-elementor-templates-modal__header">

	</script>

	<script type="text/template" id="tmpl-elementor-templates-modal__header__logo">
		<span class="elementor-templates-modal__header__logo__icon-wrapper e-logo-wrapper">
		<i class="eicon-elementor"></i>
	</span>

</script>
	<link href="https://fonts.googleapis.com/css?family=Raleway:300%2C900%2C500%7CRoboto:500%2C700%2C400&amp;display=swap" rel="stylesheet" property="stylesheet" media="all" type="text/css">

	<script>
		if (typeof revslider_showDoubleJqueryError === "undefined") {
			function revslider_showDoubleJqueryError(sliderID) {
				console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");
				console.log("To fix this, you can:");
				console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");
				console.log("2. Find the double jQuery.js inclusion and remove it");
				return "Double Included jQuery Library";
			}
		}
	</script>
	<link rel="preload" as="font" id="rs-icon-set-revicon-woff" href="{{ asset('wp-content/plugins/revslider/public/assets/fonts/revicons/revicons90c6.woff?5510888') }}" type="font/woff" crossorigin="anonymous" media="all" />
	<script type="text/javascript" src="{{ asset('wp-content/plugins/contact-form-7/includes/swv/js/index080f.js?ver=5.8.2') }}" id="swv-js"></script>
	<script type="text/javascript" id="contact-form-7-js-extra">
		/* <![CDATA[ */
		var wpcf7 = {
			"api": {
				"root": "https://fastwpdemo.com/demo/charityhome/wp-json/",
				"namespace": "contact-form-7/v1"
			}
		};
		//# sourceURL=contact-form-7-js-extra
		/* ]]> */
	</script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/contact-form-7/includes/js/index080f.js?ver=5.8.2') }}" id="contact-form-7-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/revslider/public/assets/js/rbtools.mine861.js?ver=6.5.17') }}" defer async id="tp-tools-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/revslider/public/assets/js/rs6.mine861.js?ver=6.5.17') }}" defer async id="revmin-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/charitable/assets/js/charitable-frontend-2.0.minf90a.js?ver=1.8.0.2') }}" id="charitable-frontend-v2-js"></script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/jquery/ui/core.minb37e.js?ver=1.13.3') }}" id="jquery-ui-core-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/bootstrap.min431f.js?ver=2.1.2') }}" id="bootstrap-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/jquery.bxslider.min431f.js?ver=2.1.2') }}" id="jquery-bxslider-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/owl.carousel.min431f.js?ver=2.1.2') }}" id="owl-carousel-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/jquery-parallax431f.js?ver=2.1.2') }}" id="jquery-parallax-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/jquery.mixitup.min431f.js?ver=2.1.2') }}" id="jquery-mixitup-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/jquery.fancybox.pack431f.js?ver=2.1.2') }}" id="jquery-fancybox-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/jquery.easing.min431f.js?ver=2.1.2') }}" id="jquery-easing-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/circle-progress431f.js?ver=2.1.2') }}" id="circle-progress-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/jquery.appear431f.js?ver=2.1.2') }}" id="jquery-appear-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/jquery.countTo431f.js?ver=2.1.2') }}" id="jquery-countTo-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/isotope.pkgd.min431f.js?ver=2.1.2') }}" id="isotope-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/jquery-ui431f.js?ver=2.1.2') }}" id="jquery-ui-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/scrollbar431f.js?ver=2.1.2 ') }}" id="scrollbar-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/TweenMax431f.js?ver=2.1.2') }}" id="TweenMax-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/wow431f.js?ver=2.1.2') }}" id="wow-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/themes/charityhome/assets/js/custom431f.js?ver=2.1.2') }}" id="charityhome-main-script-js"></script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/comment-reply.mind4d0.js?ver=6.9') }}" id="comment-reply-js" async="async" data-wp-strategy="async" fetchpriority="low"></script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/jquery/ui/mouse.minb37e.js?ver=1.13.3') }}" id="jquery-ui-mouse-js"></script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/jquery/ui/draggable.minb37e.js?ver=1.13.3') }}" id="jquery-ui-draggable-js"></script>
	<script src='{{ asset("wp-content/plugins/the-events-calendar/common/src/resources/js/underscore-before.js") }}'></script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/underscore.min3ab8.js?ver=1.13.7') }}" id="underscore-js"></script>
	<script src='{{ asset("wp-content/plugins/the-events-calendar/common/src/resources/js/underscore-after.js") }}'></script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/backbone.minaff7.js?ver=1.6.0') }}" id="backbone-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/lib/backbone/backbone.marionette.min4ae5.js?ver=2.4.5.e1') }}" id="backbone-marionette-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/lib/backbone/backbone.radio.min4b68.js?ver=1.0.4') }}" id="backbone-radio-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/js/common-modules.min023e.js?ver=3.17.2') }}" id="elementor-common-modules-js"></script>
	<script type="text/javascript" id="elementor-web-cli-js-before">
		/* <![CDATA[ */
		var elementorWebCliConfig = {
			"isDebug": false,
			"urls": {
				"rest": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-json\/",
				"assets": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-content\/plugins\/elementor\/assets\/"
			},
			"nonce": "356346db10",
			"version": "3.17.2"
		};
		var elementorWebCliConfig = {
			"isDebug": false,
			"urls": {
				"rest": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-json\/",
				"assets": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-content\/plugins\/elementor\/assets\/"
			},
			"nonce": "356346db10",
			"version": "3.17.2"
		};
		//# sourceURL=elementor-web-cli-js-before
		/* ]]> */
	</script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/js/web-cli.min023e.js?ver=3.17.2') }}" id="elementor-web-cli-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/lib/dialog/dialog.mind227.js?ver=4.9.0') }}" id="elementor-dialog-js"></script>
	<script type="text/javascript" id="wp-api-request-js-extra">
		/* <![CDATA[ */
		var wpApiSettings = {
			"root": "https://fastwpdemo.com/demo/charityhome/wp-json/",
			"nonce": "356346db10",
			"versionString": "wp/v2/"
		};
		//# sourceURL=wp-api-request-js-extra
		/* ]]> */
	</script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/api-request.mind4d0.js?ver=6.9') }}" id="wp-api-request-js"></script>
	<script type="text/javascript" id="elementor-dev-tools-js-before">
		/* <![CDATA[ */
		var elementorDevToolsConfig = {
			"isDebug": false,
			"urls": {
				"assets": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-content\/plugins\/elementor\/assets\/"
			},
			"deprecation": {
				"soft_notices": [],
				"soft_version_count": 4,
				"hard_version_count": 8,
				"current_version": "3.17.2"
			}
		};
		var elementorDevToolsConfig = {
			"isDebug": false,
			"urls": {
				"assets": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-content\/plugins\/elementor\/assets\/"
			},
			"deprecation": {
				"soft_notices": [],
				"soft_version_count": 4,
				"hard_version_count": 8,
				"current_version": "3.17.2"
			}
		};
		var elementorDevToolsConfig = {
			"isDebug": false,
			"urls": {
				"assets": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-content\/plugins\/elementor\/assets\/"
			},
			"deprecation": {
				"soft_notices": [],
				"soft_version_count": 4,
				"hard_version_count": 8,
				"current_version": "3.17.2"
			}
		};
		//# sourceURL=elementor-dev-tools-js-before
		/* ]]> */
	</script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/js/dev-tools.min023e.js?ver=3.17.2') }}" id="elementor-dev-tools-js"></script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/dist/hooks.minaf5f.js?ver=dd5603f07f9220ed27f1') }}" id="wp-hooks-js"></script>
	<script type="text/javascript" src="{{ asset('wp-includes//js/dist/i18n.min1cde.js?ver=c26c3dc7bed366793375') }}" id="wp-i18n-js"></script>
	<script type="text/javascript" id="wp-i18n-js-after">
		/* <![CDATA[ */
		wp.i18n.setLocaleData({
			'text direction\u0004ltr': ['ltr']
		});
		//# sourceURL=wp-i18n-js-after
		/* ]]> */
	</script>
	<script type="text/javascript" id="elementor-common-js-before">
		/* <![CDATA[ */
		var elementorCommonConfig = {
			"version": "3.17.2",
			"isRTL": false,
			"isDebug": false,
			"isElementorDebug": false,
			"activeModules": ["ajax", "connect", "event-tracker"],
			"experimentalFeatures": {
				"e_dom_optimization": true,
				"e_optimized_assets_loading": true,
				"e_optimized_css_loading": true,
				"additional_custom_breakpoints": true,
				"landing-pages": true
			},
			"urls": {
				"assets": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-content\/plugins\/elementor\/assets\/",
				"rest": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-json\/"
			},
			"filesUpload": {
				"unfilteredFiles": false
			},
			"library_connect": {
				"is_connected": false,
				"subscription_plans": [{
					"label": null,
					"promotion_url": null,
					"color": null
				}, {
					"label": "Pro",
					"promotion_url": "https:\/\/elementor.com\/pro\/?utm_source=template-library&utm_medium=wp-dash&utm_campaign=gopro",
					"color": "#92003B"
				}],
				"base_access_level": 0,
				"current_access_level": 0
			},
			"ajax": {
				"url": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-admin\/admin-ajax.php",
				"nonce": "0136a8d84a"
			},
			"connect": [],
			"event-tracker": {
				"isUserDataShared": false
			}
		};
		//# sourceURL=elementor-common-js-before
		/* ]]> */
	</script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/js/common.min023e.js?ver=3.17.2') }}" id="elementor-common-js"></script>
	<script type="text/javascript" id="elementor-app-loader-js-before">
		/* <![CDATA[ */
		var elementorAppConfig = {
			"menu_url": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-admin\/admin.php?page=elementor-app&ver=3.17.2#site-editor\/promotion",
			"assets_url": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-content\/plugins\/elementor\/assets\/",
			"pages_url": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-admin\/edit.php?post_type=page",
			"return_url": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-admin\/",
			"hasPro": false,
			"admin_url": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-admin\/",
			"login_url": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-login.php",
			"base_url": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-admin\/admin.php?page=elementor-app&ver=3.17.2",
			"site-editor": [],
			"onboarding": []
		};
		//# sourceURL=elementor-app-loader-js-before
		/* ]]> */
	</script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/js/app-loader.min023e.js?ver=3.17.2') }}" id="elementor-app-loader-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/js/webpack.runtime.min023e.js?ver=3.17.2') }}" id="elementor-webpack-runtime-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/js/frontend-modules.min023e.js?ver=3.17.2') }}" id="elementor-frontend-modules-js"></script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min05da.js?ver=4.0.2') }}" id="elementor-waypoints-js"></script>
	<script type="text/javascript" id="elementor-frontend-js-before">
		/* <![CDATA[ */
		var elementorFrontendConfig = {
			"environmentMode": {
				"edit": false,
				"wpPreview": false,
				"isScriptDebug": false
			},
			"i18n": {
				"shareOnFacebook": "Share on Facebook",
				"shareOnTwitter": "Share on Twitter",
				"pinIt": "Pin it",
				"download": "Download",
				"downloadImage": "Download image",
				"fullscreen": "Fullscreen",
				"zoom": "Zoom",
				"share": "Share",
				"playVideo": "Play Video",
				"previous": "Previous",
				"next": "Next",
				"close": "Close",
				"a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
				"a11yCarouselPrevSlideMessage": "Previous slide",
				"a11yCarouselNextSlideMessage": "Next slide",
				"a11yCarouselFirstSlideMessage": "This is the first slide",
				"a11yCarouselLastSlideMessage": "This is the last slide",
				"a11yCarouselPaginationBulletMessage": "Go to slide"
			},
			"is_rtl": false,
			"breakpoints": {
				"xs": 0,
				"sm": 480,
				"md": 768,
				"lg": 1025,
				"xl": 1440,
				"xxl": 1600
			},
			"responsive": {
				"breakpoints": {
					"mobile": {
						"label": "Mobile Portrait",
						"value": 767,
						"default_value": 767,
						"direction": "max",
						"is_enabled": true
					},
					"mobile_extra": {
						"label": "Mobile Landscape",
						"value": 880,
						"default_value": 880,
						"direction": "max",
						"is_enabled": false
					},
					"tablet": {
						"label": "Tablet Portrait",
						"value": 1024,
						"default_value": 1024,
						"direction": "max",
						"is_enabled": true
					},
					"tablet_extra": {
						"label": "Tablet Landscape",
						"value": 1200,
						"default_value": 1200,
						"direction": "max",
						"is_enabled": false
					},
					"laptop": {
						"label": "Laptop",
						"value": 1366,
						"default_value": 1366,
						"direction": "max",
						"is_enabled": false
					},
					"widescreen": {
						"label": "Widescreen",
						"value": 2400,
						"default_value": 2400,
						"direction": "min",
						"is_enabled": false
					}
				}
			},
			"version": "3.17.2",
			"is_static": false,
			"experimentalFeatures": {
				"e_dom_optimization": true,
				"e_optimized_assets_loading": true,
				"e_optimized_css_loading": true,
				"additional_custom_breakpoints": true,
				"landing-pages": true
			},
			"urls": {
				"assets": "https:\/\/fastwpdemo.com\/demo\/charityhome\/wp-content\/plugins\/elementor\/assets\/"
			},
			"swiperClass": "swiper-container",
			"settings": {
				"page": [],
				"editorPreferences": []
			},
			"kit": {
				"active_breakpoints": ["viewport_mobile", "viewport_tablet"],
				"global_image_lightbox": "yes",
				"lightbox_enable_counter": "yes",
				"lightbox_enable_fullscreen": "yes",
				"lightbox_enable_zoom": "yes",
				"lightbox_enable_share": "yes",
				"lightbox_title_src": "title",
				"lightbox_description_src": "description"
			},
			"post": {
				"id": 12,
				"title": "Charity%20Home%20%E2%80%93%20Charity%20Home%20WordPress%20Theme",
				"excerpt": "",
				"featuredImage": false
			}
		};
		//# sourceURL=elementor-frontend-js-before
		/* ]]> */
	</script>
	<script type="text/javascript" src="{{ asset('wp-content/plugins/elementor/assets/js/frontend.min023e.js?ver=3.17.2') }}" id="elementor-frontend-js"></script>
	<script id="wp-emoji-settings" type="application/json">
		{
			"baseUrl": "https://s.w.org/images/core/emoji/17.0.2/72x72/",
			"ext": ".png",
			"svgUrl": "https://s.w.org/images/core/emoji/17.0.2/svg/",
			"svgExt": ".svg",
			"source": {
				"concatemoji": "/wp-includes/js/wp-emoji-release.min.js?ver=6.9"
			}
		}
	</script>


	<script id="rs-initialisation-scripts">
		var tpj = jQuery;

		var revapi1;

		if (window.RS_MODULES === undefined) window.RS_MODULES = {};
		if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
		RS_MODULES.modules["revslider11"] = {
			once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined,
			init: function() {
				window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
				if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) {
					window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
					if (window.revapi1initTry < 20) requestAnimationFrame(function() {
						RS_MODULES.modules["revslider11"].init()
					});
					return;
				}
				window.revapi1 = jQuery(window.revapi1);
				if (window.revapi1.revolution == undefined) {
					revslider_showDoubleJqueryError("rev_slider_1_1");
					return;
				}
				revapi1.revolutionInit({
					revapi: "revapi1",
					DPR: "dpr",
					sliderLayout: "fullwidth",
					visibilityLevels: "1240,1024,778,480",
					gridwidth: "1240,1024,778,480",
					gridheight: "900,768,960,720",
					lazyType: "smart",
					perspective: 600,
					perspectiveType: "global",
					editorheight: "900,768,960,720",
					responsiveLevels: "1240,1024,778,480",
					progressBar: {
						disableProgressBar: true
					},
					navigation: {
						wheelCallDelay: 1000,
						onHoverStop: false,
						arrows: {
							enable: true,
							style: "custom",
							hide_onmobile: true,
							hide_under: "1200px",
							left: {
								h_offset: 30
							},
							right: {
								h_offset: 30
							}
						},
						bullets: {
							enable: true,
							tmp: "",
							style: "hesperiden",
							hide_over: "1201px"
						}
					},
					viewPort: {
						global: true,
						globalDist: "-200px",
						enable: false
					},
					fallbacks: {
						allowHTML5AutoPlayOnAndroid: true
					},
				});

			}
		} // End of RevInitScript

		if (window.RS_MODULES.checkMinimal !== undefined) {
			window.RS_MODULES.checkMinimal();
		};
	</script>

</body>

</html>