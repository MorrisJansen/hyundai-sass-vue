<template>
  <div>
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <img
          v-for="(image, index) in visibleImages"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          :class="[getClass(index), getSpecialClass(index)]"
        />
      </div>
    </div>
    <div class="slider-indicator">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['slider-indicator-item', { 'active': index === currentIndex }]"
        @click="goToSlide(index, true)"
      ></div>
    </div>
  </div>
</template>

<script>
import binnenAuto2 from '/img/binnen-auto-2.png';

export default {
  data() {
    return {
      images: [
        { src: require('/img/hand-mobiel-1@2x.png'), alt: 'hand mobiel' },
        { src: require('/img/binnen-auto-1@2x.png'), alt: 'binnen auto' },
        { src: require('/img/dashboard-auto-1@2x.png'), alt: 'dashboard auto' },
        { src: binnenAuto2, alt: 'binnen auto 2' }
      ],
      visibleImages: [],
      step: '',
      animating: false,
      currentIndex: 0,
      timer: null,
      innerStyles: {},
    };
  },

  mounted() {
    this.setStep();
    this.updateVisibleImages();
    this.startAnimationLoop();
  },

  methods: {
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalImages = this.images.length;
      this.step = `${innerWidth / totalImages}px`;
    },

    startAnimationLoop() {
      this.timer = setInterval(() => {
        if (!this.animating) {
          this.next();
        }
      }, 3000);
    },

    next() {
      this.resetTimer();
      this.animating = true;
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateVisibleImages();
      setTimeout(() => {
        this.animating = false;
      }, 500);
    },

    prev() {
      this.resetTimer();
      this.animating = true;
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.updateVisibleImages();
      setTimeout(() => {
        this.animating = false;
      }, 500);
    },

    goToSlide(index, instant = false) {
      if (this.animating || index === this.currentIndex) return;
      this.resetTimer();
      this.animating = true;
      this.currentIndex = index;
      this.updateVisibleImages();
      setTimeout(() => {
        this.animating = false;
      }, instant ? 0 : 500);
    },

    updateVisibleImages() {
      this.visibleImages = [
        this.images[this.currentIndex],
        this.images[(this.currentIndex + 1) % this.images.length],
        this.images[(this.currentIndex + 2) % this.images.length],
        this.images[(this.currentIndex + 3) % this.images.length]
      ];
    },

    resetTimer() {
      clearInterval(this.timer);
      this.startAnimationLoop();
    },

    getClass(index) {
      return index === 3 ? 'fourth-style' : 'default-style';
    },

    getSpecialClass(index) {
      return index === 1 ? 'partially-visible' : '';
    }
  }
};
</script>

<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
}

.inner {
  display: flex;
}

.default-style {
  height: 32.97vw;
  width: 26.35vw;
  object-fit: cover;
  position: relative;
  border-radius: 1.875rem;
}

@media (min-width: 768px) {
  .default-style {
    margin-right: 3.3rem;
  }
}

.fourth-style {
  height: 32.97vw;
  width: 6.77vw;
  object-fit: cover;
  position: relative;
  margin-right: 3.3rem;
  border-radius: 1.875rem;
}

img {
  aspect-ratio: 1 / 1;
}

@media (min-width: 768px) {
  .slider-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.83vw;
    height: 0.42vw;
    margin-top: 9.22vw;
    width: 7.66vw;
    position: relative;
    margin-left: 40vw;
  }
  
  .slider-indicator-item {
    background-color: #d3d3d3;
    border-radius: 2.08vw;
    height: 0.5rem;
    position: relative;
    width: 1.625rem;
    cursor: pointer;
  }
  
  .slider-indicator-item.active {
    background-color: #002e6b;
    width: 3.9375rem;
  }

}



@media (max-width: 768px) {
  .inner {
    display: flex;
    flex-wrap: nowrap;
  }

  .default-style,
  .fourth-style {
    width: 17.34175rem;
    height: 21.69431rem;
    flex-shrink: 0;
  }

  .inner img:first-child,
  .inner img:nth-child(3) {
    margin-left: 3.3rem;
  }

  .partially-visible {
    margin-left: 1.88rem;
  }

  .inner img:nth-child(4) {
    display: none;
  }


  .slider-indicator {
    margin-left: 35vw;
  }


  .slider-indicator-item {
    width: 1.65819rem;
    height: 0.51019rem;
    flex-shrink: 0;
    margin-right: 1rem;
  }

  .slider-indicator-item.active {
    width: 4.01788rem;
    height: 0.51019rem;
    flex-shrink: 0;
    background-color: #002e6b;

  }
}
</style>
