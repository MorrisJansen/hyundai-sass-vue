<template>
  <div>
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
        <div class="card" v-for="(card, index) in visibleCards" :key="index">
          <img :src="card.src" :alt="card.alt" class="carousel-image" />
        </div>
      </div>
    </div>
    <div class="slider-indicator">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="['slider-indicator-item', { 'active': currentIndex === index % 4 }]"
        @click="goToSlide(index % 4)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { src: require('/img/hand-mobiel-1@2x.png'), alt: 'hand mobiel' },
        { src: require('/img/binnen-auto-1@2x.png'), alt: 'binnen auto' },
        { src: require('/img/dashboard-auto-1@2x.png'), alt: 'dashboard auto' },
        { src: require('/img/binnen-auto-2.png'), alt: 'binnen auto 2' },
      ],
      currentIndex: 0,
      step: 0,
      innerStyles: {},
      transitioning: false,
      startX: 0,
      endX: 0,
      timer: null
    };
  },
  computed: {
    visibleCards() {
      return [...this.cards, ...this.cards];
    }
  },
  mounted() {
    this.setStep();
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.next();
      }, 3000);
    },

    setStep() {
      const totalWidth = this.$refs.inner.clientWidth;
      this.step = totalWidth / 3.9;
    },

    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      this.scrollToCurrentIndex();
    },

    goToSlide(index) {
      if (this.transitioning) return;
      this.transitioning = true;
      this.currentIndex = index;
      this.scrollToCurrentIndex();
      clearInterval(this.timer);
      this.startTimer();
    },

    scrollToCurrentIndex() {
      let offset;
      if (window.innerWidth >= 768) {
        offset = this.step * this.currentIndex;
      } else {
        offset = this.step * this.currentIndex * 1;
      }
      this.innerStyles = {
        transform: `translateX(-${offset}px)`,
        transition: 'transform 0.5s ease',
      };
      setTimeout(() => {
        this.transitioning = false;
      }, 500);
    },

    onTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },

    onTouchMove(event) {
      this.endX = event.touches[0].clientX;
    },

    onTouchEnd() {
      if (this.startX > this.endX + 50) {
        this.next();
      } else if (this.startX < this.endX - 50) {
        this.prev();
      }
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
}

.inner {
  display: flex;
  transition: transform 0.5s ease;
}

.card {
  flex: 0 0 25%;
  width: 25vw;
  margin-right: 1vw;
  display: inline-flex;
  border-radius: 1.875rem;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: inherit;
}

.slider-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.83vw;
  height: 0.42vw;
  margin-top: 6vw;
  width: 7.66vw;
  position: relative;
  margin-left: 40vw;
}

.slider-indicator-item {
  background-color: #d3d3d3;
  border-radius: 2.08vw;
  height: 0.5rem;
  cursor: pointer;
}

.slider-indicator-item.active {
  background-color: #002e6b;
  width: 13rem;
}

@media (max-width: 768px) {
  .slider-indicator {
    width: 14rem;
    gap: 1rem;
    margin-left: 27vw;
  }
}



  
</style>
