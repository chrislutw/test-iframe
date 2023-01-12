<script lang="ts" setup>
import * as spine from "@esotericsoftware/spine-player"
import "@esotericsoftware/spine-player/dist/spine-player.css"
import { Howl, Howler } from 'howler'

useHead({
  title: 'spine-demo',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  style: [ {children: 'body { background-color: transparent; }'} ]
})

function initSound(path: string) {
  return new Promise<Howl>((resolve) => {
    // Setup the new Howl.
    const _sound = new Howl({
      src: [path],
      onload: () => {
        console.log(`sound: ${path} loaded.`)
        resolve(_sound)
      }
    })
  });
}

let sound1: any = null
let sound2: any = null



// Change global volume.
Howler.volume(0.5);

onMounted(async () => {
  console.log("Hello World")
  initSpine()

  // Play the sound.
  sound1 = await initSound('/sound/sound1.m4a')
  sound2 = await initSound('/sound/sound2.m4a')

})
const player: any = ref(null)

function initSpine() {
  // @ts-ignore
  const playerInstance = new spine.SpinePlayer("player-container", {
    jsonUrl: "/golden-land/Character.json",
    atlasUrl: "/golden-land/0.4/Character.atlas",
    // premultipliedAlpha: false,
    animation: "Action_All",
    defaultMix: 0,
    showControls: false,
    backgroundColor: "#00000000",
    alpha: true,
    viewport: {
      // debugRender: true,
      x: -500,
      y: 0,
      width: 1200,
      height: 900,
    },
    // Added:
    success: (player: any) => {
      console.log('success: ', player)
      player.animationState.addListener({
        event(trackEntry: any, event: any) {
          // console.log('animationState event event: ', event)
          console.log('animationState event trackEntry: ', trackEntry)
          switch (event.data.name) {
            case "music_Have":
              sound1.play()
              break;
            case "music_noHave":
              sound1.stop()
              break;
          }
        },
        complete(trackEntry: any) {
          // console.log('animationState complete trackEntry: ', trackEntry)
          console.log('animationState complete trackEntry.animation.name: ', trackEntry.animation.name)

          switch (trackEntry.animation.name) {
            // case "Action1_Loop":
            //   player.setAnimation("Action2_Loop")
            //   break;
            // case "Action2_Loop":
            //   player.setAnimation("Action3_Loop")
            //   sound2.stop()
            //   break;
            // case "Action3_Loop":
            //   player.setAnimation("Action1_Loop")
            //   sound1.stop()
            //   break;
            case "Action1_Start":
              player.setAnimation("Action1_Loop")
              break;
            case "Action1_Loop":
              player.setAnimation("Action2_Start")
              break;
            case "Action2_Start":
              player.setAnimation("Action2_Loop")
              break;
            case "Action2_Loop":
              player.setAnimation("Action3_Start")
              sound2.stop()
              break;
            case "Action3_Start":
              player.setAnimation("Action3_Loop")
              break;
            case "Action3_Loop":
              player.setAnimation("Action1_Start")
              sound1.stop()
              break;
          }
        },
        start(trackEntry: any) {
          // console.log('animationState start trackEntry: ', trackEntry)
          console.log('animationState start trackEntry.animation.name: ', trackEntry.animation.name)
          switch (trackEntry.animation.name) {
            case "Action_All":
              sound2.play()
              break;
            case "Action2_Start":
              sound2.play()
              break;
            case "Action3_Start":
              sound1.play()
              break;
          }
        }
      })
    }
  })
  player.value = playerInstance
}

function attack() {
  console.log('chage to attack')
  player.value.setAnimation("attack")
}
function idle() {
  console.log('chage to idle')
  player.value.setAnimation("idle")
}
function stop() {
  console.log('stop')
  player.value.animationState.setEmptyAnimation(0);
}
function playSound() {
  sound1.play()
}
</script>

<template>
  <div class="flex p-4 items-center justify-center">
    <div
      id="player-container"
      class="flex-grow"
    />
    <!--
    <div class="flex flex-col gap-2 items-center justify-center">
      <button
        class="border rounded font-extrabold bg-gray-200/20 border-dark-400 shadow p-2 shadow-dark-300 text-2xl text-dark-400/60 w-32 uppercase"
        @click="attack()">
        attack
      </button>
      <button
        class="border rounded font-extrabold bg-gray-200/20 border-dark-400 shadow p-2 shadow-dark-300 text-2xl text-dark-400/60 w-32 uppercase"
        @click="idle()">
        idle
      </button>
    </div>
    -->
  </div>
</template>
