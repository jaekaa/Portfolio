let app = new Vue({
    el: "#app",
    data() {
      return {
        mark: 1,
        images: [
          "https://webstatic.mihoyo.com/ys/event/obt-landing/images/ch1.ea17c634.png",
          "https://webstatic.mihoyo.com/ys/event/obt-landing/images/ch2.7f8d771b.png",
          "https://webstatic.mihoyo.com/ys/event/obt-landing/images/ch3.e2ffdce6.png",
          "https://webstatic.mihoyo.com/ys/event/obt-landing/images/ch4.1b524559.png",
          "https://webstatic.mihoyo.com/ys/event/obt-landing/images/ch5.15e0d08e.png"
        ]
      };
    },
    methods: {
      setStatus(index) {
        return {
          "pc-ch__slide": true,
          "pc-ch__active": this.mark == index,
          "pc-ch__next-1": (this.mark + 1) % this.images.length == index,
          "pc-ch__next-2": (this.mark + 2) % this.images.length == index,
          "pc-ch__pre-2": (this.mark + this.images.length - 2) % this.images.length == index,
          "pc-ch__pre-1": (this.mark + this.images.length - 1) % this.images.length == index
        };
      },
      pre() {
        this.mark = (this.mark + this.images.length - 1) % this.images.length;
      },
      next() {
        this.mark = (this.mark + 1) % this.images.length;
      },
      setActive(index) {
        return {
          "pc-ch__pagination-bullet": true,
          "pc-ch__pagination-bullet--active": index % this.images.length == this.mark
        };
      },
      setCount(index) {
        this.mark = index % this.images.length;
      }
    }
  });
  