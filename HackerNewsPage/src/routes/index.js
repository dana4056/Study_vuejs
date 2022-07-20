import { createRouter, createWebHistory } from 'vue-router'

import AskView from '../views/AskView' 
import NewsView from '../views/NewsView'
import JobsView from '../views/JobsView'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'

const routes = [
    //path: url에 대한 정보
    //component: 해당 url 주소로 갔을 때 표시될 컴포넌트(페이지라고 생각)
    {   path: '/', redirect:'/news'},
    {   path: '/news', component: NewsView  },
    {   path: '/ask', component: AskView    },
    {   path: '/jobs', component: JobsView  },
    {   path: '/item', component: ItemView  },
    {   path: '/user', component: UserView  }
]

export const router = new createRouter({
    history: createWebHistory(),
    routes
});
