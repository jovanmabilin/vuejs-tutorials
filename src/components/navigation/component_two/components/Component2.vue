<template>
    <div>
        Component Two 2 {{userId}}
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
