<template>
    <div class="p-3 mb-4 border rounded">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div>
                <label>Date début</label>
                <input type="datetime-local" v-model="filters.start" class="w-full"/>
            </div>
            <div>
                <label>Date fin</label>
                <input type="datetime-local" v-model="filters.end" class="w-full"/>
            </div>
            <div>
                <label>Niveau</label>
                <select v-model="filters.level" class="w-full">
                    <option value="">Tous</option>
                    <option v-for="l in levels" :key="l" :value="l">{{ l }}</option>
                </select>
            </div>
            <div>
                <label>Channel</label>
                <select v-model="filters.channel" class="w-full">
                    <option value="">Tous</option>
                    <option v-for="c in channels" :key="c" :value="c">{{ c }}</option>
                </select>
            </div>
        </div>

        <div class="mt-3">
            <input type="text" v-model="filters.search" placeholder="Recherche texte..." class="w-full"/>
        </div>
    </div>
</template>

<script setup>
import { useLogsStore } from '~/stores/logs'

const store = useLogsStore()
const filters = store.filters
const levels = store.availableLevels
const channels = store.availableChannels
</script>
