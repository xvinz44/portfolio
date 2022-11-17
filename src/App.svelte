
<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import Nav from './coms/Nav.svelte';

</script>

<main> 
	<Nav />
	<Router {routes} />
</main>
