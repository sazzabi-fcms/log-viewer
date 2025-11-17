<template>
    <div class="p-3 border rounded">
        <label class="block mb-2 font-medium">Charger un fichier JSONL</label>
        <input type="file" accept=".json,.jsonl,.log,.txt" @change="onFile"/>
        <div class="mt-2 text-sm text-gray-600" v-if="count>0">{{ count }} lignes chargées</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLogsStore } from '~/stores/logs'

const store = useLogsStore()
const count = ref(0)

const onFile = async (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    const text = await f.text()
    store.loadFromText(text)
    count.value = store.raw.length
}
</script>
