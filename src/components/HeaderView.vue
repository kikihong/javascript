<template>
  <div>
    <header class="header">
        <router-link to="/" class="logo">HongSik</router-link>
      <div class="auth"><span>로그인</span> | <span>회원가입</span></div>
    </header>

    <nav class="nav-bar">
      <ul>
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          @mouseover="showSubmenu(index)"
          @mouseleave="hideSubmenu(index)"
        >
          <a href="#">{{ item.title }}</a>
          <ul v-show="item.showSubmenu">
            <li v-for="(submenu, subIndex) in item.submenu" :key="subIndex">
              <a href="#">{{ submenu }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "소 개",
          submenu: ["메뉴 1", "메뉴 2", "메뉴 3"],
          showSubmenu: false,
        },
        {
          title: "게시판",
          submenu: ["메뉴 1", "메뉴 2"],
          showSubmenu: false,
        },
      ],
    };
  },
  methods: {
    showSubmenu(index) {
      this.menuItems[index].showSubmenu = true;
    },
    hideSubmenu(index) {
      this.menuItems[index].showSubmenu = false;
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 300px;
  background-color: #f8f9fa;
  display: flex;
  background-image: url("@/assets/header-image.jpg");
  background-size: cover;
  background-position: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.auth span {
    color:white;
  cursor: pointer;
  margin-left: 10px;
}

.nav-bar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  background-color: #343a40;
  border-radius: 5px;;
}

.nav-bar li {
    position: relative;
    margin-right: 20px;
}

.nav-bar a {
  color: #ffffff;
  text-decoration: none;
  padding: 20px 42px;
  display: block;
}

.nav-bar ul ul {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #495057;
  display: none;
  min-width: 150px;
}

.nav-bar ul ul li {
  margin: 0;
}

.nav-bar ul ul a {
  padding: 10px;
}

.nav-bar ul li:hover > ul {
  display: block;
}
.header-image {
  width: 100%; /* 원하는 너비 값으로 조정 */
  height: auto; /* 높이 자동 조정 */
 
}
</style>
