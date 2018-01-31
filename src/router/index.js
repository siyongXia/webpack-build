import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const hello0 = r => require.ensure([], () => r(require('../components/hello0.vue')), 'group-foo0')
const hello1 = r => require.ensure([], () => r(require('../components/hello1.vue')), 'group-foo1')
const hello2 = r => require.ensure([], () => r(require('../components/hello2.vue')), 'group-foo2')
const hello3 = r => require.ensure([], () => r(require('../components/hello3.vue')), 'group-foo3')
const hello4 = r => require.ensure([], () => r(require('../components/hello4.vue')), 'group-foo4')
const hello5 = r => require.ensure([], () => r(require('../components/hello5.vue')), 'group-foo5')
const hello6 = r => require.ensure([], () => r(require('../components/hello6.vue')), 'group-foo6')
const hello7 = r => require.ensure([], () => r(require('../components/hello7.vue')), 'group-foo7')
const hello8 = r => require.ensure([], () => r(require('../components/hello8.vue')), 'group-foo8')
const hello9 = r => require.ensure([], () => r(require('../components/hello9.vue')), 'group-foo9')
const hello10 = r => require.ensure([], () => r(require('../components/hello10.vue')), 'group-foo10')
const hello11 = r => require.ensure([], () => r(require('../components/hello11.vue')), 'group-foo11')
const hello12 = r => require.ensure([], () => r(require('../components/hello12.vue')), 'group-foo12')
const hello13 = r => require.ensure([], () => r(require('../components/hello13.vue')), 'group-foo13')
const hello14 = r => require.ensure([], () => r(require('../components/hello14.vue')), 'group-foo14')
const hello15 = r => require.ensure([], () => r(require('../components/hello15.vue')), 'group-foo15')
const hello16 = r => require.ensure([], () => r(require('../components/hello16.vue')), 'group-foo16')
const hello17 = r => require.ensure([], () => r(require('../components/hello17.vue')), 'group-foo17')
const hello18 = r => require.ensure([], () => r(require('../components/hello18.vue')), 'group-foo18')
const hello19 = r => require.ensure([], () => r(require('../components/hello19.vue')), 'group-foo19')
const hello20 = r => require.ensure([], () => r(require('../components/hello20.vue')), 'group-foo20')
const hello21 = r => require.ensure([], () => r(require('../components/hello21.vue')), 'group-foo21')
const hello22 = r => require.ensure([], () => r(require('../components/hello22.vue')), 'group-foo22')
const hello23 = r => require.ensure([], () => r(require('../components/hello23.vue')), 'group-foo23')
const hello24 = r => require.ensure([], () => r(require('../components/hello24.vue')), 'group-foo24')
const hello25 = r => require.ensure([], () => r(require('../components/hello25.vue')), 'group-foo25')
const hello26 = r => require.ensure([], () => r(require('../components/hello26.vue')), 'group-foo26')
const hello27 = r => require.ensure([], () => r(require('../components/hello27.vue')), 'group-foo27')
const hello28 = r => require.ensure([], () => r(require('../components/hello28.vue')), 'group-foo28')
const hello29 = r => require.ensure([], () => r(require('../components/hello29.vue')), 'group-foo29')
// const aa = r => require.ensure([], () => r(require('../components/a.vue')), 'group-fooaa')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/hello1',component:hello0},
    {path:'/hello2',component:hello1},
    {path:'/hello3',component:hello2},
    {path:'/hello4',component:hello3},
    {path:'/hello5',component:hello4},
    {path:'/hello6',component:hello5},
    {path:'/hello7',component:hello6},
    {path:'/hello8',component:hello7},
    {path:'/hello9',component:hello8},
    {path:'/hello10',component:hello9},
    {path:'/hello11',component:hello10},
    {path:'/hello12',component:hello11},
    {path:'/hello13',component:hello12},
    {path:'/hello14',component:hello13},
    {path:'/hello15',component:hello14},
    {path:'/hello16',component:hello15},
    {path:'/hello17',component:hello16},
    {path:'/hello18',component:hello17},
    {path:'/hello19',component:hello18},
    {path:'/hello20',component:hello19},
    {path:'/hello21',component:hello20},
    {path:'/hello22',component:hello21},
    {path:'/hello23',component:hello22},
    {path:'/hello24',component:hello23},
    {path:'/hello25',component:hello24},
    {path:'/hello26',component:hello25},
    {path:'/hello27',component:hello26},
    {path:'/hello28',component:hello27},
    {path:'/hello29',component:hello28},
    {path:'/hello0',component:hello29},
    // {path:'/aa',component:aa},
  ]
})
