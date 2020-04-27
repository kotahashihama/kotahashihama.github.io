<template>
  <div class="contact section">
    <div class="container">
      <div class="section-header title text-center my-5">
        <h2 class="section-title text-uppercase mb-3">
          <i class="far fa-paper-plane"></i> Contact
        </h2>
        <p class="lead mb-0">
          Feel free to contact me
        </p>
      </div>

      <form
        action="https://mailthis.to/kotahashihama"
        method="post"
        class="form"
      >
        <div class="mb-4">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="name">Name</label>
              <input
                type="text"
                name="came"
                class="form-control"
                id="name"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label for="company-name">Company</label>
              <input
                type="text"
                name="company"
                class="form-control"
                id="company-name"
                placeholder="optional"
              />
            </div>

            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label for="tel">Tel</label>
              <input
                type="tel"
                name="tel"
                class="form-control"
                id="tel"
                placeholder="optional"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              rows="5"
              name="message"
              class="form-control"
              id="message"
              required
            ></textarea>
          </div>
        </div>

        <div class="text-center">
          <input
            type="hidden"
            name="_subject"
            value="Message to Portofolio Website"
          />
          <input
            type="hidden"
            name="_confirmation"
            value="Message has been successfully sent"
          />
          <input type="hidden" name="_honeypot" value />
          <button type="submit" class="btn btn-primary btn-lg">Send</button>
        </div>
      </form>

      <div class="text-center">
        <h3 class="mb-4">Have a connection on SNS!</h3>
        <a
          href="https://github.com/kotahashihama"
          target="_blank"
          class="btn btn-outline-primary mr-1 mb-1"
        >
          <i class="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://twitter.com/kotahashihama"
          target="_blank"
          class="btn btn-outline-primary mr-1 mb-1"
        >
          <i class="fab fa-twitter"></i> Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/kotahashihama/"
          target="_blank"
          class="btn btn-outline-primary mr-1 mb-1"
        >
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.form {
  margin-bottom: 5rem;
}
</style>
