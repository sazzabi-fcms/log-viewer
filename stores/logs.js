import { defineStore } from 'pinia'
import { parseJsonl } from '~/utils/parseJsonl'

export const useLogsStore = defineStore('logs', {
    state: () => ({
        raw: [],
        filters: {
            start: null,
            end: null,
            level: '',
            channel: '',
            search: '',
        }
    }),
    getters: {
        filtered(state) {
            return state.raw.filter(entry => {
                // date filter
                if (state.filters.start) {
                    const start = new Date(state.filters.start)
                    if (new Date(entry.datetime) < start) return false
                }
                if (state.filters.end) {
                    const end = new Date(state.filters.end)
                    if (new Date(entry.datetime) > end) return false
                }
                if (state.filters.level && entry.level_name !== state.filters.level) return false
                if (state.filters.channel && entry.channel !== state.filters.channel) return false
                if (state.filters.search) {
                    const s = state.filters.search.toLowerCase()
                    if (!String(entry.message || '').toLowerCase().includes(s) &&
                        !JSON.stringify(entry.context || {}).toLowerCase().includes(s)) {
                        return false
                    }
                }
                return true
            })
        },
        availableLevels(state) {
            return [...new Set(state.raw.map(r => r.level_name).filter(Boolean))].sort()
        },
        availableChannels(state) {
            return [...new Set(state.raw.map(r => r.channel).filter(Boolean))].sort()
        }
    },
    actions: {
        loadFromText(text) {
            this.raw = parseJsonl(text)
        },
        clear() {
            this.raw = []
        }
    }
})
