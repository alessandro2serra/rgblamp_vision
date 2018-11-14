import * as components from "https://designstem.github.io/framework/framework.js";
import * as utils from "https://designstem.github.io/framework/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
  el: "#app",
  methods: { ...utils }
});
