<template>
  <div>
    <p>
      <pre style="display: inline-block;">useMouse</pre> returns reactive coordinates of current mouse position:
      <pre style="display: inline-block;">{{ x }}:{{ y }}</pre>
      <br>Here it is used in conjunction with `v-bind` to CSS `top` and `left` attributes to create an element that always follows the cursor.
    </p><div class="mouse-follower" />
  </div>
</template>

<script setup>
const { x, y } = useMouse()
</script>

  <style scoped>
  .mouse-follower {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
    top: v-bind('y + "px"');
    left: v-bind('x + "px"');
  }
  </style>
