export const Spinner = (): JSX.Element => {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-r-4 border-yellow-600">
      </div>
    </div>
  )
}