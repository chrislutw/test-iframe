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

let voice: any = null

// Change global volume.
Howler.volume(0.5);

onMounted(async () => {
  console.log("Hello World")
  initSpine()

  // Play the sound.
  voice = await initSound('/sound/host_voice.mp3')

})
const player: any = ref(null)

function initSpine() {
  // @ts-ignore
  const playerInstance = new spine.SpinePlayer("player-container", {
    jsonUrl: "/golden-land/Character.json",
    atlasUrl: "/golden-land/0.7/Character.atlas",
    // premultipliedAlpha: false,
    animation: "Action_All",
    defaultMix: 0,
    showControls: false,
    backgroundColor: "#00000000",
    alpha: true,
    viewport: {
      // debugRender: true,
      x: 0,
      y: 0,
      width: 900,
      height: 1150,
    },
    // Added:
    success: (player: any) => {
      console.log('success: ', player)
      player.animationState.addListener({
        event(trackEntry: any, event: any) {
          // console.log('animationState event event: ', event)
          console.log('animationState event trackEntry: ', trackEntry, event.data.name)
          switch (event.data.name) {
            case "sound_start":
              // prevent voice loops
              voice.stop()

              voice.play()
              break;
            case "sound_end":
              voice.stop()
              break;
          }
        },
        complete(trackEntry: any) {
          // console.log('animationState complete trackEntry: ', trackEntry)
          console.log('animationState complete trackEntry.animation.name: ', trackEntry.animation.name)

        },
        start(trackEntry: any) {
          // console.log('animationState start trackEntry: ', trackEntry)
          console.log('animationState start trackEntry.animation.name: ', trackEntry.animation.name)
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
  voice.play()
}
</script>

<template>
  <div class="flex p-4 items-center justify-center">
    <div
      id="player-container"
      class="h-screen w-screen"
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
