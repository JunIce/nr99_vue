import Router from 'vue-router'
import ListMain from '../components/ListMain'
import Content from '../components/Content'


const routes = [
    {
        path: '/show/:classname',
        name: 'show',
        component: ListMain
    },
    {
        path: '/:classname/:classid/:id',
        name: 'content',
        component: Content
    }
]

export default new Router({
  routes
});
