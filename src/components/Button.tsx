
type ButtonProps = {
  onClickHandler: () => void,
  btnText: string
}


export default function Button({
  onClickHandler,
  btnText
}: ButtonProps
) {

  return (
    <button
      className="bg-black rounded-lg text-white font-semibold px-4 py-2 cursor-pointer mx-2"
      onClick={onClickHandler}
    >
      {btnText}
    </button>
  )
}
