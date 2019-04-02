<template>
  <!-- 确定高度的轮播图 -->
  <div class="carousel-noHeight-box">
    <div class="carousel-noHeight"
         :style="{ transition: isResetIndex ? '' : `transform ${transitionInterval/1000}s`, transform: `translateY(-${activeIndex * 50 }%)` }">
      <div v-for="(item, index) in copyItems"
           :key="index">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    interval: {
      type: Number,
      default: 2005
    },
    transitionInterval: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      activeIndex: 0,
      isResetIndex: false
    };
  },
  computed: {
    copyItems() {
      return [...this.items, ...this.items];
    },
    len() {
      return this.items.length;
    }
  },
  mounted() {
    this.startInterval();
  },
  watch: {
    activeIndex(newActiveIndex, oldActiveIndex) {
      // if(是轮播图从最后一张切换到第一张 || 是轮播图从第一张切换到最后一张) 是属于瞬间归位，直接return，不执行以后所有函数
      if (newActiveIndex === 0 && oldActiveIndex === 1) {
        this.isResetIndex = true;
        return;
      }
      this.isResetIndex = false;

      setTimeout(() => {
        // 瞬间归位需要取消transition过渡
        // 以下两种情况是瞬间归位时activeIndex变化
        if (this.activeIndex === 1) {
          this.activeIndex = 0;
        }
      }, this.transitionInterval);
    }
  },
  methods: {
    startInterval() {
      // 启动自动轮播函数
      this.timer = setInterval(() => {
        this.activeIndex++;
      }, this.interval);
    }
  }
};
</script>

<style lang="less">
.carousel-noHeight-box {
  height: 80px;
  border: 1px solid black;
  overflow: hidden;
}
</style>
