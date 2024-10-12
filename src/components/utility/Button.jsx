

export default function Button({children , onClick}) {
  return (
    <button onClick={onClick} className="px-3 py-2 font-semibold text-lg border-black border rounded-md hover:bg-black hover:text-white duration-150" >{children}</button>
  )
}
