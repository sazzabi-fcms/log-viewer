<template>
    <div class="p-6 max-w-5xl mx-auto">
        <h1 class="text-2xl font-bold mb-4">Analyseur de logs JSON Lines</h1>
        <LogUploader/>
        <div v-if="store.raw.length">
            <LogFilters/>
            <LogTable/>
        </div>
    </div>
</template>

<script setup>
import LogUploader from '~/components/LogUploader.vue'
import LogFilters from '~/components/LogFilters.vue'
import LogTable from '~/components/LogTable.vue'
import { useLogsStore } from '~/stores/logs'

const store = useLogsStore()
</script>
