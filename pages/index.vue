<template>
  <!-- <div>
    <NuxtWelcome />
  </div> -->
  <div class="h-screen w-full auto-rows-min grid gap-4 grid-cols-4 grid-rows-4 justify-center items-center">
    <div
      class="flex h-full bg-dark-200 w-full text-light-300 text-4xl col-span-4 row-span-2 justify-center items-center uppercase"
    >
      demo
    </div>
    <div class="rounded-md h-full border-2 border-dark-600 w-full col-span-2 row-span-2 relative">
      <img
        src="/images/bg.png"
        class="h-full object-cover w-full absolute"
      >

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
    <div class="rounded-md h-full border-2 border-dark-600 w-full col-span-2 row-span-2 relative">
      <img
        src="/images/bg.png"
        class="h-full object-cover w-full absolute"
      >

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
      <iframe
        width="100%"
        height="100%"
        src="/spine-demo"
        frameborder="0"
        allowtransparency="true"
        scrolling="no"
        class="pointer-events-none relative"
      />
    </div>
    <iframe
      width="1300px"
      height="600px"
      src="/spine-demo"
      frameborder="0"
      allowtransparency="true"
      scrolling="no"
      class="transform bottom-0 left-[0%] -translate-x-[20%] absolute"
    />
  </div>
</template>
