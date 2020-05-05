import Saas from '@go-saas/go-saas-ui/src/saas';

// packages
import Router from "@go-saas/go-saas-ui/src/packages/router/basic/router";
import Axios from "@go-saas/go-saas-ui/src/packages/http/axios/axios";
import I18n from "@go-saas/go-saas-ui/src/packages/i18n/basic/i18n";
import LocalStorage from "@go-saas/go-saas-ui/src/packages/storage/local-storage/local-storage";
import Event from "@go-saas/go-saas-ui/src/packages/event/basic/event";
import Security from "@go-saas/go-saas-ui/src/packages/security/basic/security";

// components
import Master from "@go-saas/go-saas-ui/src/components/master/Master.vue";

// scss
import './scss/app.scss'

// config
const host = "http://localhost:3000"
const locale = "en"

const router = new Router();
const http = new Axios({baseURL: host});
const i18n = new I18n(locale);
const storage = new LocalStorage();
const event = new Event(host);
const security = new Security(router, http, event, storage);

new Saas('Go SaaS', Master, router, http, i18n, event, security)
    .init()
    .run();