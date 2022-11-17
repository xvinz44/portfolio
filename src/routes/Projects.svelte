<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
    import MediaQuery from '/src/coms/MediaQuery.svelte';
    import {link} from 'svelte-spa-router';
    let border = 'border-[0px]'
</script>
<MediaQuery query="(max-width: 720px)" let:matches>

<div class = "w-full h-screen">
    <div class = "{border} w-full h-screen pt-32 md:pt-40 flex justify-center">
        <div class="mockup-window border bg-base-300 mx-3 h-4/5 md:w-3/4 md:h-auto md:my-12">
            <div class="snap-y snap-mandatory px-4 py-4 bg-base-200 w-full h-full overflow-y-scroll">
                {#each [1,2,3,4,5,6,7,8,9,10] as x}
                    <div class="snap-start h-full py-3 px-5 flex flex-row">
                        <div class = "prose p-5">
                            <h2>
                     
                                The Implementation of PLM University Admissions Chatbot Using Azure Bot Framework
                  
                            </h2>
    
                            <p>
                               The PLMHelps chatbot was the final college project that I developed together with two of my thesismates in order to graduate. It's currently pending for publication and oral presentation in the 2022 5th Artificial Intelligence and Cloud Computing Conference.
                                <br>
                                DOI: <a href="">PENDING</a>
                            </p>
                            {#if matches}
                        
                                <a  class = 'btn btn-accent max-w-max' href = "https://bit.ly/PLMHelps">
                                    TRY IT HERE
                                </a>
                    
                            {/if}
        
                        </div>
                        {#if !matches}
                            <div class="divider divider-horizontal"></div>
                            <div class= 'self-center w-0 md:w-1/2'>
                                
                                <div class="card w-50 h-96 bg-base shadow-sm image-full">
                                    <figure><img src="/src/lib/sc/1.png"></figure>
                                    <div class="card-body justify-center">
                                        <a  class = 'btn btn-accent max-w-max self-center' href = "https://bit.ly/PLMHelps">
                                            TRY IT HERE
                                        </a>
                                    </div>
                                </div>
        
                            </div>

                        {/if}

                    </div>

                {/each}
            </div>
        </div>
    </div>
</div>
</MediaQuery>


<!-- 

            {#each [1,2,3,4,5,6,7,8,9,10] as x}
            <div class="snap-start">
                <div class="grid card bg-base-300 rounded-box place-items-center h-fit px-5 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur malesuada lacus, euismod blandit nunc elementum quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam bibendum enim ac nisl varius, quis tempor leo dictum. Suspendisse potenti. Sed tincidunt interdum sem, in lacinia ligula eleifend nec. Proin eleifend, nunc accumsan finibus ornare, neque nulla laoreet lorem, sodales bibendum nibh eros eu lorem. Aenean ultricies rhoncus purus, et molestie mauris molestie non. Nulla a blandit nibh. Nulla malesuada, quam eu gravida pretium, ligula libero consequat lorem, vitae feugiat lacus quam in orci. Sed vel accumsan velit, a dignissim orci. Pellentesque dapibus porttitor ex in vestibulum. Cras in cursus nibh, lobortis molestie ante. Curabitur tellus augue, commodo quis enim eu, fringilla pharetra nulla.</div> 
            </div>
            <div class="divider"></div> 
        

 -->