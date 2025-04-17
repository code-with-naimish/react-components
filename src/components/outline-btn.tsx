
export default function OutlineBtn(props: {
  title: string,
  onclick: () => void
}) {
  return (
    <button onClick={props.onclick} className="rounded-lg bg-white text-blue-500 border-blue-500 border  px-4 py-2.5  flex items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 gap-1 font-medium transition-all leading-none">{props.title}</button>
  )
}
