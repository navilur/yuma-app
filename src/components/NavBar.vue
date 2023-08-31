<template>
  <nav class="navbar main_nav navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          src="https://flava.yumaapp.uk/assets/images/logo.png"
          class="img-fluid"
          alt=""
        />
      </a>
      <a href="" class="login btn d-lg-none">Login</a>
      <div class="collapse navbar-collapse d-none d-lg-block">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Order Now</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
        <a href="" class="login btn">Login</a>
      </div>
    </div>
  </nav>
  <nav class="navbar mobile_nav d-md-block d-lg-none navbar-expand-lg">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="" class="btn">Order Now</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#"
              ><i class="fa-solid fa-angles-right"></i> Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fa-solid fa-angles-right"></i> Order Now</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><i class="fa-solid fa-angles-right"></i> Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.main_nav {
  background: #212121 !important;
}

.navbar-brand img {
  width: 150px;
  height: 60px;
}

.nav-link {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  padding: 8px;
}

.nav-link:hover {
  color: #ff9900;
}

.login {
  border: none;
  padding: 6px 26px;
  border-radius: 50px;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  background: #ff9900;
  color: #fff;
}

.login:hover {
  background: #cf7d02;
}

.mobile_nav {
  background: #ff9900;
}

.mobile_nav .nav-link {
  color: #181818;
}

.mobile_nav .nav-link:hover,
.mobile_nav .active {
  color: #fff;
}

.mobile_nav .btn {
  background: #fff;
  color: #181818;
  font-size: 15px;
  font-weight: 600;
  padding: 6px 10px;
}

.navbar-toggler {
  background: #fff;
}
</style>
