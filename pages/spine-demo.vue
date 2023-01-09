<script lang="ts" setup>
import * as spine from "@esotericsoftware/spine-player"
import "@esotericsoftware/spine-player/dist/spine-player.css"

onMounted(() => {
  console.log("Hello World")
  initSpine()
})
const player: any = ref(null)

function initSpine() {
  // @ts-ignore
  const playerInstance = new spine.SpinePlayer("player-container", {
    jsonUrl: "/pirate/pirate.json",
    atlasUrl: "/pirate/pirate.atlas",
    // audioFolderPath: "/pirate/audio",
    // premultipliedAlpha: false,
    // animation: "idle",
    animations: ['idle', "attack"],
    showControls: true,
    backgroundColor: "#00000000",
    alpha: true,
    // Added:
    // success: (player: any) => {
    //   console.log('success: ', player)
    //   player.setAnimation("attack", true)
    //   player.animationState.setAnimation(0, "attack");
    //   player.animationState.addListener({
    //     event(t: any) {
    //       console.log('addListener: ', t.animation.name)
    //       switch (t.animation.name) {
    //         case "attack":
    //           player.animationState.setAnimation(0, "attack");
    //           break;
    //         case "idle":
    //           player.animationState.setAnimation(0, "idle", true);
    //           break;
    //       }
    //     }
    //   })
    // }
  })
  // setTimeout(() => {
  //   playerInstance.setAnimation("attack", true)
  //   playerInstance.animationState?.setAnimation(0, "attack", true)

  // }, 2000);
  // playerInstance.setAnimation('idle', true)
  player.value = playerInstance
}
function attack() {
  console.log('chage to attack')
  player.value.setAnimation("attack")
}
function stop() {
  console.log('stop')
  player.value.animationState.setEmptyAnimation(0);
}
</script>

<template>
  <div class="bg-red-500">
    <div id="player-container" />
    <button class="rounded bg-blue-400 p-2" @click="attack()">
      player.setAnimation('attack')
    </button>
    <button class="rounded bg-blue-400 p-2" @click="stop()">
      stop
    </button>
  </div>
</template>
