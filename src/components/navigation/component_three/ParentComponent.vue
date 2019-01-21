<template>
    <div>
        <ul>
            <li><a class="btn btn-primary text-white" @click="$_navigateTo('Component1')">Component1</a></li>
            <li><a class="btn btn-primary text-white" @click="$_navigateTo('Component2')">Component2</a></li>
            <li><a class="btn btn-primary text-white" @click="$_navigateTo('Component3')">Component3</a></li>
        </ul>

        <component :is="currentComponent"></component>
        
    </div>
</template>

<script>
// Async Component Implementation No.3
import { eventBus } from './eventBus'

export default {
    components:{
         Component1: () => import('./components/Component1'),
         Component2: () => import('./components/Component2'),
         Component3: () => import('./components/Component3'),
    },
    data(){
        return{
            currentComponent: 'Component1'
        }
    },

    methods:{
        switchComponent(component){
            this.currentComponent = component.name;
        },
        $_navigateTo(name){
            eventBus.$emit('switchComponent', { name: name });
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
