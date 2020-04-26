<template>
  <div class="home">
    <div class="jumbotron text-center mb-0">
      <div class="container">
        <img class="kotahashihama mb-4" src="@/assets/kotahashihama.jpg" alt="Kota Hashihama" />
        <h1 class="name">
          Kota<br />Hashihama
          </h1>
        <p class="job">
          Web Developer
        </p>
        <router-link to="/works" class="btn btn-primary btn-lg">
          Works
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.jumbotron {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6.5rem 1rem;
  border-radius: 0;
  background-image: url("../assets/jumbotron.jpg");
  background-size: cover;
  background-position: center 40%;
  height: 100vh;

  .container {
    font-weight: normal;
    color: #fff;
  }

  .kotahashihama {
    border-radius: 100%;
    width: 130px;
    height: 130px;
    object-fit: cover;
  }

  .name {
    line-height: 1.4;
    font-size: 1.8rem;
    font-family: "Press Start 2P", cursive;
  }

  .job {
    margin-bottom: 2.5rem;
  }
}

@media (min-width: 576px) {
  .jumbotron {
    .name {
      font-size: 3.5rem;
    }

    .job {
      font-size: 1.25rem;
    }
  }
}

@media (min-width: 768px) {
  .jumbotron {
    .kotahashihama {
      width: 150px;
      height: 150px;
    }

    .name {
      font-size: 4rem;
    }
  }
}
</style>
