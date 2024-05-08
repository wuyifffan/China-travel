const vue = new Vue({
  el: '.preloader',
  data: {
    loaded: 0,
    loading: null,
    loadStyle: {
      width: '0%'
    },
    statusElem: $('[status]'),
    loader: $('[loader]'),
    body: $('body'),
    totalVideos: 12, // 视频总数
    videosLoaded: 0 // 已加载完成的视频数
  },
  ready() {
    this.preloader = $(this.$el);
    this.removeScrolling();
    this.startLoading();
    this.findVideos(); // 在页面加载时查找视频元素
  },
  watch: {
    loaded() {
      this.loadStyle.width = `${this.loaded}%`;
    }
  },
  methods: {
    removeScrolling() {
      this.body.css('overflow', 'hidden');
    },
    startLoading() {
      this.loading = setInterval(this.load, 20);
    },
    load() {
      this.loaded < 100 ? this.loaded++ : this.doneLoading();
    },
    doneLoading() {
      clearInterval(this.loading);
      this.updateStatus();
      this.setLoadingComplete(); // 在所有内容加载完成后设置加载进度为100%
    },
    updateStatus() {
      this.statusElem.text('');
      this.loader.fadeOut();
      this.animatePreloader();
    },
    animatePreloader() {
      let app = this,
        height = this.preloader.height(),
        properties = {
          'margin-top': `-${height}`
        },
        options = {
          duration: 0,
          easing: 'easeOutQuad',
          complete() {
            app.removePreloader();
          }
        };
      this.preloader.delay(0).animate(properties, options);
    },
    removePreloader() {
      this.preloader.remove();
      this.body.removeAttr('style');
      this.animateWebsite();
    },
    animateWebsite() {
      console.log('');
    },
    setLoadingComplete() {
      // 页面所有资源加载完成后，将加载进度设置为100%
      this.loaded = 100;
    },
    findVideos() {
      const videos = document.querySelectorAll('video');
      this.totalVideos = videos.length;
      videos.forEach(video => {
        video.addEventListener('loadedmetadata', this.videoLoaded, false);
      });
    },
    videoLoaded() {
      this.videosLoaded++;
      if (this.videosLoaded === this.totalVideos) {
        // 当所有视频加载完成后，设置加载进度为100%
        this.setLoadingComplete();
      }
    }
  }
});
