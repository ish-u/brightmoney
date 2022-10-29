const Modal = ({
  isOpen,
  setIsOpen,
  title,
  children,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-black/50"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="max-h-full max-w-full rounded-md border-2 border-emerald-800 bg-emerald-500/90 p-2 px-4 py-6"
            >
              {children}
            </div>
          </div>
        </>
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="border-2 border-emerald-700 rounded-sm bg-emerald-600 text-white text-xl m-1 p-2
                   font-bold hover:bg-emerald-700 transition duration-300 ease-in-out"
      >
        {title}
      </button>
    </>
  );
};

export default Modal;
