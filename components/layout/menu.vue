<template>
  <section class="section px-4 mb-6">
    <div class="container">
      <PartialHeader centered> where you can find me </PartialHeader>
      <div class="columns is-mobile is-multiline has-text-centered mt-4">
        <div class="column is-half-mobile">
          <nuxt-link to="/blog/" title="Blog">
            <figure class="image px-4">
              <img src="/images/other/blog.png" alt="Blog" />
            </figure>
          </nuxt-link>
          <nuxt-link to="/blog/" title="Blog" class="title is-size-4">
            Blog
          </nuxt-link>
        </div>
        <div class="column is-half-mobile">
          <nuxt-link to="/talks/" title="Public Speeches">
            <figure class="image px-4">
              <img src="/images/other/talk.png" alt="Public Speeches" />
            </figure>
          </nuxt-link>
          <nuxt-link to="/talks/" title="Public Speeches" class="title is-size-4">
            Talks
          </nuxt-link>
        </div>
        <div class="column is-half-mobile">
          <nuxt-link to="/workshops/" title="Workshops">
            <figure class="image px-4">
              <img src="/images/other/workshop.png" alt="Workshops" />
            </figure>
          </nuxt-link>
          <nuxt-link to="/workshops/" title="Workshops" class="title is-size-4">
            Workshops
          </nuxt-link>
        </div>
        <div class="column is-half-mobile">
          <nuxt-link to="/projects/" title="Projects">
            <figure class="image px-4">
              <img src="/images/other/opensource.png" alt="Projects" />
            </figure>
          </nuxt-link>
          <nuxt-link to="/projects/" title="Projects" class="title is-size-4">
            Projects
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
