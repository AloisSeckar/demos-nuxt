<template>
  <div class="container text-center">
    <h1>Nuxt + Bootstrap</h1>

    <div class="card" style="width: 25%; margin: auto;">
      <img
        src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
        class="card-img-top"
        alt="Bootstrap"
      >
      <div class="card-body">
        <h5 class="card-title">
          Bootstrap integration
        </h5>
        <p class="card-text">
          Bootstrap 5 available in Nuxt 3 easilly via SASS style and a plugin.
        </p>
        <a href="https://github.com/AloisSeckar/demos-nuxt" class="btn btn-primary">More Nuxt demos</a>
      </div>
    </div>

    <div class="dropdown" style="margin-top: 15px;">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        JS powered dropdown
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">It</a></li>
        <li><a class="dropdown-item" href="#">Also</a></li>
        <li><a class="dropdown-item" href="#">Works!</a></li>
      </ul>
    </div>
  </div>
</template>
