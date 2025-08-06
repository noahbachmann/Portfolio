import { Burger } from '@svg'

export default function Modal({ content, onClose }){
	return(
		<div
			onClick={ onClose }
			className="fixed inset-0 flex items-center justify-center bg-secondary/90 backdrop-blur z-50">
			<div className="size-32 fixed top-20 right-20 text-primary cursor-pointer">
				<Burger isOpen />
			</div>
			<div onClick={(e) => e.stopPropagation()}>
				{ content }
			</div>
		</div>
	)
}