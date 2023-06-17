<template>
  <nav class="navbar p-4">
    <div class="container-fluid text-center">
      <div class="row align-items-start">
        <div class="col-auto pl-2">
          <div class="navbar-menu row">
            <div class="col-6 hamburger-container">
              <font-awesome-icon icon="fa-solid fa-bars" />
            </div>
            <div class="col-md-6 navbar-logo ">
              <img src="../assets/Group.png" alt="Logo Vue.js" />
            </div>
          </div>
        </div>
        <div class="col-auto me-5 pe-5 ps-5">
          <div class="navbar-search row ms-5">
            <div class="col-11 search-container">
              <input type="text" placeholder="Search here" />
              <font-awesome-icon class="search-icon" icon="fas fa-search"></font-awesome-icon>
            </div>
            <div class="col-1">
              <button class="config-button btn btn-success">
                <font-awesome-icon icon="fas fa-cog" class="config-icon"></font-awesome-icon>
              </button>
            </div>
          </div>
        </div>
        <div class="col-auto ms-5">
          <div class="notification-buttons">
            <button class="notification-button btn btn-dark me-2">
              <span class="notification-count"></span>
              <font-awesome-icon icon="fas fa-bell"></font-awesome-icon>
            </button>
            <button class="notification-button btn btn-dark me-2">
              <span class="notification-count"></span>
              <font-awesome-icon icon="fas fa-message"></font-awesome-icon>
            </button>
            <button class="notification-button-gift btn btn-dark">
              <span class="notification-count-gift"></span>
              <font-awesome-icon icon="fas fa-gift"></font-awesome-icon>
            </button>
          </div>
        </div>
        <div class="col-auto">
          <div class="profile">
            <img src="../assets/profilePicture.png" alt="Perfil" class="rounded-circle" />
            <span class="username">David</span>
            <font-awesome-icon icon="fas fa-caret-down"></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  color: #fff;
}

.navbar-logo img {
  width: 70px;
}

.search-container {
  background-color: #1c2126;
  border-radius: 5px;
  padding: 8px;
}

.search-container input[type="text"] {
  border: none;
  background-color: transparent;
}

.search-icon {
  color: #a4a4a4;
}

.config-button {
  background-color: #13b497;
}

.notification-button,
.notification-button-gift {
  background-color: #2f363d;
}

.notification-button {
  color: #13b497;
}

.notification-button-gift {
  color: #647280;
}

.notification-count,
.notification-count-gift {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.notification-count {
  background-color: #d9b75f;
}

.notification-count-gift {
  background-color: #647280;
}

.profile {
  display: flex;
  align-items: center;
}

.profile img {
  width: 35px;
  height: 35px;
  border-radius: 1px;
  margin-right: 5px;
}

.username {
  font-size: 16px;
  margin-right: 5px;
}

#dropdown {
  color: #fff;
}
</style>


<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBell, faGear, faMessage, faGift, faCaretDown, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
/* eslint-disable */

export default {
  name: "NavbarMenu",
  components: { FontAwesomeIcon }
}

library.add(faBell, faGear, faMessage, faGift, faCaretDown, faMagnifyingGlass, faBars)
</script>
