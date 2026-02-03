export default defineEventHandler(async () => {
  const { neonStatus } = useNeonServer()
  return neonStatus()
})
