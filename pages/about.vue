<template>
  <div>
    <div class="hero is-muted">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-2">
              <figure class="image is-square">
                <img
                  src="/img/logo/piotrperzyna.jpg"
                  class="is-rounded"
                  loading="lazy"
                  alt="Piotr Perzyna"
                />
              </figure>
            </div>
            <div class="column is-offset-1 is-4">
              <div>
                <span class="tag is-primary is-medium is-light">about me</span>
              </div>
              <div class="pt-2 pb-4 is-size-4">Hi, I am Piotr Perzyna!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="m-6">
      <div class="container">
        <PartialHeader centered> my certifications </PartialHeader>
        <div class="columns is-centered mt-4">
          <div class="column is-8">
            <div
              class="
                columns
                is-centered is-multiline is-mobile
                has-text-centered
              "
            >
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/aws-developer.png"
                    class="lazyloaded"
                    alt="Aws Developer"
                    title="Aws Developer"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/aws-solutions-architect-associate.png"
                    class="lazyloaded"
                    alt="Aws Solutions Architect Associate"
                    title="Aws Solutions Architect Associate"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/aws-sysops-administrator.png"
                    class="lazyloaded"
                    alt="Aws Sysops Administrator"
                    title="Aws Sysops Administrator"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/cisco-ccent.png"
                    class="lazyloaded"
                    alt="Cisco Ccent"
                    title="Cisco Ccent"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/gcp-associate-cloud-engineer.png"
                    class="lazyloaded"
                    alt="Cp Associate Cloud Engineer"
                    title="Cp Associate Cloud Engineer"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/hashicorp-associate-terraform.png"
                    class="lazyloaded"
                    alt="Hashicorp Associate Terraform"
                    title="Hashicorp Associate Terraform"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/jenkins-engineer.png"
                    class="lazyloaded"
                    alt="Jenkins Engineer"
                    title="Jenkins Engineer"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/microsoft-azure-fundamentals.png"
                    class="lazyloaded"
                    alt="Microsoft Azure Fundamentals"
                    title="Microsoft Azure Fundamentals"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/redhat-rhce.png"
                    class="lazyloaded"
                    alt="Redhat Rhce"
                    title="Redhat Rhce"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/redhat-rhcsa.png"
                    class="ls-is-cached lazyloaded"
                    alt="Redhat Rhcsa"
                    title="Redhat Rhcsa"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-one-quarter-desktop">
                <figure class="image is-1by1">
                  <img
                    src="/images/certs/scrum-professional-scrum-master-1.png"
                    class="ls-is-cached lazyloaded"
                    alt="Scrum Professional Scrum Master 1"
                    title="Scrum Professional Scrum Master 1"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="m-6">
      <div class="container">
        <PartialHeader centered> my photos </PartialHeader>
        <div class="columns mt-4 is-centered">
          <div class="column is-10">
            <div
              class="
                columns
                is-centered is-multiline is-mobile
                has-text-centered
              "
            >
              <div class="column is-half-touch is-half-desktop">
                <figure class="image is-16by9">
                  <img
                    src="/images/me/workshop_kubernetes.png"
                    class="ls-is-cached lazyloaded"
                    alt="Workshop Kubernetes"
                    title="Workshop Kubernetes"
                  />
                </figure>
              </div>
              <div class="column is-half-touch is-half-desktop">
                <figure class="image is-16by9">
                  <img
                    src="/images/me/workshop_speaker.png"
                    class="lazyloaded"
                    alt="Workshop Speaker"
                    title="Workshop Speaker"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LayoutMenu />
  </div>
</template>

<script>
export default {
  head() {
    const title = 'Cloud Engineer, DevOps Consultant'
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
