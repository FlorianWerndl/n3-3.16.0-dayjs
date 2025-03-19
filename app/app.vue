<script setup lang="ts">
import dayjs from '@/utils/day';

const start = dayjs(new Date('2000-01-01'))
const end = dayjs(new Date('2025-11-11'))
const isBetween = dayjs(new Date()).isBetween(start, end, 'day', '[]');
</script>
<template>
  <div>
    isBetween: {{ isBetween }} 
  </div>
</template>
