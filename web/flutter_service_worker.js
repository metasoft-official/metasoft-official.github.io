'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8ac42cdd9e2098a5182862f0e318da33",
"index.html": "59e0e2d1d05728d8c60aa6b2e7fc1767",
"/": "59e0e2d1d05728d8c60aa6b2e7fc1767",
"main.dart.js": "498ff0cea83934b591c2bc4a6c3cf2b9",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "167c0297f76fa8f62be51e90e348ce61",
"icons/Icon-192.png": "82eba9a5d0393b78837a750a7652d6af",
"icons/Icon-maskable-192.png": "82eba9a5d0393b78837a750a7652d6af",
"icons/Icon-maskable-512.png": "e78ac52020e99f875dbf73a34c7879aa",
"icons/Icon-512.png": "e78ac52020e99f875dbf73a34c7879aa",
"manifest.json": "7a294af3b7d4828378cfe4b96b20ab7a",
"assets/AssetManifest.json": "24e0ea84a3b9dfc7d07f7331143b871c",
"assets/NOTICES": "bbb901af649af3b89d47b8423a59f527",
"assets/FontManifest.json": "ee9ae6cf8929ba6bb31b2559364f897d",
"assets/AssetManifest.bin.json": "c9cb65bbb0b634bcf3c26b36cd5698ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "891fc62d77f237a0d413acd42618607b",
"assets/fonts/MaterialIcons-Regular.otf": "abcb77948494962f39bd51b8e16c04de",
"assets/assets/images/svg/logo_qr.svg": "969168e2c66bb118b7006250b7ecc265",
"assets/assets/images/svg/logo_footer.svg": "82764d6c12b5b39995dfebadced91ffa",
"assets/assets/images/svg/logo_primary.svg": "3f4e433b4cfc397e20902732ada0a2c1",
"assets/assets/images/svg/icons/icon_arrow_up_grey.svg": "735cd82d54a35dc96fdfc1e8851b35cc",
"assets/assets/images/svg/icons/icon_pin_selected.svg": "4d33168670094ce6da5dfb035ffe78d0",
"assets/assets/images/svg/icons/icon_home_white.svg": "30a159a7235a8bf1b600f3e088eca534",
"assets/assets/images/svg/icons/icon_outline_prev.svg": "f654934d3128a9dda30313c0689579a8",
"assets/assets/images/svg/icons/icon_minus.svg": "b42219819a7edb35b144fbf60144bb06",
"assets/assets/images/svg/icons/icon_outline_next.svg": "63164aeb953ce682f75ca9f5b371853c",
"assets/assets/images/svg/icons/icon_insert.svg": "3f4a287abd9a7cd791108e2aff71aa59",
"assets/assets/images/svg/icons/icon_share.svg": "cbf73090668ce65bfa44498a1af0a318",
"assets/assets/images/svg/icons/icon_clock.svg": "0a61f22ee6d546a3c1a067fd1aef4cb7",
"assets/assets/images/svg/icons/icon_global.svg": "5c9261a68494f044b248cdbf90cfae24",
"assets/assets/images/svg/icons/icon_refresh.svg": "2203252afd5bdbf6056fc59e1744c7b1",
"assets/assets/images/svg/icons/icon_checkbox_dis.svg": "e7d92653101b12a3ac0aba5f0c9e1573",
"assets/assets/images/svg/icons/icon_qr.svg": "aa61717d66839e612cb808fd8c1ed0fe",
"assets/assets/images/svg/icons/icon_profile_white.svg": "53f43665eb77ebe911a9b34b8d47c5ff",
"assets/assets/images/svg/icons/icon_image_line.svg": "8a2e741ac7ffccc1814721628fffbbbd",
"assets/assets/images/svg/icons/icon_outline_prev_dis.svg": "1b1914078df4af24391ee8d69b42f3c9",
"assets/assets/images/svg/icons/icon_arrow_down_grey.svg": "db5ea965957ae942f7a9be35300e9cbf",
"assets/assets/images/svg/icons/icon_bottom_sheet.svg": "9be2ade82a65330b992c1783b951de06",
"assets/assets/images/svg/icons/icon_search.svg": "db10bbb0068824c494d7daf0c619b028",
"assets/assets/images/svg/icons/icon_back.svg": "5239edbe54655c1970470f73b59c5d8d",
"assets/assets/images/svg/icons/icon_outline_next_dis.svg": "74e3709a6d803d60a4ae29425e86fe06",
"assets/assets/images/svg/icons/icon_close.svg": "efbf940f632b482cb3c0cceb04d9bfa5",
"assets/assets/images/svg/icons/icon_arrow_up.svg": "d9c3005084f814c827697ebcf993b1f5",
"assets/assets/images/svg/icons/icon_profile.svg": "8eb9786cb9eb33b24b42a2fa3dad3df3",
"assets/assets/images/svg/icons/icon_arrow_down.svg": "5b185a1c77c43c9bcdce3354fa18ee7f",
"assets/assets/images/svg/icons/icon_radio.svg": "6cdd78de92fcb4f93fbb2a01b1d290c0",
"assets/assets/images/svg/icons/icon_pin.svg": "4e4e64274a891db3d78e3df06c57041b",
"assets/assets/images/svg/icons/icon_calender_accent.svg": "233d0a9dc9d1bae3e68919f06c3e32cc",
"assets/assets/images/svg/icons/icon_email.svg": "b7def143293c6619acbddc70b52cb9e2",
"assets/assets/images/svg/icons/icon_cart.svg": "c6e4a0dcbe901b68c4cd304e30a37b51",
"assets/assets/images/svg/icons/icon_delete.svg": "c20c130e8608b8558cb7d59e3ca13828",
"assets/assets/images/svg/icons/icon_cart_white.svg": "2633c5ceeaec8b86e655a000d2f7ae8c",
"assets/assets/images/svg/icons/icon_checkbox.svg": "e7e0e77771f9034e64e5d8f07f93facf",
"assets/assets/images/svg/icons/icon_polygon.svg": "1f064815dfa19c53b977d032ce537e45",
"assets/assets/images/svg/icons/icon_bell.svg": "fcd6fec6349cf7cd592f383d17e535f8",
"assets/assets/images/svg/icons/icon_back_white.svg": "2dd51435f2a55d1f9758a742f5c1b104",
"assets/assets/images/svg/icons/icon_calender_grey.svg": "d6f0fe0b41af9f509072dfabafe9a40a",
"assets/assets/images/svg/icons/icon_insert_black.svg": "a0d11857971ba89ef3cd3f0871b80714",
"assets/assets/images/svg/icons/icon_up.svg": "e1aa49fc6bdbe9ba614b7836ae47741e",
"assets/assets/images/svg/icons/icon_checkbox_selected.svg": "585f1318904bf8db0005950cafed1e90",
"assets/assets/images/svg/icons/icon_add.svg": "3e232fc32990ecfd2d6b90a964f7ba2a",
"assets/assets/images/svg/icons/icon_plus.svg": "0b924e79e16300e0a531b2c192c8a38d",
"assets/assets/images/svg/icons/icon_home.svg": "f4052cb969af5e54b21acd18cbd75193",
"assets/assets/images/svg/icons/icon_qr_accent.svg": "4ceaca2d276025fc403579ac2049940d",
"assets/assets/images/svg/icons/icon_location.svg": "a5a727e4133821a4ebde13dd68f7756e",
"assets/assets/images/svg/icons/icon_share_white.svg": "73acea766b085a48b27ce44169c26fc0",
"assets/assets/images/svg/icons/icon_tooltip_right.svg": "cdccf8a19cf92c8af947c732ca6ebdbc",
"assets/assets/images/svg/icons/icon_up_primary.svg": "200fab5b3295a6046ea9a976e8a2af4c",
"assets/assets/images/svg/icons/icon_radio_selected.svg": "13ed62b60a7de062503ae25bc0221630",
"assets/assets/images/svg/logo_appbar.svg": "01fd0ca70147d41ecc667277069bbe7f",
"assets/assets/images/png/ic_auth_naver.png": "34e0302957a8e715c56c8162541d0e7d",
"assets/assets/images/png/ic_map.png": "2115ae8ef90a2523faaba22768f86fea",
"assets/assets/images/png/ic_kakao.png": "7ac41f456eab15725336356a52ebd2ae",
"assets/assets/images/png/ic_arrow_right.png": "575223b72e144440ff3b635f027e6804",
"assets/assets/images/png/ic_arrow_left.png": "3fcd00178bbd0ea52269318cebecfe79",
"assets/assets/images/png/ic_reservation_dis.png": "a97b0d3c1c949c5dd2f70257ba05f1bc",
"assets/assets/images/png/ic_empty_cart.png": "5be94af30e6a5e04a4a98ef5978267d7",
"assets/assets/images/png/ic_pay_naver.png": "bf66cd546f11b1acb2f216d5270ace47",
"assets/assets/images/png/ic_shop.png": "b99eadf16d0e463774cae69a7d6090b3",
"assets/assets/images/png/ic_share_dis.png": "d8b20de8c84257edced8c24b9e76f830",
"assets/assets/images/png/ic_add.png": "fff26804d4a66434579d599792a74458",
"assets/assets/images/png/ic_link.png": "f91298f251b0b4061e7e5c07fce415c0",
"assets/assets/images/png/ic_map_dis.png": "f318927b262ae409108bc85c74116bd6",
"assets/assets/images/png/ic_pay_payco.png": "d1400604c8d12cc596c6c52a4630db0a",
"assets/assets/images/png/ic_share.png": "d33c6b033e7c16dbfc5fdb8f9b03e955",
"assets/assets/images/png/ic_instagram.png": "898553beb9a09be805b90e1de19100c4",
"assets/assets/images/png/ic_empty.png": "2d5ecc306ab0e12bdb179fc293b69dd4",
"assets/assets/images/png/ic_pay_toss.png": "104155a60b68503e72461926fcaaed78",
"assets/assets/images/png/ic_auth_kakao.png": "2383cbbc8bc94f0a81f5d5113af188a0",
"assets/assets/images/png/ic_pay_kakao.png": "151e295fc7e52f2977d53e93849d7319",
"assets/assets/images/png/ic_reservation.png": "3569d8a25d4ea2ad8f8b93addb984cfe",
"assets/assets/images/png/sample/sample_food_05.png": "de188c2954abd39cdfc084b430b2155e",
"assets/assets/images/png/sample/sample_food_11.png": "07fc17996c273f2a389d2847262fddf6",
"assets/assets/images/png/sample/sample_food_10.png": "abd528c9f3ce8908aad90eb71a39147f",
"assets/assets/images/png/sample/sample_food_04.png": "c96d4dca8826da0d6213312aae5d732a",
"assets/assets/images/png/sample/sample_main.png": "85ff596a07c51fb68c8e11dfd22e02a3",
"assets/assets/images/png/sample/sample_food_12.png": "f4a75fff5b0b4c5955094d7a7080cb73",
"assets/assets/images/png/sample/sample_food_06.png": "143ca80a45186cd1b732500ddb1404c8",
"assets/assets/images/png/sample/sample_food_07.png": "3f439bef64a4de9603272079400e28c6",
"assets/assets/images/png/sample/sample_food_13.png": "c13bd92430af17630534bb2c29b41675",
"assets/assets/images/png/sample/sample_food_03.png": "48f1ae3b86844ab68a24c6a4dd4e3ef1",
"assets/assets/images/png/sample/sample_map.png": "75b96e59370fbb68f6bfa77a6f5d8c89",
"assets/assets/images/png/sample/sample_food_02.png": "d08a93616dbc366aa9f4d177a3d909aa",
"assets/assets/images/png/sample/sample_food_14.png": "ae127e92b69d0835a6340283410bc9b0",
"assets/assets/images/png/sample/sample_food_15.png": "89b9f1d7b633aa0af55a9f68f5d87cb7",
"assets/assets/images/png/sample/sample_food_01.png": "762350cab1178fca525ab71a7218185f",
"assets/assets/images/png/sample/sample_qr.png": "5478431c111fda44730494c685899d06",
"assets/assets/images/png/sample/sample_festival_02.png": "3d2c9e3697ca7af4dc9b638ae98d8d6c",
"assets/assets/images/png/sample/default.jpg": "0a6e6a4ed8814338e36f04bca1a72347",
"assets/assets/images/png/sample/sample_festival_03.png": "ed8f0c997f230e89c8119fb485b2342a",
"assets/assets/images/png/sample/sample_food_09.png": "496a074eef158d98a3fa22db7ebbefcb",
"assets/assets/images/png/sample/sample_festival_01.png": "9406bc15b9e578e5531fc4b5c6cbd277",
"assets/assets/images/png/sample/sample_food_08.png": "e0c591e7453395d90426c8254a0eb602",
"assets/assets/images/png/ic_auth_google.png": "1383194bfbded3155a9ba856f14902d5",
"assets/assets/images/png/ic_auth_apple.png": "24f4f0bd587a20c633ecf5391c81d041",
"assets/assets/images/png/ic_empty_comment.png": "c8ebf3394a04fd996552bc7b18f59761",
"assets/assets/images/png/ic_empty_qr.png": "4f5f56980ddb360ae7ca3608c028c7b2",
"assets/assets/images/lottie/thunderorder_splash.json": "d2b3e60bf050e51220e6b4fa7b897c52",
"assets/assets/fonts/mundial-demibold.otf": "83f58bc9d0514b629d82a6f8d1dcba73",
"assets/assets/fonts/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/assets/fonts/mundial-regular.otf": "f45a2e8c75a43f218ad1d172b84b920e",
"assets/assets/fonts/Pretendard-Medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/assets/fonts/Pretendard-ExtraBold.otf": "67e8e4773c05f2988c52dfe6ea337f33",
"assets/assets/fonts/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/assets/fonts/Pretendard-SemiBold.otf": "d9d912f2630bae445757f4769271c35c",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
