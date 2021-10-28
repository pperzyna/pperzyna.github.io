<template>
  <nav aria-label="breadcrumbs" class="breadcrumb mt-3">
    <ul itemscope="itemscope" itemtype="https://schema.org/BreadcrumbList">
      <li
        itemprop="itemListElement"
        itemscope="itemscope"
        itemtype="https://schema.org/ListItem"
      >
        <a href="/" class="is-active" itemprop="item"
          >
          <SvgIconHome />
          <meta itemprop="name" content="Piotr Perzyna" />

 </a
        >
        <meta itemprop="position" content="1" />
      </li>
      <li
        itemprop="itemListElement"
        itemscope="itemscope"
        itemtype="https://schema.org/ListItem"
      >
        <a :href="titleUrl" class="is-active" itemprop="item"
          ><span itemprop="name">{{ title }}</span></a
        >
        <meta itemprop="position" content="2" />
      </li>
      <li
        itemprop="itemListElement"
        itemscope="itemscope"
        itemtype="https://schema.org/ListItem"
        class="is-active"
      >
        <a
          :href="subtitleUrl"
          aria-current="page"
          class="nuxt-link-exact-active is-active"
          itemprop="item"
          ><span itemprop="name">{{ subtitle }}</span></a
        >
        <meta itemprop="position" content="3" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    titleUrl: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    subtitleUrl: {
      type: String,
      default: '',
    },
  },
}
</script>
