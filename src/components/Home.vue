<template>
    <div>
        <Header/>
        <!-- Dynamic/Async Components Implementation -->
        <!-- <component-one/> -->
        <!-- <component-two/> -->
        <!-- <component-three/> -->
        <component-four/>
        <Footer/>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import ComponentOne from './navigation/component_one/ParentComponent'
import ComponentTwo from './navigation/component_two/ParentComponent'
import ComponentThree from './navigation/component_three/ParentComponent'
import ComponentFour from './navigation/component_four/ParentComponent'
export default {
    components:{
        Header,
        ComponentOne,
        ComponentTwo,
        ComponentThree,
        ComponentFour,
        Footer,
    },
    data(){
        return {

        }
    },    
}
</script>

<style scoped>

</style>
