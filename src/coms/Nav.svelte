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


    // function next(){
    //     loc = $location;
    //     return pages[0];
    // }



    // let loc = $location
    // let done = []
    // let ind = pages.indexOf(loc);
    // let ar = [ind-1 === -1 ? pages[pages.length-1]:pages[ind-1],pages[ind],ind+1 === 4 ? pages[0]:pages[ind+1]]
    // for (let x = 0; x < pages.length; x++){
    //     done = done.concat([pages[x]])
    //     if (pages[x] == loc){
    //         break;
    //     }
    // }

</script>
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="absolute navbar border-0 p-5 md:pt-16 z-500">
    <div class="navbar-start">
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
                <img class = "object-fit w-28 mr-8" src="src/lib/logo.png"/>
            </a>
        </a>
    </div>
</div>
