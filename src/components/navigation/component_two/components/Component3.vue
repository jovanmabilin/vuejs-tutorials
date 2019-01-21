<template>
    <div>
        Component Two 3 {{ userId }}
    </div>
</template>

<script>
import { eventBus } from '../eventBus'
export default {
    props: ['userId'],
    data(){
        return{

        }
    },

}
</script>

<style scoped>
</style>
