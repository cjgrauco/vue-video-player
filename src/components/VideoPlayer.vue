<template>
  <div>
    <input type="file" @change="uploadVideo" accept="video/*" />
    <video class="video-player" :class="{show: showPlayer}" ref="videoPlayer" controls></video>
  </div>
</template>

<script>
  import {ref} from 'vue'

  const showPlayer = ref(false)

  export default {
    data() {
      return {
        videoFile: null,
        showPlayer
      };
    },
    methods: {
      uploadVideo(event) {
        const file = event.target.files[0];
        if (file) {
          this.videoFile = URL.createObjectURL(file);
          this.$refs.videoPlayer.src = this.videoFile;
          this.$refs.videoPlayer.load();
          this.$refs.videoPlayer.play();
          showPlayer.value = true
        }
      },
    },
  }
</script>


<style scoped>

  .video-player{
    display:none;
  }

  .video-player.show {
    display:block;
  }
  
</style>
