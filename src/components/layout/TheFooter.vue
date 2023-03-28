<template>
  <footer>
    <div>
        <p>Made with <i class="fas fa-heart"></i> and <i class="fas fa-coffee"></i> in Warsaw</p>
        <p>&#xA9; Created by Malwina Stępień</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 6rem;
  background-color: #ffefd5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
}

footer div {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer p {
  margin: 0 0.5rem;
  font-size: 15px;
  font-weight: bold;
}
</style>
