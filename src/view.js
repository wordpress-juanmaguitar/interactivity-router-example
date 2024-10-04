import { store } from "@wordpress/interactivity";

const { state } = store("router-2f43f8", {
  state: {
    baseUrl: window.location.href, // https://playground.wordpress.net/scope:0.6413659246282131/
    urlRegionDisplay: window.location.href,
    get urlRegionDisplaySlug() {
      const { pathname } = new URL(state.urlRegionDisplay);
      return pathname.split("/").filter(Boolean).pop() || "";
    },
  },
  actions: {
    *navigate(e) {
      e.preventDefault();
      const { actions } = yield import("@wordpress/interactivity-router");
      debugger;
      state.urlRegionDisplay = e.target.href;
      const urlToNavigatePlayground =
        state.baseUrl + state.urlRegionDisplaySlug;

      //yield actions.navigate( state.urlRegionDisplaySlug );
      yield actions.navigate(urlToNavigatePlayground);
    },
  },
});
