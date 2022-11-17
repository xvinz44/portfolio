
<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import Nav from './coms/Nav.svelte';
	let themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
	let theme = themes[6]
	function ranTheme(){
		theme =  themes[Math.floor(Math.random() * themes.length)]
	}

</script>

<main data-theme = {theme}> 
	<Nav />
	<Router {routes} />
</main>
