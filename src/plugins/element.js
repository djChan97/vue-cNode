import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

import { Dialog, Button, Tabs, TabPane, Message, Tag, Pagination } from 'element-ui'

Vue.prototype.$message = Message

Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Pagination)
