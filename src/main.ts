import {createApp} from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';

import router from './routes/index'

import legoBricks from "well-bricks"
// import legoBricks from "test-bricks-teach"
import 'well-bricks/dist/well-bricks.umd.css'
import './reset.css'

const app = createApp(App)
app.use(Antd).use(router).use(legoBricks)
app.use(Antd).use(router)
app.mount('#app')


// `
// sudo docker run -d -p 8083:80 --name well-bricks -v ~/nginx/www/well-bricks:/usr/share/nginx/html -v ~/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v ~/nginx/logs:/var/log/nginx nginx
//    sudo docker restart bea1bce45ac9ffe6273b1e6c1d3f5bca2f18ad570cc07bed1d6f1065a137a009
