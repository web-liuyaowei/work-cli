<template>
  <!-- 确定高度的轮播图 -->
  <div class="carousel-box">
    <div class="carousel"
         :style="{ transition: isResetIndex ? '' : `transform ${transitionInterval/1000}s`, transform: `translateY(-${activeIndex * 100 }%)` }">
      <div v-for="(item, index) in copyItems"
           :key="index"
           :style="{ backgroundColor: item.bg  }">{{item.text}}</div>

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
      default: 5000
    },
    transitionInterval: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      activeIndex: 1,
      isResetIndex: false
    };
  },
  computed: {
    copyItems() {
      let newObj = [...this.items];
      this.items && newObj.unshift(this.items[this.items.length - 1]);
      this.items && newObj.push(this.items[0]);
      return newObj;
    },
    len() {
      return this.copyItems.length;
    }
  },
  mounted() {
    this.startInterval();
  },
  watch: {
    activeIndex(newActiveIndex, oldActiveIndex) {
      // if(是轮播图从最后一张切换到第一张 || 是轮播图从第一张切换到最后一张) 是属于瞬间归位，直接return，不执行以后所有函数
      if (
        (newActiveIndex === 1 && oldActiveIndex === this.len - 1) ||
        (newActiveIndex === this.len - 2 && oldActiveIndex === 0)
      ) {
        this.isResetIndex = true;
        return;
      }

      this.isResetIndex = false;

      setTimeout(() => {
        // 瞬间归位需要取消transition过渡
        // 以下两种情况是瞬间归位时activeIndex变化
        if (this.activeIndex === 0) {
          this.activeIndex = this.len - 2;
        } else if (this.activeIndex === this.len - 1) {
          this.activeIndex = 1;
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
.carousel-box {
  height: 80px;
  border: 1px solid black;
  overflow: hidden;
}
.carousel {
  display: block;
  width: 100%;
  height: 100%;
  > div {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
