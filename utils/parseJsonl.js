export function parseJsonl(text) {
    const lines = text.split(/\r?\n/)
    const out = []
    for (const line of lines) {
        const l = line.trim()
        if (!l) continue
        try {
            out.push(JSON.parse(l))
        } catch (err) {
            // On ignore les lignes invalides mais on peut les signaler
            console.warn('Ligne JSON invalide:', l.slice(0, 200))
        }
    }
    return out
}
