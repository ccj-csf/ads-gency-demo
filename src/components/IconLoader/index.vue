<template>
  <component :is="iconComponent" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue';
import * as AllIcons from '@ant-design/icons-vue/es/icons/index.js';

export default defineComponent({
  props: {
    iconName: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const iconComponent = ref(null);

    onMounted(() => {
      const IconComponent = AllIcons[props.iconName];
      iconComponent.value = IconComponent;
    });

    return {
      iconComponent,
    };
  },
});

</script>
