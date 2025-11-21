<template>
    <div>
        <table class="w-full">
            <thead>
            <tr class="text-left">
                <th class="p-2 w-48">Date</th>
                <th class="p-2">Niveau</th>
                <th class="p-2">Channel</th>
                <th class="p-2">Message</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(log, idx) in logs" :key="idx" class="border-t">
                <td class="p-2">{{ formatDate(log.datetime) }}</td>
                <td class="p-2">{{ log.level_name }}</td>
                <td class="p-2">{{ log.channel }}</td>
                <td class="p-2">
                    <pre class="whitespace-pre-wrap">{{ log.message }}</pre>
                </td>
            </tr>
            </tbody>
        </table>

        <div v-if="logs.length === 0" class="p-4 text-gray-500">Aucun résultat</div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLogsStore } from '~/stores/logs'

const { formatDate } = useDateFormatter();

const store = useLogsStore()
const logs = computed(() => store.filtered)
</script>
