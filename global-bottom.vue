<template>
  <footer 
    class="absolute bottom-0 left-0 w-full flex justify-between items-end"
  >
    <CornerBottomLeft :slideCounter="$nav.currentLayout !== 'cover'" />
    <img src="../assets/school-logos.png" class="w-1/5 h-full mr-2" />
  </footer>
</template>