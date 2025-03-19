<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar 
      app 
      color="white"
      elevation="1"
      height="90"
    >
      <v-container class="px-4">
        <v-row align="center" no-gutters>
          <v-col cols="auto">
            <router-link to="/" class="logo-container">
              <img
                :src="require('@/assets/images/brand/GR_CONTROL.webp')"
                alt="GR Control Logo"
                class="company-logo"
              />
            </router-link>
          </v-col>

          <v-spacer></v-spacer>

          <!-- Navigation Menu for larger screens -->
          <v-col cols="auto" class="d-none d-md-flex align-center">
            <v-btn
              v-for="(item, i) in displayedMenuItems"
              :key="i"
              :to="item.to"
              variant="text"
              class="mx-2 text-body-1"
              color="primary"
              :active-class="'font-weight-bold'"
              @click="handleMenuItemClick(item)"
            >
              {{ item.title }}
            </v-btn>
            <v-btn color="primary" class="ml-4" variant="flat" to="/contacto">
              Contáctenos
            </v-btn>
          </v-col>

          <!-- Mobile menu button -->
          <v-col cols="auto" class="d-flex d-md-none">
            <v-app-bar-nav-icon
              @click="drawer = !drawer"
              color="primary"
            ></v-app-bar-nav-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Navigation Drawer for mobile -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="280"
    >
      <v-list>
        <v-list-item class="pa-4 mb-4">
          <img
            :src="require('@/assets/images/brand/GR_CONTROL.webp')"
            alt="GR Control Logo"
            class="mobile-logo"
          />
        </v-list-item>

        <v-list-item
          v-for="(item, i) in displayedMenuItems"
          :key="i"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          color="primary"
          class="mb-1"
          @click="handleMenuItemClick(item)"
        ></v-list-item>
        <v-divider class="my-4"></v-divider>

        <v-list-item
          to="/contacto"
          prepend-icon="mdi-email"
          title="Contáctenos"
          color="primary"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view @login="handleLogin"></router-view>
    </v-main>

    <!-- Footer -->
    <v-footer
      class="footer"
      color="primary"
      dark
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="text-center text-md-left">
            <v-img
              :src="require('@/assets/images/brand/GR_CONTROL.webp')"
              alt="GR Control Logo"
              height="65"
              contain
              class="mb-4"
            />
            <p class="mb-0">Soluciones en automatización industrial</p>
          </v-col>

          <v-col cols="12" md="4" class="text-center">
            <h3 class="text-h6 mb-4">Contacto</h3>
            <p class="mb-1">
              <v-icon size="small" class="mr-2">mdi-phone</v-icon>
              +56 9 1234 5678
            </p>
            <p class="mb-1">
              <v-icon size="small" class="mr-2">mdi-email</v-icon>
              contacto@grcontrol.cl
            </p>
            <p class="mb-0">
              <v-icon size="small" class="mr-2">mdi-map-marker</v-icon>
              Santiago, Chile
            </p>
          </v-col>

          <v-col cols="12" md="4" class="text-center text-md-right">
            <h3 class="text-h6 mb-4">Síguenos</h3>
            <div class="d-flex justify-center justify-md-end">
              <v-btn
                v-for="(icon, i) in socialIcons"
                :key="i"
                :href="icon.link"
                target="_blank"
                icon
                variant="text"
                class="mx-2"
              >
                <v-icon>{{ icon.icon }}</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <v-row>
          <v-col cols="12" class="text-center">
            <p class="mb-0 text-caption">
              {{ new Date().getFullYear() }} GR Control. Todos los derechos reservados.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    isLoggedIn: false, // Track login status
    menuItems: [
      {
        title: 'Inicio',
        to: '/',
        icon: 'mdi-home'
      },
      {
        title: 'Productos',
        to: '/productos',
        icon: 'mdi-package-variant-closed'
      },
      {
        title: 'Servicios',
        to: '/servicios',
        icon: 'mdi-tools'
      },
      {
        title: 'Mantenimiento',
        to: '/mantenimiento',
        icon: 'mdi-wrench', // Icon for Mantenimiento
      },
      {
        title: 'Logout',
        to: '/login',
        icon: 'mdi-logout', // Icon for Logout
      },
      {
        title: 'Login',
        to: '/login',
        icon: 'mdi-login',
      },
    ],
    socialIcons: [
      {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/grcontrol'
      },
      {
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/company/grcontrol'
      },
      {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/grcontrol'
      }
    ]
  }),
  computed: {
    displayedMenuItems() {
      if (this.isLoggedIn) {
        return this.menuItems.filter((item) => item.title !== "Login");
      } else {
        return this.menuItems.filter(
          (item) => item.title !== "Mantenimiento" && item.title !== "Logout"
        );
      }
    },
  },
  methods: {
    handleLogin() {
      this.isLoggedIn = true;
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.$router.push({ name: "HomeView" }); // Navigate to home after logout
    },
    handleMenuItemClick(item) {
      if (item.title === "Logout") {
        this.handleLogout();
      }
    },
  },
  // ... (rest of your script) ...
};
</script>

<style>
.footer {
  margin-top: auto;
}

.v-btn {
  text-transform: none !important;
  letter-spacing: 0 !important;
}

.v-toolbar-title a {
  color: inherit;
}

.v-app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.v-app-bar .v-btn {
  font-weight: 500;
}

.v-app-bar .v-btn--active {
  position: relative;
}

.v-app-bar .v-btn--active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background-color: var(--v-primary-base);
  border-radius: 2px;
}

/* Estilos del logo */
.logo-container {
  display: block;
  height: 85px;
  padding: 8px 0;
}

.company-logo {
  height: 100%;
  width: auto;
  object-fit: contain;
  max-width: 280px;
}

.mobile-logo {
  height: 55px;
  width: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.footer-logo {
  height: 65px;
  width: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  margin-bottom: 1.5rem;
}

@media (min-width: 960px) {
  .footer-logo {
    margin: 0;
  }
}
</style>
