<script>

    import MediaQuery from '/src/coms/MediaQuery.svelte';

    import {link} from 'svelte-spa-router'

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class = "w-full h-screen">
    <div class = "snap-y snap-mandatory w-full h-screen pt-48 md:pt-60 overflow-scroll">
        <div class="snap-start border-0 hero max-h-full">
            <div class="hero-content flex-col lg:flex-row p-5 border-0 w-full max-h-full">
                <MediaQuery query="(max-width: 720px)" let:matches>

                    <div class = "prose border-0">
                        <h1 class ="text-7xl" >
                 
                            Hey there you I’m alvin 👋🏻
              
                        </h1>

                        <p class = "text-xl lg:text-l">
                            An undergardute IT student in his senior year, that aspires to be an intern in your organization. Has a background in software dev, graphic design and animation, yet he pursued the field that sparked his interests the most, Data Science.
                        </p>

                        <a class="btn btn-secondary" use:link={"/Projects"}>Explore projects!</a>
    
                    </div>
                    
                    {#if !matches}
                        <div class = "mx-16 w-1/2">
                            <img src="https://placeimg.com/260/400/arch" class="rounded-lg shadow-2xl" />
                        </div>

                    {/if}
  
                </MediaQuery>


                

            </div>
        </div>

        
    </div>

</div>


<style>
.will-change-transform {
  will-change: transform;
}
</style>