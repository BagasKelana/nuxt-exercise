import { ref, onBeforeUnmount, onMounted } from 'vue'

export const useCurrentTime = () => {
  let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const currentTime = ref({ date: '', time: '' })

  function updateTime() {
    let cd = new Date()
    currentTime.value.time =
      zeroPadding(cd.getHours(), 2) +
      ':' +
      zeroPadding(cd.getMinutes(), 2) +
      ':' +
      zeroPadding(cd.getSeconds(), 2)
    currentTime.value.date =
      zeroPadding(cd.getFullYear(), 4) +
      '-' +
      zeroPadding(cd.getMonth() + 1, 2) +
      '-' +
      zeroPadding(cd.getDate(), 2) +
      ' ' +
      week[cd.getDay()]
  }

  onMounted(() => {
    const updateTimeInterval = setInterval(updateTime, 1000)
    onBeforeUnmount(() => {
      clearInterval(updateTimeInterval)
    })
  })

  updateTime()
  function zeroPadding(num, digit) {
    let zero = ''
    for (let i = 0; i < digit; i++) {
      zero += '0'
    }
    return (zero + num).slice(-digit)
  }
  return {
    currentTime,
  }
}
