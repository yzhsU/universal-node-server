<template>
  <div class="home-container">
    <header class="header">
      <!-- 편집 예정 -->
      <div class="placeholder"></div>
    </header>
    <main class="main">
      <ul class="menu-list">
        <li class="menu-item">
          <img src="/assets/menu1.jpg" alt="Menu 1" />
          <h3 class="menu-title">Menu 1</h3>
          <p class="menu-description">Description of menu 1</p>
        </li>
        <li class="menu-item">
          <img src="/assets/menu2.jpg" alt="Menu 2" />
          <h3 class="menu-title">Menu 2</h3>
          <p class="menu-description">Description of menu 2</p>
        </li>
        <li class="menu-item">
          <img src="/assets/menu3.jpg" alt="Menu 3" />
          <h3 class="menu-title">Menu 3</h3>
          <p class="menu-description">Description of menu 3</p>
        </li>
        <li class="menu-item">
          <img src="/assets/menu4.jpg" alt="Menu 4" />
          <h3 class="menu-title">Menu 4</h3>
          <p class="menu-description">Description of menu 4</p>
        </li>
      </ul>
    </main>
    <footer class="footer">
      <p>&copy; 2023 Example Restaurant</p>
    </footer>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  background-color: #ccc;
  height: 40px;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  display: inline-block;
  width: 45%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}

.menu-title {
  margin-top: 10px;
  font-size: 20px;
}

.menu-description {
  margin-top: 5px;
  font-size: 14px;
}

.footer {
  text-align: center;
  margin-top: 50px;
}
</style>