export default function sequenceEqual<T>(first: T[], second: T[]): boolean {
  if (first === second) {
    return true
  }
  if (first == null || second == null) {
    return false
  }
  if (first.length !== second.length) {
    return false
  }

  const sortedFirst = first.slice().sort()
  const sortedSecond = second.slice().sort()

  return sortedFirst.every((firstItem, index) => firstItem === sortedSecond[index])
}
