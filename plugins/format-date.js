import Vue from "vue";

Vue.filter("formatDate", (dateStr) =>
  new Date(dateStr).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })
);
