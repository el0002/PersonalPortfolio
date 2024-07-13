
<script lang='ts'>
  import "../app.css";
  import Profile from "$lib/assets/akolangto.png"
  import Dlsu from "$lib/assets/dlsu.png"
  import Pts from "$lib/assets/pts.png"
  
  import Arrow from "$lib/assets/arrow.png"

  import Github from "$lib/assets/github.png"
  import Linkedin from "$lib/assets/linkedin.png"

  import React from "$lib/assets/react.png"
  import Svelte from "$lib/assets/svelte.png"
  import Next from "$lib/assets/next.png"

  import Lbyarch from "$lib/assets/lbyarch.png"
  import Prog2 from "$lib/assets/prog2.png"

  import { goto } from '$app/navigation';


  function routeToPage(route: string, replaceState: boolean) {
    goto(`/${route}`, { replaceState }) 
  }

</script>

<div class="font-imenglish">
  <div id="Home">
    <div class="flex flex-row justify-center mr-8 mb-0 mt-16">
      <div class="flex flex-row mt-16 mr-6">
        <img src={Github} alt="" class="w-20 h-20">
        <img src={Linkedin} alt="" class="w-16 h-16 mt-2">
      </div>
      
      <div><img src={Profile} alt="" class="w-80  mt-12"></div>
      <button on:click={() => routeToPage("projects",true)} class="font-imenglish' text-center mt-4 ml-10 text-4xl pt-16 h-7"> Projects </button>
    </div>
  
    <div class="flex flex-col items-center mb-52">
      <h1 class="text-center mb-0 text-5xl mt-3"> ADRIEL MANUEL D. FANCUBIT </h1>
      <div class="text-center mt-0 pt-0 text-3xl"> 2003 - Present </div>
  
      <div class="font-imenglish text-2xl text-center w-1/3">
        Hello! I am Adri and welcome to my page! I am an ambitious computer science student who intends to take on the challenge of life with his newfound technological prowess. Feel free to look around the projects to which I am involved.
      </div>
    </div>
  </div>
  
  
  <div id="Techies " class="items-center">
    <div class="text-5xl mb-2 text-center"> Experiences and Skills: </div>
    <div class="flex flex-col mb-12">
      <div class="flex flex-row justify-center my-6">
        
        <div class="flex w-52">
          <img src={Dlsu} alt="" class="w-60 m-auto">
        </div>
        <div class="content-center">
          <div class="text-5xl">Lasallian Programmer</div>
          <div class="text-2xl"> 2022 - Present </div>
        </div>
      </div>
      
      <div class="flex flex-row my-6 justify-center mb-16">
        <div class="flex ml-5/6">
          <img src={Pts} alt="" class="w-20 m-auto mx-12">
        </div>
        <div class="content-center">
          <div class="text-5xl">Vice President for Internals</div>
          <div class="text-2xl"> 2023 - Present </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-col items-center mb-28">
        <div class="flex flex-row">
          <div class="flex flex-row">
            <div class="mt-9 mr-3"> <img src={Next} alt="" class="w-28"> </div>
            <div class="flex flex-col mr-9">
              <img src={React} alt="" class="w-24 mb-3">
              <img src={Svelte} alt="" class="w-24">
            </div>
          </div>

          <div class="flex flex-col">
            <span class="text-2xl"> Languages: C, Java, Python </span>
            <span class="text-2xl"> Web development: HTML, CSS, Javascript </span>
            <span class="text-2xl"> Frameworks: Next.js, Svelte </span>
            <span class="text-2xl"> Database: MySQL, Supabase, MongoDB </span>
            <span class="text-2xl"> Libraries: React </span>
          </div>
        </div>
      </div>


    </div>
    

    
  </div>

  <div id="Techies " class="items-center">
    <div class="text-5xl text-center mb-16"> Projects: </div>
    <div class="flex flex-col items-center">
      <span class="text-3xl mb-7">
        dstrct # 4
      </span>
      <img src={Prog2} alt="" class="w-3/6 mb-7">
      <span class="font-imenglish text-2xl text-center w-2/3 mb-20">
        Features a shopping app C program that uses a text file system for data storage, 
        which can let users create their own account as a seller or a buyer, list items to sell 
        and buy listed for sale items. There is also an admin feature that can let one get the 
        statistics involved in the shopping system.
      </span>
    </div>

    <div class="flex flex-col items-center">
      <span class="text-3xl mb-7">
        RGB to Grayscale Array with x86_64 Assembly
      </span>
      <img src={Lbyarch} alt="" class="w-3/6 mb-7">
      <span class="font-imenglish text-2xl text-center w-2/3 mb-20">
        This program includes interfacing with C which calls x86_64 Assembly code for processing, 
        which converts colored RGB image to grayscale with given 3-d grid of pixels and outputs a 
        converted 2-d array of values
      </span>
    </div>
    

    
  </div>

    
</div>

  






