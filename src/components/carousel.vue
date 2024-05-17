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
        timer: null
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
        this.moveLeft();
        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
          this.updateVisibleImages();
          this.moveInnerBack();
          this.animating = false;
        }, 500);
      },
  
      prev() {
        this.resetTimer();
        this.animating = true;
        this.moveRight();
        setTimeout(() => {
          this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
          this.updateVisibleImages();
          this.moveInnerBack();
          this.animating = false;
        }, 500);
      },
  
      goToSlide(index, instant = false) {
        if (this.animating || index === this.currentIndex) return;
        this.resetTimer();
        this.animating = true;
        const direction = index > this.currentIndex ? 'left' : 'right';
        const steps = Math.abs(index - this.currentIndex);
        if (direction === 'left') {
          this.moveLeft(steps, instant);
          setTimeout(() => {
            this.currentIndex = index;
            this.updateVisibleImages();
            this.moveInnerBack();
            this.animating = false;
          }, instant ? 0 : 500);
        } else {
          this.moveRight(steps, instant);
          setTimeout(() => {
            this.currentIndex = index;
            this.updateVisibleImages();
            this.moveInnerBack();
            this.animating = false;
          }, instant ? 0 : 500);
        }
      },
  
      moveLeft(steps = 1, instant = false) {
        this.innerStyles = {
          transform: `translateX(-${parseFloat(this.step) * steps}px)`,
          transition: instant ? 'none' : 'transform 0.5s ease-in-out'
        };
      },
  
      moveRight(steps = 1, instant = false) {
        this.innerStyles = {
          transform: `translateX(${parseFloat(this.step) * steps}px)`,
          transition: instant ? 'none' : 'transform 0.5s ease-in-out'
        };
      },
  
      moveInnerBack() {
        this.innerStyles = {
          transform: `translateX(0)`,
          transition: 'none'
        };
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
        return index === 3 ? 'special-style' : '';
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
    transition: transform 0.5s ease-in-out;
  }
  
  .default-style {
    height: 32.97vw;
    width: 26.35vw;
    object-fit: cover;
    position: relative;
    margin-right: 3.3rem;
    border-radius: 1.875rem;
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
  
  .slider-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.83vw;
    height: 0.42vw;
    margin-top: 9.22vw;
    margin-right: auto;
    width: 7.66vw;
    position: relative;
  }
  
  
  .slider-indicator-item {
    background-color: #d3d3d3;
    border-radius: 2.08vw;
    height: 0.42vw;
    position: relative;
    width: 1.35vw;
    cursor: pointer;
  }
  
  .slider-indicator-item.active {
    background-color: #002e6b;
    width: 3.28vw;
  }
  </style>
  