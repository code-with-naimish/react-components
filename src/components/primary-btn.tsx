
export default function PrimaryBtn(props: {
  title: string,
  onclick?: () => void
}) {
  return (
    <button onClick={props?.onclick} className="rounded-lg bg-blue-500 text-white  border-transparent border  px-4 py-2.5  flex items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 gap-1 font-medium transition-all leading-none">{props.title}</button>
  )
}
