<template>
  <div class="image-no-content">
    <h3>Sem conta conectada!</h3>
    <img src="src\assets\images\no-content-view.png" alt="No Content" />
  </div>
</template>

<style scoped>
.image-no-content {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}
.image-no-content img {
  height: 50%;
  width: 50%;
}

.image-no-content h3 {
  margin-top: 2rem;
}
</style>
