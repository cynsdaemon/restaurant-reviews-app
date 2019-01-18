// Register service worker only if supported
// Path to Service Worker needs to be relative to the origin
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log("Service Worker has been registered successfully!");
    }).catch((e) => {
      console.log("Couldn't register service worker... \n", e);
    });
}

      