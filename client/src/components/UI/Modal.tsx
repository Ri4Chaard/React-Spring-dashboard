interface Modal {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}
export const Modal = ({ children, visible, setVisible }: Modal) => {
    return (
        <div
            className={
                visible
                    ? "fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-55 flex justify-center items-center"
                    : "fixed top-0 bottom-0 right-0 left-0 bg-opacity-55 hidden"
            }
            onClick={() => setVisible(false)}
        >
            <div
                className="p-6 bg-white min-w-60 border border-solid rounded"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
