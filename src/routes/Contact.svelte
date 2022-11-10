<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
    import MediaQuery from './coms/MediaQuery.svelte';
    import Nav from './coms/Nav.svelte';
    import {link} from 'svelte-spa-router';
</script>
<div >
    <div>
        <Nav/>
    </div>
    <div class = "snap-y snap-mandatory w-full h-screen pt-28 md:pt-60 overflow-scroll border-0">
        <div class="snap-start border-0 hero max-h-full">
            <div class="hero-content flex-col lg:flex-row p-5 h-full border-0 w-full">


                <MediaQuery query="(max-width: 480px)" let:matches>

                    <div class = "prose border-0">
                        <h1 class ="text-6xl lg:text-7xl">
                            Hey there you I’m alvin 👋🏻
                        </h1>
                        <p class = "text-l lg:text-xl">
                            An undergardute IT student in his sernior year, that aspires to be an intern in your organization. Has a background in software dev, graphic design and animation, yet he pursued the field that sparked his interests the most, Data Science.
                        </p>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <a class="btn btn-secondary" use:link={"/About"}>Get Started</a>
    
                    </div>
                    {#if matches == false}
                        <div class = "mx-16 w-1/2">
                            <img src="https://placeimg.com/260/400/arch" class="rounded-lg shadow-2xl" />
                        </div>

                    {/if}
  
                </MediaQuery>
                


                

            </div>
        </div>

        
    </div>
</div>