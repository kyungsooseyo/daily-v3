<template>
  <div>
    <div class="header"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$breakpoint: (
  'phone': (
    320px,
    480px,
  ),
  'tablet': (
    768px,
    1024px,
  ),
  'laptop': (
    1224px,
    1440px,
  ),
  'desktop': (
    1980px
  ),
);
@mixin respond-to($breakName) {
  $bp: map-get($breakpoint, $breakName);
  @if type-of($bp) == 'list' {
    $min: nth($bp, 1);
    $max: nth($bp, 2);
    @media (min-width: $min) and (max-width: $max) {
      @content;
    }
  } @else {
    @media (min-width: $bp) {
      @content;
    }
  }
}
.header {
  width: 100%;
  height: 50px;
  background: red;
  @include respond-to('phone') {
    background: blue;
    height: 100px;
  }
  @include respond-to('tablet') {
    background: green;
    height: 150px;
  }
  @include respond-to('laptop') {
    background: yellow;
    height: 200px;
  }
  @include respond-to('desktop') {
    background: pink;
    height: 250px;
  }
}
</style>
