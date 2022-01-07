_link on npm: [@nopr3d/vue-next-rx](https://www.npmjs.com/package/@nopr3d/vue-next-rx)_

Hello there !

The latest update of Vue is here, we are several to test it but we are still waiting for the update of certain dependencies.


So, instead of waiting I said to myself : "why don't you do it yourself?"

I chose the dependency with which I had the most affinity ([vue-rx](https://github.com/vuejs/vue-rx)) and after a few days (and a lot of coffee) the dependency was up to date with Vue Next and its unit tests too.


![Nice !](https://dev-to-uploads.s3.amazonaws.com/i/5554oaicsd55bl0j0gq7.gif)

Now let's talk about this dependency, Vue Next offers a lot of changes (new lifecycle hooks, composition API, performance improvements, multiple root node, ...)


So I took all the existing functionality of [vue-rx](https://github.com/vuejs/vue-rx) and I took the opportunity to also extend new features (Ref and Watch)


For example is how you can use Ref and Watch with the reactive way :

# Ref

```js
import { ref } from "@nopr3d/rx-vue-next";

// use ref like an Rx Subject
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const msg = ref("Message exemple");

    setTimeout(() => {
      msg.value = "New message !";
    }, 2000);

    msg.subscribe((value) => {
      console.log(value); // After 2s will print : New message !
    });

    return { msg };
  },
});
```

```html
<!-- bind to it normally in templates -->
<!-- on change DOM is update too -->
<div>{{ msg }}</div>
```

---

<br />

# Watch

```js
import { ref, watch } from "@nopr3d/rx-vue-next";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const msg = ref("Message exemple");

    watch(msg).subscribe((val) => {
      console.log(val); // After 2s will print : New message !
    });

    setTimeout(() => {
      msg.value = "New message !";
    }, 2000);

    return { msg };
  },
});
```

```html
<!-- bind to it normally in templates -->
<!-- on change DOM is update too -->
<div>{{ msg }}</div>
```


---

Of course updated the test on vue next (it wasn't easy haha)

![Tests](https://dev-to-uploads.s3.amazonaws.com/i/gwlede2xe4r9u9fu7wm0.PNG)

---

The example folder is also updated

If you wanna test it you can install it with : 

npm install vue @nopr3d/vue-next-rx rxjs --save

---

This is my first publish on npm, feel free to open an issue !

Thanks and have a good day !

_link on npm: [@nopr3d/vue-next-rx](https://www.npmjs.com/package/@nopr3d/vue-next-rx)_

_repo: [vue-next-rx](https://github.com/NOPR9D/vue-next-rx)_