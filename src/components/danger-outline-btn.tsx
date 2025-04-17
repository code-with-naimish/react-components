
export default function DangerOutlineBtn(props: {
  title: string,
  onclick: () => void
  disabled?: boolean
}) {
  return (
    <button disabled={props.disabled} onClick={props.onclick} className="text-center rounded-lg justify-center bg-white text-red-500 border-red-500 border  px-4 py-2.5  flex items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 gap-1 font-medium transition-all leading-none">{props.title}</button>
  )
}
