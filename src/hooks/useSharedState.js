import useSWR from 'swr'

export default function useSharedState(key, initial) {
  const {data: state, mutate: setState} = useSWR(key, {
    initialData: initial,
  })
  return [state, setState]
}
