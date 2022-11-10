

import Home from './routes/Home.svelte';
import About from './routes/About.svelte';
import Contact from './routes/Contact.svelte';
import Projects from './routes/Projects.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/Projects': Projects,
    '/About':About,
    '/Contact':Contact,
    // The catch-all route must always be last
    '*': NotFound
};