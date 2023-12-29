export default function InputTable( { children, className }: { children: React.ReactNode, className?: string} ) {

  return(
    <div className="mb-4">
      <div className={`rounded-md border border-gray-200 bg-gray-50 dark:border-gray-900 dark:bg-gray-900 px-[14px] py-3 ${className}`}>
        <div className="relative rounded-md">
          <div className="relative">
          {children}
          </div>
        </div>
      </div>
    </div>
  )
}