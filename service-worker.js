/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "69b38bb299e104bf3f6523a061a6b542"
  },
  {
    "url": "assets/css/0.styles.798f876d.css",
    "revision": "9e7de53f551f6a95b1b2f5be37499bb3"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.0225b803.js",
    "revision": "17af38c5ac7ae91a3cc9b40862774507"
  },
  {
    "url": "assets/js/10.595db041.js",
    "revision": "364d0b83cede0158288c3ac29d59e23f"
  },
  {
    "url": "assets/js/11.391f0705.js",
    "revision": "f0e1c8cbbfdb706047c12f6cf540c550"
  },
  {
    "url": "assets/js/12.d533a14a.js",
    "revision": "c64186e4c0d2d831608f49bfed5760c1"
  },
  {
    "url": "assets/js/13.a362dc93.js",
    "revision": "3b54b6f7601d81fea574f0fb933a7792"
  },
  {
    "url": "assets/js/14.babda049.js",
    "revision": "de896782fc0c0082b305b97a37b24172"
  },
  {
    "url": "assets/js/15.062c8763.js",
    "revision": "4832de9322c46ad9575f2de582088cf6"
  },
  {
    "url": "assets/js/16.36532f9e.js",
    "revision": "1c62c5cdb0a5c1463095b4d79e651154"
  },
  {
    "url": "assets/js/17.a9ee1e6d.js",
    "revision": "2a7f7f12aa623e0a4b07581783a681ca"
  },
  {
    "url": "assets/js/4.7e602f67.js",
    "revision": "f144817b0aafb12dc45a47d39816860d"
  },
  {
    "url": "assets/js/5.94061b2d.js",
    "revision": "6fac91882cbfac38bee758b9e18e795f"
  },
  {
    "url": "assets/js/6.95cbec38.js",
    "revision": "fc716e0c63805c6d4d15c757e092b5c6"
  },
  {
    "url": "assets/js/7.a66bb866.js",
    "revision": "2f488aef9e1e82e000161385529c71b2"
  },
  {
    "url": "assets/js/8.2cf9bbd7.js",
    "revision": "05438654251e9a8df646401c29741db6"
  },
  {
    "url": "assets/js/9.728285ec.js",
    "revision": "2b72691961912fa3a11b6e6e8544eed6"
  },
  {
    "url": "assets/js/app.8fd77413.js",
    "revision": "699994fac50d03b959a81f3f809f5b31"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.7a931a68.js",
    "revision": "5c053cc15c983c531709ee4254e036f3"
  },
  {
    "url": "avatar.png",
    "revision": "59e79c81ebc356bdf3e8be27d60da9bf"
  },
  {
    "url": "categories/index.html",
    "revision": "b8e103560b71c8ad8fe35b4f607ee84e"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c9b92be404766b1492a2a5ea9523b7bc"
  },
  {
    "url": "categories/life/index.html",
    "revision": "88a96a892e07e76536f5d49f2f114e31"
  },
  {
    "url": "categories/zhongkao/index.html",
    "revision": "ca602c884cb7e3baa91a10d917dfc6eb"
  },
  {
    "url": "css/style.css",
    "revision": "1bd6e29d089b0cae086595006b7752fd"
  },
  {
    "url": "img/5.jpg",
    "revision": "4a1a8a830953344ffe3f8c610243e34e"
  },
  {
    "url": "img/logo.png",
    "revision": "0c718ee17a3f67ab86ad5b92acab3dc8"
  },
  {
    "url": "index.html",
    "revision": "3f00b1d99d39756d65c4bab9fa6b8b7a"
  },
  {
    "url": "js/custom.js",
    "revision": "8e55c1809419030fcd5dc12f434554cc"
  },
  {
    "url": "tag/index.html",
    "revision": "502e87fe22e3a5120365f815040da939"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "10c1487f97770950b065c32e18f6d3a6"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "d7049cf5bec87865958d46b4f16e17af"
  },
  {
    "url": "tags/中考/index.html",
    "revision": "7d53000513208149e3a9fa09dfa07132"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5f01990310c28a2ae1a265517902f869"
  },
  {
    "url": "timeline/index.html",
    "revision": "444e65e34abbeb5f952f8148c2d41c90"
  },
  {
    "url": "中考/01.html",
    "revision": "8d275039f9b8ec0ee07ad72c23c06882"
  },
  {
    "url": "中考/index.html",
    "revision": "faf119d3da164f300e1288e54d80523a"
  },
  {
    "url": "技术文章/index.html",
    "revision": "bb5b16de47b61b5a5f15af5bfbf02c8f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4f45e93f4acc07019e9e70680e4f87ca"
  },
  {
    "url": "生活分享/index.html",
    "revision": "08f86ba2593ca73125df90e0a8973f92"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
