<script lang="ts" setup>
import * as spine from "@esotericsoftware/spine-player"
import "@esotericsoftware/spine-player/dist/spine-player.css"
import { Howl, Howler } from 'howler'

function initSound() {
  return new Promise<Howl>((resolve) => {
    // Setup the new Howl.
    const _sound = new Howl({
      src: ['/sound/1672977593140.mp3'],
      onload: () => {
        console.log('sound loaded.')
        resolve(_sound)
      }
    })
  });
}

let sound: any = null



// Change global volume.
Howler.volume(0.5);

onMounted(async () => {
  console.log("Hello World")
  initSpine()

  // Play the sound.
  sound = await initSound()
  console.log("sound: ", sound)

})
const player: any = ref(null)

function initSpine() {
  // @ts-ignore
  const playerInstance = new spine.SpinePlayer("player-container", {
    jsonUrl: "/pirate/pirate.json",
    atlasUrl: "/pirate/pirate.atlas",
    // premultipliedAlpha: false,
    animation: "idle",
    showControls: false,
    backgroundColor: "#00000000",
    alpha: true,
    viewport: {
      x: -300,
      y: 100,
      width: 2000,
      height: 1000,
    },
    // Added:
    success: (player: any) => {
      console.log('success: ', player)
      player.animationState.addListener({
        event(trackEntry: any, event: any) {
          console.log('animationState event event: ', event)
          console.log('animationState event trackEntry: ', trackEntry)
          switch (event.data.name) {
            case "music_Have":
              sound.play()
              break;
            case "music_noHave":
              sound.stop()
              break;
          }
        },
        complete(trackEntry: any) {
          console.log('animationState complete trackEntry: ', trackEntry)
          console.log('animationState complete trackEntry.animation.name: ', trackEntry.animation.name)
          sound.stop()
        },
        start(trackEntry: any) {
          console.log('animationState start trackEntry: ', trackEntry)
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
  sound.play()
}
</script>

<template>
  <div class="flex p-4 items-center justify-center">

    <Head>
      <Title>spine-demo</Title>
      <Meta name="description" content="spine-demo" />
      <Style type="text/css" children="body { background-color: transparent; }" />
    </Head>
    <div class="flex-grow" id="player-container" />
    <div class="flex flex-col gap-2 items-center justify-center">
      <button class="rounded bg-blue-400 p-2" @click="attack()">
        attack
      </button>
      <button class="rounded bg-blue-400 p-2" @click="idle()">
        idle
      </button>
      <button class="rounded bg-blue-400 p-2" @click="stop()">
        stop
      </button>
      <button class="rounded bg-blue-400 p-2" @click="playSound()">
        play sound
      </button>
    </div>
  </div>
</template>
