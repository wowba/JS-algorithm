function solution(n, m) {
    const greatestCommonDivider = (n, m) => {
        let arr = [n, m].sort((a, b) => a - b) // arr[0] 작은수 arr[1] 큰수
        let [small, big] = arr

        while (true) {
            let left = big % small
            if (left === 0) {
                break
            } else {
                big = small
                small = left
            }
        }

        return small
    }

    const GCD = greatestCommonDivider(n, m)
    const LCM = n * m / GCD

    return [GCD, LCM]
}