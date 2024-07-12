<template>
  <div class="player">
    <select v-model="selectedSound">
      <option v-for="(sound, index) in sounds" :key="index" :value="index">
        {{ sound.title }} - {{ sound.artist }}
      </option>
    </select>
    <h2>Title: {{ returnTitle }}</h2>
    <h3>Artist: {{ returnArtist }}</h3>
    <audio ref="audioPlayer" @ended="playNextSound" controls></audio>
    <input type="range" min="-80" max="0" step="1" v-model="volume" @input="setVolume" />
    <h3>Volume: {{ volume }}</h3>
  </div>
</template>

<script>
import { sacrifice, unravel, tsukiakari, fifty, unstoppable, veritas } from '@/js-files/music-list'

export default {
  name: 'App',
  data() {
    return {
      sounds: [
        {
          title: 'Sacrifice',
          artist: 'Mafumafu',
          src: sacrifice
        },
        {
          title: 'Unravel',
          artist: 'TK from 凛として時雨',
          src: unravel
        },
        {
          title: '50 Ways to Say Goodbye',
          artist: 'Train',
          src: fifty
        },
        {
          title: 'Tsukiakari no Michishirube',
          artist: 'Stereopony',
          src: tsukiakari
        },
        {
          title: 'Unstoppable',
          artist: 'Sia',
          src: unstoppable
        },
        {
          title: 'Veritas',
          artist: 'unknown',
          src: veritas
        }
      ],
      selectedSound: 0,
      volume: -12
    }
  },
  methods: {
    updateAudioSource() {
      this.$refs.audioPlayer.src = this.sounds[this.selectedSound].src
      this.$refs.audioPlayer.currentTime = 0
      this.$refs.audioPlayer.play()
      this.setVolume()
    },
    playNextSound() {
      this.selectedSound = (this.selectedSound + 1) % this.sounds.length
    },
    setVolume() {
      this.$refs.audioPlayer.volume = Math.pow(10, this.volume / 20)
    }
  },
  computed: {
    returnTitle() {
      return this.sounds[this.selectedSound].title
    },
    returnArtist() {
      return this.sounds[this.selectedSound].artist
    }
  },
  mounted() {
    this.updateAudioSource()
    this.setVolume()
  },
  watch: {
    selectedSound() {
      this.$refs.audioPlayer.currentTime = 0
      this.updateAudioSource()
    }
  }
}
</script>

<style>
.player {
  margin-top: 20px;
}
</style>
