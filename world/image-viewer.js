import * as components from "https://designstem.github.io/framework/framework.js";
import * as utils from "https://designstem.github.io/framework/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
    el: "#app",
    data: () => ({
	red:30,
	green:30,
	blue:30,
    }),
    methods: {
	...utils },
    template:
    `
    <div style="padding-left:100px">
        <br/><br/>
        <h3> Red: {{red}}% </h3>
        <input id="rslider" type="range" v-model="red" max="100" min=0 step="1"></input>
        <h3> Green: {{green}}% </h3>
        <input id="gslider" type="range" v-model="green" max="100" min=0 step="1"></input>
        <h3> Blue: {{blue}}% </h3>
        <input id="bslider" type="range" v-model="blue" max="100" min=0 step="1"></input>
    </div>
`
});
