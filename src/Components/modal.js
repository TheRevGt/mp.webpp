import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div class=" fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
		<div
			class="border border-teal-500 shadow-lg modal-container bg-white w-full md:max-w-lg mx-auto rounded z-50 overflow-y-auto">
			<div class="modal-content py-4 text-left px-6">
				<div class="flex justify-between items-center pb-3">
					<p class="text-2xl font-bold">Actualizar</p>
					<div onClick={onClose} class="modal-close cursor-pointer z-50" >
						<svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
							viewBox="0 0 18 18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
					</div>
				</div>
				<div class="my-5">
                {children}
				</div>
			</div>
		</div>
	</div>
  );
};

export default Modal;
