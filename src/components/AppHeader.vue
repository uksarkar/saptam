<template>
  <header class="app-bar">
    <div class="flex-container">
      <div class="logo">&nbsp;</div>
      <div class="menu">
        <ul>
          <li tabindex="901">
            File
            <ul>
              <li>Sub 1</li>
              <li>Sub 2</li>
              <li>Sub 3</li>
              <li class="separator"></li>
              <li>Sub 1</li>
              <li>
                Sub 2
                <ul>
                  <li>Item 1</li>
                  <li>
                    Item 2
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Sub 3</li>
            </ul>
          </li>
          <li tabindex="902">
            Edit
            <ul>
              <li>Sub 1</li>
              <li>Sub 2</li>
              <li>Sub 3</li>
              <li class="separator"></li>
              <li>Sub 1</li>
              <li>
                Sub 2
                <ul>
                  <li>Item 1</li>
                  <li>
                    Item 2
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Sub 3</li>
            </ul>
          </li>
          <li tabindex="903">
            Actions
            <ul>
              <li>
                Invoice
                <span class="float-right">
                  <i class="ti-angle-right"></i>
                </span>
                <ul>
                  <li @click="goToInvoice('Invoice')">View Invoice</li>
                  <li>
                    Create Invoice
                    <span class="float-right">
                      <i class="ti-angle-right"></i>
                    </span>
                    <ul>
                      <li>Create Sell Invoice</li>
                      <li>Create Stock Invoice</li>
                      <li>Create Due Payment Invoice</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Sub 2</li>
              <li>Sub 3</li>
              <li class="separator"></li>
              <li>Sub 1</li>
              <li>
                Sub 2
                <ul>
                  <li>Item 1</li>
                  <li>
                    Item 2
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Sub 3</li>
            </ul>
          </li>
          <li tabindex="904">
            View
            <ul>
              <li @click="reloadPage">Reload</li>
              <li @click="openDevTools">Open Devtools</li>
              <li class="separator"></li>
              <li>
                Language
                <span class="float-right">
                  <i class="ti-angle-right"></i>
                </span>
                <ul>
                  <li @click="changeLang('en')">
                    <i class="ti-check" :class="lang === 'en' ? '':'invisible'"></i>
                    en
                  </li>
                  <li @click="changeLang('bn')">
                    <i class="ti-check" :class="lang === 'bn' ? '':'invisible'"></i>
                    bn
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li tabindex="905">
            Go
            <ul>
              <li>Sub 1</li>
              <li>Sub 2</li>
              <li>Sub 3</li>
              <li class="separator"></li>
              <li>Sub 1</li>
              <li>
                Sub 2
                <ul>
                  <li>Item 1</li>
                  <li>
                    Item 2
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Sub 3</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="title">
      <span class="text d-none d-md-block">Saptam - Brothers Enterprise</span>
    </div>
    <div class="app-actions">
      <ul>
        <li @click="minimize">
          <i class="ti-minus"></i>
        </li>
        <li @click="maximizeOrUnMaximize">
          <i class="ti-layers" v-if="isMaximized"></i>
          <i class="ti-layout-width-full" v-else></i>
        </li>
        <li @click="quiteApplication">
          <i class="ti-close"></i>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { ipcRenderer, remote } from "electron";
const win = remote.getCurrentWindow();
import {mapGetters} from 'vuex';

export default {
  name: "Header",
  data() {
    return {
      isMaximized: undefined
    };
  },
  methods: {
    //minimize main window
    minimize() {
      win.minimize();
    },
    // maximize or unmaximize main window
    maximizeOrUnMaximize() {
      if (!win.isMaximized()) {
        win.maximize();
      } else {
        win.unmaximize();
      }
    },
    // close the application
    quiteApplication() {
      ipcRenderer.send("quit-app");
    },

    // menu methods___________________
    // open dev-tools
    openDevTools() {
      win.webContents.openDevTools();
    },

    reloadPage() {
      location.reload();
    },

    changeLang(lang) {
      this.$store.commit('CHANGE_LANGUAGE',lang);
      this.$ln.local = lang;
    },
    // Actions tab
    goToInvoice(to) {
      let currentPage = this.$route.name;
      if(currentPage != to) {
        this.$router.push({name:to});
      }
    }
  },
  mounted() {

    this.isMaximized = win.isMaximized();

    win.on("maximize", () => {
      this.isMaximized = true;
    });

    win.on("unmaximize", () => {
      this.isMaximized = false;
    });
  },
  computed: {
    ...mapGetters({
      lang: 'getLang',
    })
  }
};
</script>
