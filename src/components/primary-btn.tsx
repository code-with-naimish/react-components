
export default function PrimaryBtn(props: {
  title: string,
  onclick?: () => void
  disabled?: boolean
}) {
  return (
    <button disabled={props.disabled} onClick={props?.onclick} className="text-center justify-center rounded-lg bg-blue-500 text-white  border-transparent border  px-4 py-2.5  flex items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 gap-1 font-medium transition-all leading-none">{props.title}</button>
  )
}
