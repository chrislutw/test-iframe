<template>
  <!-- <div>
    <NuxtWelcome />
  </div> -->
  <div class="h-screen w-full auto-rows-min grid gap-4 grid-cols-4 grid-rows-4 justify-center items-center">
    <iframe width="100%" height="100%" class="col-span-4 row-span-2"
      src="https://test-wbgame.jlfafafa3.com/gl_sl/index.html" frameborder="0" />
    <iframe width="100%" height="100%" class="col-span-2" src="https://test-wbgame.jlfafafa3.com/gl_sl/index.html"
      frameborder="0" />
    <div class="rounded-md h-full border-2 border-dark-600 w-full col-span-2 row-span-2 relative">
      <img src="/images/bg.png" class="h-full object-cover w-full absolute">
      <iframe width="100%" height="100%" src="/spine-demo" frameborder="0" allowtransparency="true" class=" relative" />
      <div class="font-extrabold bg-dark-600 w-full p-2 top-0 text-yellow-500 absolute">
        GAMESHOW
      </div>
      <div class="flex bg-dark-600/80 w-full py-2 px-4 bottom-0 absolute justify-between items-center">
        <div class="text-light-800">
          <span class="font-black text-gray-400 uppercase">jili</span><br>黃金祕境
        </div>
        <button class="rounded-full bg-yellow-400 py-2 px-4">
          Play Now
        </button>
      </div>
    </div>
    <iframe width="800px" height="400px" src="/spine-demo" frameborder="0" allowtransparency="true"
      class="top-[37%] left-[0%] absolute" />
  </div>
</template>
