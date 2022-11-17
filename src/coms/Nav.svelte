<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-missing-attribute -->
<script>
    import {push, pop, replace} from 'svelte-spa-router';
    import {location} from 'svelte-spa-router';
    import {link} from 'svelte-spa-router'

    let pages = [
        '/',
        '/Projects',
        '/About',
        '/Contact'
    ]
    $: loc = $location
    $: inloc = pages.indexOf(loc)


	let theme;
    
	let light_themes = [ "light", "cupcake", "bumblebee", "emerald", "corporate", "retro", "cyberpunk", "valentine", "garden", "lofi", "pastel", "fantasy", "wireframe",  "cmyk", "autumn",  "acid", "lemonade", "winter"]
	let dark_themes = ["dark","coffee", "synthwave", "halloween", "forest","black", "luxury", "dracula", "business",  "night", "aqua"]
    
    let themes = [...light_themes, ...dark_themes]

    function ranTheme(){
		theme = themes[Math.floor(Math.random() * themes.length)];
	}
    ranTheme()

</script>
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="absolute navbar p-5 md:pt-16 z-100 w-screen border-0 bg-inherit">
    <div class="navbar-start">
        <div class = 'mr-5'>
            <button class = 'btn kbd' data-set-theme="{theme}" on:click={ranTheme}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd" />
                    <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                </svg>
            </button>
        </div>

        <div class="dropdown">

            <label tabindex="0" class="btn lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                &nbsp;{loc === '/' ? 'home': loc.toLowerCase().slice(1)} 
            </label>
            

            <ul tabindex="0" class="steps steps-vertical lg:steps-horizontal dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {#each pages as item}
                    <a role = "button" use:link={item}>
                        <li class="step {item === loc ? 'step-secondary font-bold' : 'font-light'}">
                            {item === '/' ? 'home': item.toLowerCase().slice(1)} 
                        </li>
                    </a>
                {/each}
            </ul>
        </div>

    </div>
    <div class="navbar-center hidden lg:flex">

        <div class = "border-0">
            <button class = 'btn kbd' on:click={() => push([pages[pages.length-1], ...pages][inloc])}>
                ◀︎
            </button>
        </div>
        <ul class="steps steps-vertical lg:steps-horizontal flex space-x-2">
            {#each pages as item, i}
                <!-- <li data-content="" class="mx-14 step {pages[i] === loc ? 'step-primary font-bold': done.includes(item) ? 'step-primary ':''}"> -->
                <li data-content="" class="mx-14 step {item === loc ? 'step-primary font-bold' : i < inloc ? 'step-primary' : ''}">
                    <a use:link={item}>{pages[i] === '/' ? 'home': item.toLowerCase().slice(1)} </a>
                </li>
            {/each}
        </ul>
        <div class = "border-0">
            <button class = 'btn kbd' on:click={() => push([...pages, pages[0]][inloc+1])}>
                ▶︎
            </button>
        </div>
    </div>
    <div class="navbar-end">
        <a>
            <a use:link={"/"}>
                <img class = "object-fit w-28 mr-8" src="src/lib/logo.png" style="filter: invert({dark_themes.includes(theme) ? 0 : 100}%);"/>
            </a>
        </a>
    </div>
</div>
