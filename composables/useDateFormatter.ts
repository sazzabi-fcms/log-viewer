export function useDateFormatter() {
    function formatDate(dateStr: string): string {
        if (!dateStr) return '';

        // On enlève les millisecondes et on remplace le T par un espace
        return dateStr.split('.')[0].replace('T', ' ');
    }

    return { formatDate };
}
