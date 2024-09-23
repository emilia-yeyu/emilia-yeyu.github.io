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
    "revision": "b590eeea4332c866f815ef6388e5ec72"
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
    "url": "assets/js/12.0e8e337a.js",
    "revision": "41b640467e21b22a89ae86a923571f08"
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
    "url": "assets/js/16.125c299c.js",
    "revision": "d388e9ecce88525903f42c97686fe402"
  },
  {
    "url": "assets/js/17.f53323a8.js",
    "revision": "2b05e5f1d7c74f9f2fcc504bbb8a767a"
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
    "url": "assets/js/app.8819115a.js",
    "revision": "d15b74ebb186cd887bd23497e8b7c978"
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
    "revision": "907d787536df4c2b5c4c72d5f6249d82"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "8203e4cda1f37289d640018ff3311bf2"
  },
  {
    "url": "categories/life/index.html",
    "revision": "77766938305f494aab3bb74fa233ddd4"
  },
  {
    "url": "categories/zhongkao/index.html",
    "revision": "81d4ea69a792243e4d1a2d9f054c3023"
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
    "revision": "ac9bfaa02ee849abfc2bf115b76dca39"
  },
  {
    "url": "js/custom.js",
    "revision": "8e55c1809419030fcd5dc12f434554cc"
  },
  {
    "url": "tag/index.html",
    "revision": "12c67d40757d699dd68af4a752b01eec"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "595983ae76f2e0d5560db2ed6e558682"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "74570300d2a5bb77b0f9c91e99be2a45"
  },
  {
    "url": "tags/中考/index.html",
    "revision": "4f96fadcf78c99fdddee65bf756c4b31"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8fb34a9acb4c8e487bc1bf9e3d6614d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "f6e9d03e2e215aed69f19f42702e621c"
  },
  {
    "url": "中考/01.html",
    "revision": "3ba1895ec2108f6cf5fb80c1c6281dc4"
  },
  {
    "url": "中考/index.html",
    "revision": "5d104ce4193d595c866a36856f1caabb"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8a0fa4b02f6c62f1fd38f2f7ec5a8979"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "089e0693948192ab56586ddb0ea2466b"
  },
  {
    "url": "生活分享/index.html",
    "revision": "dd199b06506e00885f81dbd0f091e586"
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
