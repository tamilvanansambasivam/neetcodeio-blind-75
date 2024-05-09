function topKFrequent(nums, k) {
    const freqMap = {};
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    const buckets = [];
    for (const num in freqMap) {
        const freq = freqMap[num];
        if (!buckets[freq]) {
            buckets[freq] = [];
        }
        buckets[freq].push(parseInt(num));
    }

    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i]) {
            result.push(...buckets[i]);
        }
    }

    return result;
}
