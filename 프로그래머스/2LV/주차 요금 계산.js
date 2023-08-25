function solution(fees, records) {
  // 모든 차량이 있던 시간 계산하기
  let map = new Map()
  // let arr = []
  let arr = new Map()
  for (let record of records) {
    record = record.split(" ")
    if (record[2] === "IN") map.set(record[1], record[0])
    if (record[2] === "OUT") {
      let inTime = map.get(record[1]).split(":").map(item => Number(item))
      let outTime = record[0].split(":").map(item => Number(item))
      let parkTime = [outTime[0] - inTime[0], outTime[1] - inTime[1]]
      if (arr.has(record[1])) {
        const parkedTime = arr.get(record[1])
        const calculatedTime = [parkedTime[0] + parkTime[0], parkedTime[1] + parkTime[1]]
        arr.set(record[1], calculatedTime)
      } else {
        arr.set(record[1], parkTime)
      }
      map.delete(record[1])
    }
  }
  let parked = [...map]
  for (let record of parked) {
    let inTime = record[1].split(":").map(item => Number(item))
    let parkTime = [23 - inTime[0], 59 - inTime[1]]
    if (arr.has(record[0])) {
      const parkedTime = arr.get(record[0])
      const calculatedTime = [parkedTime[0] + parkTime[0], parkedTime[1] + parkTime[1]]
      arr.set(record[0], calculatedTime)
    } else {
      arr.set(record[0], parkTime)
    }
  }
  arr = [...arr]
  // console.log(arr)

  // 시간별 요금 계산하기
  // fees[0] = 기본시간, fees[1] = 기본요금, fees[2] = 단위시간, fees[3] = 단위 요금
  let bill = []
  for (const record of arr) {
    const car = record[0]
    const hour = record[1][0]
    const min = record[1][1]

    let charge = fees[1]
    const totalParking = 60 * hour + min
    const paidTime = totalParking - fees[0]
    if (paidTime > 0) {
      charge += Math.floor(paidTime / fees[2]) * fees[3]
      if (paidTime % fees[2] !== 0) {
        charge += fees[3]
      }
    }

    bill.push([car, charge])
  }

  // 가격순으로 정렬
  bill = bill.sort((a, b) => {
    if (Number(a[0]) > Number(b[0])) return 1
    if (Number(a[0]) < Number(b[0])) return -1
  })
  let answer = []
  for (const item of bill) {
    answer.push(item[1])
  }
  return answer
}