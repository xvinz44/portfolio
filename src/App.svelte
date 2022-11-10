
<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import Nav from './routes/coms/Nav.svelte';
	let themes = ["forest","synthwave","luxury","halloween"]
	var theme =  themes[Math.floor(Math.random() * themes.length)]

</script>

<main  data-theme="{theme}">
	<Router {routes} />
</main>