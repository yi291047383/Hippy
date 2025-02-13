import demoSetNativeProps from '../demo/demo-set-native-props.vue';
import demoAnimation from './demo-animation.vue';
import demoDialog from './demo-dialog.vue';
import demoVueNative from './demo-vue-native.vue';
import demoPullHeaderFooter from './demo-pull-header-footer.vue';
import demoSwiper from './demo-swiper.vue';
import demoWaterfall from './demo-waterfall.vue';

const demos = {
  demoNative: {
    name: 'Native 能力',
    component: demoVueNative,
  },
  demoAnimation: {
    name: 'animation 组件',
    component: demoAnimation,
  },
  demoDialog: {
    name: 'dialog 组件',
    component: demoDialog,
  },
  demoSwiper: {
    name: 'swiper 组件',
    component: demoSwiper,
  },
  demoPullHeaderFooter: {
    name: 'pull header/footer 组件',
    component: demoPullHeaderFooter,
  },
  demoWaterfall: {
    name: 'waterfall 组件',
    component: demoWaterfall,
  },
  demoSetNativeProps: {
    name: 'setNativeProps',
    component: demoSetNativeProps,
  },
};

export default demos;
