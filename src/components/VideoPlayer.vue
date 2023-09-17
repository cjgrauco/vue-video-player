<template>
  <div class="wrapper">
    <input class="upload-input" type="file" @change="uploadVideo" accept="video/*" />
    <video class="video-player" :class="{show: showPlayer}" ref="videoPlayer" controls></video>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'

const showPlayer = ref<Boolean>(false)

export default {
  data() {
    return {
      videoFile: null,
      showPlayer
    };
  },
  methods: {
    uploadVideo(event: Event) {
      const input = event.target as HTMLInputElement;
      const file = input?.files?.[0] as File;
      const player = this.$refs.videoPlayer as HTMLVideoElement;

      if (input) {
        const videoFile = URL.createObjectURL(file) as string|null;

        if (videoFile) { 
          player.src = videoFile;
          player.load();
          player.play();
          showPlayer.value = true
        }
      }
    },
  },
}
</script>


<style scoped>

.video-player {
  display: none;
  max-width: 600px;
}

.upload-input {
  margin-bottom: 3rem;
}
  
.video-player.show {
  display: block;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
