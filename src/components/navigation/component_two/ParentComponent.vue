<template>
    <div>
        <ul>
            <li><a class="btn btn-primary text-white" @click="$_navigateTo('Component1',1234)">Component1</a></li>
            <li><a class="btn btn-primary text-white" @click="$_navigateTo('Component2',4567)">Component2</a></li>
            <li><a class="btn btn-primary text-white" @click="$_navigateTo('Component3',7890)">Component3</a></li>
        </ul>

        <component :is="currentComponent" :userId="userId"></component>
        
    </div>
</template>

<script>
// Async Component Implementation No.2
// Uses Async Component Factory

import { eventBus } from './eventBus'
import SuccessComponent from './components/Success'
import ErrorComponent from './components/Error'
export default {
    components:{
         Component1: () => ({ 
            component: import('./components/Component1'),
            loading: SuccessComponent,
            error: ErrorComponent,
            delayed: 200,
            timeout: 500,
         }),
         Component2: () => ({ 
            component: import('./components/Component2'),
            loading: SuccessComponent,
            error: ErrorComponent,
            delayed: 200,
            timeout: 500,
         }),
         Component3: () => ({ 
            component: import('./components/Component3'),
            loading: SuccessComponent,
            error: ErrorComponent,
            delayed: 200,
            timeout: 500,
         }),
    },
    data(){
        return {
            currentComponent: 'Component1',
            userId: 1234,
        }
    },

    methods:{
        switchComponent(component){
            this.userId = component.props
            this.currentComponent = component.name;
        },
        $_navigateTo(name,userId){
            eventBus.$emit('switchComponent',{ name: name, props: userId, });
        }
    },
    created(){
        eventBus.$on('switchComponent', this.switchComponent);
    },
    destroyed(){
        eventBus.$off('switchComponent', this.switchComponent);
    }
}
</script>

<style scoped>
ul {
    background-color: rgba(0,0,0,0.05);
    border: 1px solid #dcdcdd;
    padding: 10px;
    text-align: center;

}

ul li {
    list-style: none;
    display: inline-block;
    margin-right: 20px;
}

</style>
