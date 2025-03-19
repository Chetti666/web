<template>
  <v-container class="d-flex align-center justify-center fill-height" fluid>
    <v-card class="pa-6 login-card">
      <v-card-title class="text-center">
        <img
          src="@/assets/images/brand/GR_CONTROL.webp"
          alt="Logo"
          class="logo"
        />
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Username"
            required
            prepend-icon="mdi-account"
            clearable
          ></v-text-field>
        <div class="password-input-container">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            required
            prepend-icon="mdi-lock"
            clearable
          ></v-text-field>
          <v-btn
              class="password-toggle-btn"
              icon
              @click="showPassword = !showPassword"
            >
              <v-icon>{{ showPassword ? "mdi-eye" : "mdi-eye-off" }}</v-icon>
            </v-btn>
          </div>
          <v-checkbox
            v-model="rememberMe"
            label="Recuerdame"
            class="mt-4"
          ></v-checkbox>
          <v-alert v-if="loginError" type="error" class="mt-4" dismissible>
            {{ loginErrorMessage }}
          </v-alert>
        </v-form>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          @click="submit"
          color="primary"
          :loading="loading"
          :disabled="loading"
        >
          Login
        </v-btn>
        <v-btn @click="clearForm" color="secondary" variant="outlined">
          Clear
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      username: "",
      password: "",
      showPassword: false,
      rememberMe: false,
      loginError: false,
      loginErrorMessage: "",
      loading: false,
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) => v.length >= 3 || "Username must be at least 3 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be at least 6 characters",
      ],
      // Simulated user database
      users: [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        // Add more users here if needed
      ],
    };
  },
  methods: {
    submit() {
      this.loginError = false;
      this.loginErrorMessage = "";
      if (this.$refs.form.validate()) {
        this.loading = true;
        // Simulate login process
        setTimeout(() => {
          const user = this.users.find(
            (u) => u.username === this.username
          );

          if (user && user.password === this.password) {
            // Successful login
            this.$emit("login");
            this.$router.push({ name: "ManteView" });
          } else {
            // Failed login
            this.loginError = true;
            this.loginErrorMessage = "Invalid username or password.";
          }
          this.loading = false;
        }, 1500);
      }
    },
    clearForm() {
      this.$refs.form.reset();
      this.loginError = false;
      this.loginErrorMessage = "";
    },
  },
};
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 20px;
  max-width: 80%;
  height: auto;
}

.login-card {
  width: 100%;
  max-width: 400px;
}

.password-input-container {
  position: relative;
}

.password-toggle-btn {
  position: absolute;
  top: 35%;
  right: 10px;
  transform: translateY(-50%);
  min-width: auto !important;
  padding: 0 !important;
}
</style>
