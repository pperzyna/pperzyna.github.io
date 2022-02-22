<template>
  <section>
    <div class="hero is-muted">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">contact me</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns mt-4">
        <div class="column is-8">
          <PartialHeader> directly via </PartialHeader>
          <div class="columns mt-4">
            <div class="column">
              <div class="content">
                <h4>Phone</h4>
                <a href="tel:+48509991345" title="PL - call me">
                  +48 509 991 345
                </a>
                <br />
                <a href="tel:+31651433791" title="NL - call me">
                  +31 651 433 791
                </a>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <h4>E-mail</h4>
                <a href="mailto:hello@pperzyna.com" title="mail me">
                  hello@pperzyna.com
                </a>
              </div>
            </div>
          </div>
          <div class="columns mb-6 mt-4">
            <div class="column">
              <div class="content">
                <h4>Pit's Services BV</h4>
                Korte Lijnbaanssteeg 1 / 4036 <br />
                1012SL Amsterdam
              </div>
            </div>
            <div class="column">
              <div class="content">
                <h4 class="is-hidden-mobile">&nbsp;</h4>
                KvK: 84660023 <br>
                VAT: NL863302373B01
              </div>
            </div>
          </div>

          <PartialHeader> or send me a message!</PartialHeader>
          <div class="columns  mt-4">
            <div class="column">
              <div class="content">
                <form name="contact" netlify>
                  <div class="field is-horizontal">
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <input
                            class="input is-medium"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="field">
                        <div class="control">
                          <input
                            class="input is-medium"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value=""
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="field is-horizontal mt-5">
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <textarea
                            class="textarea is-medium"
                            placeholder="Explain how I can help you"
                            name="message"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="field is-horizontal mt-5">
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <button
                            class="button is-medium is-primary is-rounded"
                          >
                            let me know
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-3 is-offset-1">
          <div class="sticky">
            <PartialTwitter />
          </div>
        </div>
      </div>
      <LayoutMenu />
    </div>
  </section>
</template>

<script>
export default {
  head() {
    const title = 'Contact'
    const description = ''

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'canonical',
          property: 'canonical',
          content: 'https://pperzyna.com' + this.$route.path,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },
}
</script>
